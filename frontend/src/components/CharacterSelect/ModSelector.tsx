import { useContext, useEffect, useState } from 'react';
import { AppContext, AppContextActions } from '../../contexts/AppContext';
import gameData from '../../data/gameData';

const ModSelector = () => {
  const { state, dispatch } = useContext(AppContext);
  const { selectedGame, selectedMod } = state;

  const filterGamesKeys = () => {
    const newKeys: Array<string> = [];
    Object.keys(gameData).forEach((gameKey) => {
      if (gameKey.includes(selectedGame)) {
        newKeys.push(gameKey);
      }
    });
    return newKeys;
  };

  const [gameKeys, setGameKeys] = useState(filterGamesKeys());

  useEffect(() => {
    setGameKeys(filterGamesKeys);
  }, [selectedGame]);

  return (
    <div className="justify-self-center mt-[5rem]">
      <div className="flex flex-row place-content-center w-[80vw]">
        <hr className="grow mt-[1.25rem] opacity-50" />
        <h1 className="w-max text-center text-4xl mx-2 text-gray-200 text-shadow">Mods</h1>
        <hr className="grow mt-[1.25rem] opacity-50" />
      </div>
      <ul className="flex flex-row flex-wrap justify-center ">
        {gameKeys.map((gameKey) => {
          const game = gameData[gameKey as keyof typeof gameData];
          let liClassName =
            'flex flex-col justify-between m-1 p-2 border border-gray-500 shadow-lg shadow-gray-800/60 rounded-lg';

          if (gameKey === selectedMod) {
            liClassName += ' bg-gray-600 hover:bg-gray-500';
          } else {
            liClassName += ' hover:bg-gray-600';
          }
          return (
            <li
              className={liClassName}
              key={gameKey}
              onClick={() => {
                dispatch({ type: AppContextActions.changeMod, payload: { selectedMod: gameKey } });
              }}
            >
              <h2 className="text-center text-gray-200 text-2xl text-shadow mb-1">{game.text}</h2>
              <img
                className="w-36 h-fit m-auto drop-shadow-[0.1rem_0.1rem_0.5rem_rgba(0,0,0,0.7)]"
                draggable={false}
                src={game.image}
                alt={`${game.text} icon`}
                height="128"
                width="128"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ModSelector;
