import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import api from '../../api/api';
import { AppContext, AppContextActions } from '../../contexts/AppContext';
import TechSelectorCell from './TechSelectorCell';
import techGameData from '../../data/techGameData';

const TechSelector = () => {
  const { state, dispatch } = useContext(AppContext);
  const { selectedModTech } = state;
  const navigate = useNavigate();

  const gameTechKeys = Object.keys(techGameData[selectedModTech].techTrees);

  const handleTechSelect = (techKey: string) => {
    const apiPromise = api.getTechTree(selectedModTech, techKey).then((response) => {
      dispatch({ type: AppContextActions.changeTechData, payload: { techData: response } });
      navigate(`/tech/${selectedModTech}/${techKey}`);
    });
    toast.promise(
      apiPromise,
      {
        loading: 'Loading',
        success: 'Success',
        error: (err) => `${err}`,
      },
      { loading: { duration: 5000 } }
    );
  };

  return (
    <div className="justify-self-center">
      <div className="flex flex-row place-content-center w-[80vw] mx-auto mt-2">
        <hr className="grow mt-[1.25rem] opacity-50" />
        <h1 className="w-max text-center text-4xl mx-2 text-gray-200 text-shadow">Tech Trees</h1>
        <hr className="grow mt-[1.25rem] opacity-50" />
      </div>
      <ul className="flex flex-row flex-wrap justify-center">
        <TransitionGroup component={null}>
          {gameTechKeys.map((techKey) => {
            return (
              <CSSTransition
                key={techKey}
                classNames={{
                  enterActive: 'animate__animated animate__faster animate__flipInX',
                  exitActive: 'hidden',
                }}
                timeout={500}
              >
                <TechSelectorCell techKey={techKey} handleTechSelect={handleTechSelect} />
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </ul>
    </div>
  );
};

export default TechSelector;
