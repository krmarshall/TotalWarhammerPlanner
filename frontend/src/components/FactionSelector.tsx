import { useContext, useEffect, useState } from 'react';
import { AppContext, AppContextActions } from '../contexts/AppContext';
import gameData from '../data/gameData';
import factionImages from '../imgs/factions/factionImages';

const FactionSelector = () => {
  const { state, dispatch } = useContext(AppContext);
  const [currentGameFactions, setCurrentGameFactions] = useState(Object.keys(gameData['vanilla2'].factions));

  useEffect(() => {
    setCurrentGameFactions(Object.keys(gameData[state.selectedGame as keyof typeof gameData].factions));
  }, [state.selectedGame]);

  return (
    <div className="justify-self-center">
      <h1 className="text-center text-4xl m-2 text-gray-200">Factions</h1>
      <ul className="flex flex-row flex-wrap justify-center select-none">
        {currentGameFactions?.map((factionKey) => {
          // @ts-expect-error ts(7053)
          const factionName = gameData[state.selectedGame].factions[factionKey];
          let liClassName = 'flex-col m-1 p-2 border border-gray-500 shadow-lg shadow-gray-800/60 rounded-lg';

          if (factionKey === state.selectedFaction) {
            liClassName += ' bg-gray-600 hover:bg-gray-500';
          } else {
            liClassName += ' hover:bg-gray-600';
          }

          return (
            <li
              key={factionKey}
              className={liClassName}
              onClick={() => {
                dispatch({ type: AppContextActions.changeFaction, payload: { selectedFaction: factionKey } });
              }}
            >
              <h2 className="text-center text-gray-200 text-xl mb-1">{factionName}</h2>
              <div className="flex flex-row justify-center">
                <img
                  className="w-20 drop-shadow-[0.1rem_0.1rem_0.35rem_rgba(0,0,0,0.7)]"
                  draggable={false}
                  src={factionImages[factionKey as keyof typeof factionImages]}
                  alt={`${factionName} icon`}
                  height="96"
                  width="96"
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FactionSelector;
