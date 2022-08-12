import { useContext, useEffect, useState } from 'react';
import { AppContext, AppContextActions } from '../../contexts/AppContext';
import gameData from '../../data/gameData';
import factionImages from '../../imgs/factions/factionImages';
import ReactImage from '../ReactImage';
import placeholderImg from '../../imgs/other/0placeholder.webp';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const FactionSelector = () => {
  const { state, dispatch } = useContext(AppContext);
  const { selectedMod } = state;
  const [currentGameFactions, setCurrentGameFactions] = useState(Object.keys(gameData['vanilla2'].factions));

  useEffect(() => {
    setCurrentGameFactions(Object.keys(gameData[selectedMod].factions));
  }, [selectedMod]);

  return (
    <div className="justify-self-center">
      <div className="flex flex-row place-content-center w-[80vw] mx-auto mt-2">
        <hr className="grow mt-[1.25rem] opacity-50" />
        <h1 className="w-max text-center text-4xl mx-2 text-gray-200 text-shadow">Factions</h1>
        <hr className="grow mt-[1.25rem] opacity-50" />
      </div>
      <ul className="flex flex-row flex-wrap justify-center">
        <TransitionGroup component={null}>
          {currentGameFactions?.map((factionKey) => {
            const factionName = gameData[selectedMod]?.factions[factionKey];
            let liClassName =
              'flex-col m-1 p-2 border border-gray-500 shadow-lg shadow-gray-800/60 rounded-lg hover-scale';

            if (factionKey === state.selectedFaction) {
              liClassName += ' bg-gray-600 hover:bg-gray-500/80 scale-105';
            } else {
              liClassName += ' hover:bg-gray-600';
            }

            return (
              <CSSTransition
                key={factionKey}
                classNames={{
                  enterActive: 'animate__animated animate__faster animate__flipInX',
                  exitActive: 'animate__animated animate__faster animate__flipOutX',
                }}
                timeout={500}
              >
                <li
                  key={factionKey}
                  className={liClassName}
                  onClick={() => {
                    dispatch({ type: AppContextActions.changeFaction, payload: { selectedFaction: factionKey } });
                  }}
                >
                  <h2 className="text-center h-8 text-gray-200 text-2xl text-shadow mb-2">{factionName}</h2>
                  <div className="flex flex-row justify-center">
                    <ReactImage
                      srcList={[factionImages[factionKey as keyof typeof factionImages], placeholderImg]}
                      alt={`${factionName} icon`}
                      className="w-20 drop-shadow-[0.1rem_0.1rem_0.35rem_rgba(0,0,0,0.7)]"
                      w="96"
                      h="96"
                    />
                  </div>
                </li>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </ul>
    </div>
  );
};

export default FactionSelector;
