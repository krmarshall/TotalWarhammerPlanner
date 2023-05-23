import { Fragment, useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/api';
import { AppContext, AppContextActions } from '../contexts/AppContext';
import { createCharacterBuildFromArray, createEmptyCharacterBuild } from '../utils/sharedFunctions';
import { convertCodeToBuild } from '../utils/urlFunctions';
import LoadingSpinner from '../components/LoadingSpinner';
import ExtrasDrawer from '../components/Planner/ExtrasDrawer';
import TopBar from '../components/Planner/TopBar';
import CharacterPortrait from '../components/Planner/CharacterPortrait';
import SkillTable from '../components/Planner/SkillTable';
import useBulkMediaQueries from '../hooks/useBulkMediaQueries';
import gameData from '../data/gameData';
import UnitStats from '../components/Planner/UnitStats';

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

  const lordName = gameData[mod as string].characters[faction as string]?.lords?.[character as string]?.name;
  const heroName = gameData[mod as string].characters[faction as string]?.heroes?.[character as string]?.name;
  const characterName = lordName === undefined ? heroName : lordName;

  useEffect(() => {
    if (characterData === null) {
      dispatch({
        type: AppContextActions.changeModFaction,
        payload: { selectedMod: mod, selectedFaction: faction },
      });

      api
        .getCharacterSkillTree(mod as string, faction as string, character as string)
        .then((response) => {
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

  useEffect(() => {
    document.title = `TWP - ${characterName}`;
  }, []);

  let tableStatsContainer = 'flex flex-row flex-nowrap';
  if (isShort && shortViewToggle) {
    tableStatsContainer += ' h-0';
  } else {
    tableStatsContainer += ' grow max-h-[88vh] min-h-[50vh]';
  }
  return (
    <div className="grow mt-1 flex flex-col bg-gray-700 w-full border border-gray-500 rounded-md px-2 py-2 overflow-y-hidden overflow-x-hidden">
      {characterData === null ? (
        <LoadingSpinner loadingText="Loading Character Data..." />
      ) : (
        <Fragment>
          {!isShort && <TopBar isMobile={isMobile} />}

          {!isMobile && <CharacterPortrait />}

          <div className={tableStatsContainer}>
            <UnitStats />
            <SkillTable faction={faction} />
          </div>

          {!isThin && <ExtrasDrawer shortViewToggle={shortViewToggle} setShortViewToggle={setShortViewToggle} />}
        </Fragment>
      )}
    </div>
  );
};

export default Planner;
