import { Fragment, useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/api';
import { AppContext, AppContextActions } from '../contexts/AppContext';
import { createCharacterBuildFromArray, createEmptyCharacterBuild } from '../utils/sharedFunctions';
import { convertCodeToBuild } from '../utils/urlFunctions';
import { CharacterInterface } from '../types/interfaces/CharacterInterface';
import LoadingSpinner from '../components/LoadingSpinner';
import ExtrasDrawer from '../components/Planner/ExtrasDrawer';
import TopBar from '../components/Planner/TopBar';
import CharacterPortrait from '../components/Planner/CharacterPortrait';
import SkillTable from '../components/Planner/SkillTable';
import useBulkMediaQueries from '../hooks/useBulkMediaQueries';

const Planner = () => {
  const { state, dispatch } = useContext(AppContext);
  const { characterData } = state;
  const { mod, faction, character, code } = useParams();
  const { isMobileWidth, isMobileHeight, isShortWidth, isShortHeight, isThin } = useBulkMediaQueries();

  const [urlLoaded, setUrlLoaded] = useState(false);
  const [shortViewToggle, setShortViewToggle] = useState(false);

  const isMobile = isMobileWidth || isMobileHeight ? true : false;
  const isShort = isShortWidth || isShortHeight ? true : false;

  const navigate = useNavigate();

  useEffect(() => {
    if (characterData === null) {
      const game = mod?.includes('2') ? '2' : '3';
      dispatch({
        type: AppContextActions.changeGameModFaction,
        payload: { selectedGame: game, selectedMod: mod, selectedFaction: faction },
      });

      api
        .getCharacterSkillTree(mod as string, faction as string, character as string)
        .then((response: CharacterInterface) => {
          dispatch({ type: AppContextActions.changeCharacterData, payload: { characterData: response } });
          const emptyCharacterBuild = createEmptyCharacterBuild(
            response,
            mod as string,
            faction as string,
            character as string
          );
          if (!code) {
            dispatch({
              type: AppContextActions.changeCharacterBuild,
              payload: { characterBuild: emptyCharacterBuild },
            });
          }
        })
        .catch((err) => {
          toast.error(`${err}`);
          dispatch({ type: AppContextActions.changeCharacterData, payload: { characterData: null } });
          navigate('/404');
        });
    }
  }, [characterData]);

  useEffect(() => {
    if (!code || !characterData || urlLoaded) {
      return;
    }
    const importBuild = convertCodeToBuild(code);
    const newCharacterBuild = createCharacterBuildFromArray(
      importBuild,
      characterData,
      mod as string,
      faction as string,
      character as string
    );
    dispatch({ type: AppContextActions.changeCharacterBuild, payload: { characterBuild: newCharacterBuild } });
    setUrlLoaded(true);
  }, [code, characterData]);

  useEffect(() => {
    setShortViewToggle(false);
  }, [isShort]);

  useEffect(() => {
    setShortViewToggle(false);
  }, [isThin]);

  return (
    <div className="grow mt-1 flex flex-col bg-gray-700 w-full border border-gray-500 rounded-md px-2 py-2 overflow-y-hidden overflow-x-hidden">
      {characterData === null ? (
        <LoadingSpinner loadingText="Loading Character Data..." />
      ) : (
        <Fragment>
          {!isShort && <TopBar isMobile={isMobile} />}

          {!isMobile && <CharacterPortrait />}

          <SkillTable faction={faction} shortViewToggle={shortViewToggle} />

          {!isThin && <ExtrasDrawer shortViewToggle={shortViewToggle} setShortViewToggle={setShortViewToggle} />}
        </Fragment>
      )}
    </div>
  );
};

export default Planner;
