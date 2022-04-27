import { Fragment, useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
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

const Planner = () => {
  const { state, dispatch } = useContext(AppContext);
  const { characterBuild } = state;
  const { game, faction, character, code } = useParams();

  const [urlLoaded, setUrlLoaded] = useState(false);

  useEffect(() => {
    if (state.characterData === null) {
      dispatch({ type: AppContextActions.changeGame, payload: { selectedGame: game } });
      dispatch({ type: AppContextActions.changeFaction, payload: { selectedFaction: faction } });

      api
        .getCharacterSkillTree(game as string, faction as string, character as string)
        .then((response: CharacterInterface) => {
          dispatch({ type: AppContextActions.changeCharacterData, payload: { characterData: response } });
          const emptyCharacterBuild = createEmptyCharacterBuild(
            response,
            game as string,
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
      game as string,
      faction as string,
      character as string
    );
    dispatch({ type: AppContextActions.changeCharacterBuild, payload: { characterBuild: newCharacterBuild } });
    setUrlLoaded(true);
  }, [code, state.characterData]);

  const horizontalScroll = (event: React.WheelEvent) => {
    const container = document.getElementById('horScrollContainer');
    let containerScrollPosition = container?.scrollLeft;
    if (!containerScrollPosition) {
      containerScrollPosition = 0;
    }
    container?.scrollTo({
      top: 0,
      left: containerScrollPosition + event.deltaY,
    });
  };

  const resetButtonHandler = () => {
    if (!state.characterData) {
      return;
    }
    const emptyCharacterBuild = createEmptyCharacterBuild(
      state.characterData,
      game as string,
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
  const lordName = gameData[game].characters[`${faction}_lords`]?.[character]?.name;
  // @ts-expect-error ts(7053)
  const heroName = gameData[game].characters[`${faction}_heroes`]?.[character]?.name;
  const characterName = lordName === undefined ? heroName : lordName;

  const rankLimit = game?.includes('2') ? 40 : 50;

  return (
    <Fragment>
      {state.characterData === null ? (
        <div className="flex flex-col place-items-center">
          <p className="text-center text-4xl text-gray-200">Loading Character Data...</p>
          <div className="lds-dual-ring"></div>
        </div>
      ) : (
        <Fragment>
          <div className="h-[6vh] flex flex-row flex-nowrap">
            <div className="invisible w-28">Spacer</div>
            <h1 className="flex-grow text-center text-4xl m-2 text-gray-200">{characterName}</h1>
            <button
              className="select-none text-center mr-6 my-auto px-2 bg-blue-600 hover:bg-blue-500 text-gray-200 text-2xl border rounded-xl"
              onClick={shareButtonHandler}
            >
              Share
            </button>
            <button
              className="select-none text-center mr-6 my-auto px-2 bg-gray-500 hover:bg-gray-400 text-gray-200 text-2xl border rounded-xl"
              onClick={resetButtonHandler}
            >
              Reset
            </button>
            {characterBuild?.rank && characterBuild.rank <= rankLimit ? (
              <p className="select-none text-center my-auto text-gray-200 text-2xl">Rank: {characterBuild?.rank}</p>
            ) : (
              <p className="select-none text-center my-auto text-red-500 text-2xl">Rank: {characterBuild?.rank}</p>
            )}
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
            <BackgroundSkills />
            <BuildStorage />
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Planner;
