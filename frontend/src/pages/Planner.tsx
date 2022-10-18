import { Fragment, useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/api';
import { AppContext, AppContextActions } from '../contexts/AppContext';
import { createCharacterBuildFromArray, createEmptyCharacterBuild } from '../utils/sharedFunctions';
import { convertCodeToBuild } from '../utils/urlFunctions';
import { CharacterInterface } from '../types/interfaces/CharacterInterface';
import SkillRow from '../components/Planner/SkillRow';
import LoadingSpinner from '../components/LoadingSpinner';
import ExtrasDrawer from '../components/Planner/ExtrasDrawer';
import TopBar from '../components/Planner/TopBar';
import CharacterPortrait from '../components/Planner/CharacterPortrait';

const Planner = () => {
  const { state, dispatch } = useContext(AppContext);
  const { characterBuild } = state;
  const { mod, faction, character, code } = useParams();

  const [urlLoaded, setUrlLoaded] = useState(false);
  const [effectiveRank, setEffectiveRank] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    if (state.characterData === null) {
      const game = mod?.includes('2') ? '2' : '3';
      dispatch({ type: AppContextActions.changeGame, payload: { selectedGame: game } });
      dispatch({ type: AppContextActions.changeMod, payload: { selectedMod: mod } });
      dispatch({ type: AppContextActions.changeFaction, payload: { selectedFaction: faction } });

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
        .catch(() => {
          toast.error('Error retrieving character data from server.');
          dispatch({ type: AppContextActions.changeCharacterData, payload: { characterData: null } });
          navigate('/404');
        });
    }
  }, [state.characterData]);

  useEffect(() => {
    if (!code || !state.characterData || urlLoaded) {
      return;
    }
    const importBuild = convertCodeToBuild(code);
    const newCharacterBuild = createCharacterBuildFromArray(
      importBuild,
      state.characterData,
      mod as string,
      faction as string,
      character as string
    );
    dispatch({ type: AppContextActions.changeCharacterBuild, payload: { characterBuild: newCharacterBuild } });
    setUrlLoaded(true);
  }, [code, state.characterData]);

  useEffect(() => {
    if (
      typeof characterBuild?.rank === 'number' &&
      typeof characterBuild?.startingSkillPoints === 'number' &&
      typeof characterBuild?.autoUnlockSkillPoints === 'number'
    ) {
      setEffectiveRank(
        characterBuild?.rank - characterBuild?.startingSkillPoints - characterBuild?.autoUnlockSkillPoints
      );
    }
  }, [characterBuild?.rank, characterBuild?.startingSkillPoints, characterBuild?.autoUnlockSkillPoints]);

  const horizontalScroll = (event: React.WheelEvent) => {
    const container = document.getElementById('horScrollContainer');
    const containerScrollPosition = container?.scrollLeft !== undefined ? container?.scrollLeft : 0;
    container?.scrollTo({
      left: containerScrollPosition + event.deltaY,
    });
  };

  return (
    <div className="h-[88vh] flex flex-col bg-gray-700 w-full border border-gray-500 rounded-md px-2 py-2 overflow-y-hidden overflow-x-hidden">
      {state.characterData === null ? (
        <LoadingSpinner loadingText="Loading Character Data..." />
      ) : (
        <Fragment>
          <TopBar effectiveRank={effectiveRank} />
          <CharacterPortrait />
          <div
            className="grow max-h-[73vh] overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-600"
            id="horScrollContainer"
            onWheel={(event) => {
              horizontalScroll(event);
            }}
          >
            <table className="table-fixed">
              <thead></thead>
              <tbody className="flex flex-col flex-nowrap">
                {state.characterData?.skillTree?.map((skillRow, index) => {
                  return <SkillRow key={index} skillRow={skillRow} yIndex={index} />;
                })}
              </tbody>
            </table>
          </div>

          <ExtrasDrawer />
        </Fragment>
      )}
    </div>
  );
};

export default Planner;
