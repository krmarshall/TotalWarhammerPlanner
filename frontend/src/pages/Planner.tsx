import { Fragment, useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import api from '../api/api';
import SkillRow from '../components/SkillRow';
import { AppContext, AppContextActions } from '../contexts/AppContext';
import { createEmptyCharacterBuild } from '../sharedFunctions/sharedFunctions';
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

  useEffect(() => {
    if (state.characterData === null) {
      api
        .getCharacterSkillTree(faction, character)
        .then((response: CharacterInterface) => {
          dispatch({ type: AppContextActions.changeCharacterData, payload: { characterData: response } });
          const emptyCharacterBuild = createEmptyCharacterBuild(response, faction, character);
          dispatch({ type: AppContextActions.changeCharacterBuild, payload: { characterBuild: emptyCharacterBuild } });
        })
        .catch((error) => {
          console.log(error);
          dispatch({ type: AppContextActions.changeCharacterData, payload: { characterData: null } });
        });
    }
  }, [state.characterData]);

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

  return (
    <Fragment>
      {state.characterData === null ? (
        <div>
          <p className="text-center text-4xl text-gray-200">Loading Character Data...</p>
        </div>
      ) : (
        <Fragment>
          <div className="flex flex-row flex-nowrap">
            <div className="invisible w-28">Spacer</div>
            <h1 className="flex-grow text-center text-4xl m-2 text-gray-200">{state.characterData.name}</h1>
            <button
              className="text-center mr-6 my-auto px-2 bg-gray-500 hover:bg-gray-400 text-gray-200 text-2xl border rounded-xl"
              onClick={resetButtonHandler}
            >
              Reset
            </button>
            {characterBuild?.rank && characterBuild.rank <= 40 ? (
              <p className="text-center my-auto text-gray-200 text-2xl">Rank: {characterBuild?.rank}</p>
            ) : (
              <p className="text-center my-auto text-red-500 text-2xl">Rank: {characterBuild?.rank}</p>
            )}
          </div>
          <hr />
          <div
            className="pb-2 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-600"
            id="horScrollContainer"
            onWheel={(event) => {
              horizontalScroll(event);
            }}
          >
            <table className="table-fixed">
              <thead></thead>
              <tbody className="flex flex-col flex-nowrap">
                {state.characterData.skillTree.map((skillLine, index) => {
                  return <SkillRow key={index} skillLine={skillLine} yIndex={index} />;
                })}
              </tbody>
            </table>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Planner;
