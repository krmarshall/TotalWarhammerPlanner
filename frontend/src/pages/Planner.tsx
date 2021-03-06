import { Fragment, useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/api';
import { AppContext, AppContextActions } from '../contexts/AppContext';
import { createCharacterBuildFromArray, createEmptyCharacterBuild } from '../utils/sharedFunctions';
import { convertBuildToCode, convertCodeToBuild } from '../utils/urlFunctions';
import { CharacterInterface } from '../types/interfaces/CharacterInterface';
import gameData from '../data/gameData';
import BuildStorage from '../components/Planner/BuildStorage';
import SkillRow from '../components/Planner/SkillRow';
import CharacterItems from '../components/Planner/CharacterItems';
import BackgroundSkills from '../components/Planner/BackgroundSkills';
import LoadingSpinner from '../components/LoadingSpinner';

import resetIcon from '../imgs/other/icon_reset.webp';
import shareIcon from '../imgs/other/resume_saved.webp';
import backIcon from '../imgs/other/icon_home.webp';

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
          dispatch({ type: AppContextActions.changeCharacterBuild, payload: { characterBuild: emptyCharacterBuild } });
        })
        .catch(() => {
          toast.error('Error retrieving character data from server.');
          dispatch({ type: AppContextActions.changeCharacterData, payload: { characterData: null } });
        });
    }
  }, [state.characterData]);

  useEffect(() => {
    if (!code || !state.characterData) {
      return;
    }
    if (urlLoaded) {
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

  const resetButtonHandler = () => {
    if (!state.characterData) {
      return;
    }
    const emptyCharacterBuild = createEmptyCharacterBuild(
      state.characterData,
      mod as string,
      faction as string,
      character as string
    );
    dispatch({ type: AppContextActions.changeCharacterBuild, payload: { characterBuild: emptyCharacterBuild } });
  };

  const shareButtonHandler = () => {
    if (!characterBuild) {
      return;
    }
    const buildLink = convertBuildToCode(characterBuild);

    navigator.clipboard
      .writeText(buildLink)
      .then(() => {
        toast.success('Build copied to clipboard!', { id: 'success clipboard' });
      })
      .catch(() => {
        toast.error('Error copying build to the clipboard...', { id: 'error clipboard' });
      });
  };

  // @ts-expect-error ts(7053)
  const lordName = gameData[mod].characters[`${faction}_lords`]?.[character]?.name;
  // @ts-expect-error ts(7053)
  const heroName = gameData[mod].characters[`${faction}_heroes`]?.[character]?.name;
  const characterName = lordName === undefined ? heroName : lordName;

  const rankLimit = mod?.includes('2') ? 40 : 50;

  return (
    <Fragment>
      {state.characterData === null ? (
        <LoadingSpinner loadingText="Loading Character Data..." />
      ) : (
        <Fragment>
          <div className="h-[6vh] flex flex-row place-content-between">
            <div className="w-[20vw] flex place-content-start">
              <button
                className="flex flex-row place-content-center my-auto px-1.5 bg-gray-500 hover:bg-gray-400 border rounded-xl drop-shadow-lg"
                onClick={() => navigate('/')}
              >
                <img src={backIcon} width="45" height="45" className="my-auto w-8 h-8" draggable={false} />
                <p className="text-center text-gray-200 text-2xl px-0.5 ml-1">Home</p>
              </button>
            </div>
            <h1 className="z-10 text-center text-4xl m-2 text-gray-200 text-shadow-border">{characterName}</h1>
            <div className="w-[20vw] flex place-content-end">
              <button
                className="flex flex-row place-content-center mr-4 my-auto px-2 bg-blue-600 hover:bg-blue-500 border rounded-xl drop-shadow-lg"
                onClick={shareButtonHandler}
              >
                <img src={shareIcon} width="20" height="20" className="my-auto w-5 h-5" draggable={false} />
                <p className="text-center text-gray-200 text-2xl px-0.5 ml-1">Share</p>
              </button>
              <button
                className="flex flex-row place-content-center mr-4 px-2 my-auto bg-gray-500 hover:bg-gray-400 border rounded-xl drop-shadow-lg"
                onClick={resetButtonHandler}
              >
                <img src={resetIcon} width="20" height="20" className="my-auto w-6 h-6" draggable={false} />
                <p className="text-center text-gray-200 text-2xl px-0.5">Reset</p>
              </button>
              {effectiveRank <= rankLimit ? (
                <p className="w-18 mr-2 text-center my-auto text-gray-200 text-2xl text-shadow">
                  Rank: {effectiveRank}
                </p>
              ) : (
                <p className="w-18 mr-2 text-center my-auto text-red-500 text-2xl text-shadow">Rank: {effectiveRank}</p>
              )}
            </div>
          </div>
          <div
            className="h-[56vh] pb-2 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-600"
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
          <div className="h-[20vh] flex flex-row place-content-around mt-4">
            {state.characterData?.items && state.characterData?.items.length > 0 && <CharacterItems />}
            {state.characterData.backgroundSkills && state.characterData.backgroundSkills.length > 0 && (
              <BackgroundSkills />
            )}

            <BuildStorage />
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Planner;
