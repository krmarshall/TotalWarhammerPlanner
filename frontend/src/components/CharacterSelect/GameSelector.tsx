import { useContext } from 'react';
import { AppContext, AppContextActions } from '../../contexts/AppContext';
import gameData from '../../data/gameData';

const GameSelector = () => {
  const { state, dispatch } = useContext(AppContext);
  const gameKeys = Object.keys(gameData);

  return (
    <div className="justify-self-center">
      <h1 className="text-center text-4xl mb-2 text-gray-200">Game/Mod</h1>
      <ul className="flex flex-row flex-wrap justify-center select-none">
        {gameKeys.map((gameKey) => {
          const game = gameData[gameKey as keyof typeof gameData];
          let liClassName = 'flex-col m-1 p-2 border border-gray-500 shadow-lg shadow-gray-800/60 rounded-lg';

          if (gameKey === state.selectedGame) {
            liClassName += ' bg-gray-600 hover:bg-gray-500';
          } else {
            liClassName += ' hover:bg-gray-600';
          }
          return (
            <li
              className={liClassName}
              key={gameKey}
              onClick={() => {
                dispatch({ type: AppContextActions.changeGame, payload: { selectedGame: gameKey } });
              }}
            >
              <h2 className="text-center text-gray-200 text-xl mb-1">{game.text}</h2>
              <div className="flex flex-row justify-center">
                <img
                  className="w-30 drop-shadow-[0.1rem_0.1rem_0.5rem_rgba(0,0,0,0.7)]"
                  draggable={false}
                  src={game.image}
                  alt={`${game.text} icon`}
                  height="128"
                  width="128"
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GameSelector;
