import { Fragment, useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import api from '../api/api';
import SkillRow from '../components/SkillRow';
import { AppContext, AppContextActions } from '../contexts/AppContext';

interface PlannerParamsInterface {
  faction: string;
  character: string;
  code?: string;
}

const Planner = () => {
  const { state, dispatch } = useContext(AppContext);
  const { faction, character, code } = useParams<PlannerParamsInterface>();

  useEffect(() => {
    if (state.characterData === null) {
      api
        .getCharacterSkillTree(faction, character)
        .then((response) => {
          dispatch({ type: AppContextActions.changeCharacterData, payload: response });
        })
        .catch((error) => {
          console.log(error);
          dispatch({ type: AppContextActions.changeCharacterData, payload: null });
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

  return (
    <Fragment>
      {state.characterData === null ? (
        <div>
          <p className="text-center text-4xl text-gray-200">Loading Character Data...</p>
        </div>
      ) : (
        <Fragment>
          <h1 className="text-center text-4xl m-2 text-gray-200">{state.characterData.name}</h1>
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
