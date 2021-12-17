import { Fragment, useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import api from '../api/api';
import BuildStorage from '../components/BuildStorage';
import CharacterItems from '../components/CharacterItems';
import SkillRow from '../components/SkillRow';
import { AppContext, AppContextActions } from '../contexts/AppContext';
import { createCharacterBuildFromArray, createEmptyCharacterBuild } from '../sharedFunctions/sharedFunctions';
import { isValidSkillTree } from '../sharedFunctions/SkillVerification';
import { convertBuildToCode, convertCodeToBuild } from '../sharedFunctions/urlFunctions';
import CharacterInterface from '../types/interfaces/CharacterInterface';

interface PlannerParamsInterface {
  faction: string;
  character: string;
  code?: string;
}

const Planner = () => {
  const { state, dispatch } = useContext(AppContext);
  const { characterBuild } = state;
  const { faction, character, code } = useParams<PlannerParamsInterface>();

  const [urlLoaded, setUrlLoaded] = useState(false);

  useEffect(() => {
    if (state.characterData === null) {
      api
        .getCharacterSkillTree(faction, character)
        .then((response: CharacterInterface) => {
          dispatch({ type: AppContextActions.changeCharacterData, payload: { characterData: response } });
          const emptyCharacterBuild = createEmptyCharacterBuild(response, faction, character);
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
    const newCharacterBuild = createCharacterBuildFromArray(importBuild, state.characterData, faction, character);
    if (!isValidSkillTree(newCharacterBuild, state.characterData)) {
      toast.error(
        'The build you are trying to load is invalid, an update or bugfix to the character tree may have caused the build to be invalid. Sorry!'
      );
      const emptyCharacterBuild = createEmptyCharacterBuild(state.characterData, faction, character);
      dispatch({ type: AppContextActions.changeCharacterBuild, payload: { characterBuild: emptyCharacterBuild } });
      return;
    }
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
    const emptyCharacterBuild = createEmptyCharacterBuild(state.characterData, faction, character);
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
        toast.success('Build copied to clipboard!');
      })
      .catch(() => {
        toast.error('Error copying build to the clipboard...');
      });
  };

  return (
    <Fragment>
      {state.characterData === null ? (
        <div className="flex flex-col place-items-center">
          <p className="text-center text-4xl text-gray-200">Loading Character Data...</p>
          <div className="lds-dual-ring"></div>
        </div>
      ) : (
        <Fragment>
          <div className="flex flex-row flex-nowrap">
            <div className="invisible w-28">Spacer</div>
            <h1 className="flex-grow text-center text-4xl m-2 text-gray-200">{state.characterData.name}</h1>
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
            {characterBuild?.rank && characterBuild.rank <= 40 ? (
              <p className="select-none text-center my-auto text-gray-200 text-2xl">Rank: {characterBuild?.rank}</p>
            ) : (
              <p className="select-none text-center my-auto text-red-500 text-2xl">Rank: {characterBuild?.rank}</p>
            )}
          </div>
          <div
            className="pb-2 shadow-lg border border-gray-500 rounded overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-600"
            id="horScrollContainer"
            onWheel={(event) => {
              horizontalScroll(event);
            }}
          >
            <table className="table-fixed">
              <thead></thead>
              <tbody className="flex flex-col flex-nowrap">
                {state.characterData?.skillTree?.map((skillLine, index) => {
                  return <SkillRow key={index} skillLine={skillLine} yIndex={index} />;
                })}
              </tbody>
            </table>
          </div>
          <div className="flex flex-row place-content-between mt-4">
            <CharacterItems />
            <BuildStorage />
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Planner;
