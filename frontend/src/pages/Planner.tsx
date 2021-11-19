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
  return (
    <Fragment>
      {state.characterData === null ? (
        <div>
          <p className="text-center text-4xl text-gray-200">Loading Character Data...</p>
        </div>
      ) : (
        <div>
          <h1 className="text-center text-4xl m-2 text-gray-200">{state.characterData.name}</h1>
          <table className="table-fixed">
            <thead>
              {[...Array(12)].map((element, index) => {
                return <th key={index} className="w-1/12"></th>;
              })}
            </thead>
            <tbody className="flex flex-col flex-nowrap">
              {state.characterData.skillTree.map((skillLine, index) => {
                return <SkillRow key={index} skillLine={skillLine} yIndex={index} />;
              })}
            </tbody>
          </table>
        </div>
      )}
    </Fragment>
  );
};

export default Planner;
