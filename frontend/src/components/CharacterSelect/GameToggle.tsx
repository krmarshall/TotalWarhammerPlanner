import { useContext } from 'react';
import { AppContext, AppContextActions } from '../../contexts/AppContext';
import gameData from '../../data/gameData';

import gameImages from '../../imgs/games/gameImages';

const GameToggle = () => {
  const { state, dispatch } = useContext(AppContext);
  const { selectedGame, selectedMod } = state;

  const gameChangeHandler = () => {
    const gameChange = selectedGame === '2' ? '3' : '2';
    dispatch({ type: AppContextActions.changeGame, payload: { selectedGame: gameChange } });

    let modChange = selectedGame === '2' ? 'vanilla3' : 'vanilla2';
    if (gameData[selectedMod.replace(selectedGame, gameChange)] !== undefined) {
      modChange = selectedMod.replace(selectedGame, gameChange);
    }
    dispatch({ type: AppContextActions.changeMod, payload: { selectedMod: modChange } });
  };

  const imgSrc = selectedMod.includes('2') ? gameImages.vanilla2 : gameImages.vanilla3;
  return (
    <div
      className="absolute place-self-center h-fit w-fit top-2 z-20 flex flex-col place-content-end bg-gray-700 hover:bg-gray-600 rounded-full border border-gray-500 drop-shadow-[0.1rem_0.1rem_0.5rem_rgba(0,0,0,0.7)] hover-scale"
      onClick={gameChangeHandler}
    >
      <img
        src={imgSrc}
        alt="Game Toggle"
        className="h-28 w-auto mx-auto drop-shadow-[0.1rem_0.1rem_0.5rem_rgba(0,0,0,0.7)]"
        draggable={false}
      />
      <h1 className="z-10 text-center text-3xl -mt-8 mb-4 text-gray-200 text-shadow-border">Toggle Game</h1>
    </div>
  );
};

export default GameToggle;
