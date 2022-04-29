import { useNavigate, useLocation } from 'react-router-dom';
import headerImg from '../imgs/header.webp';
import gameData from '../data/gameData';
import gameImages from '../imgs/games/gameImages';
import { useContext } from 'react';
import { AppContext, AppContextActions } from '../contexts/AppContext';

const Header = () => {
  const { state, dispatch } = useContext(AppContext);
  const { selectedGame, selectedMod, characterData } = state;

  const location = useLocation();

  const navigate = useNavigate();
  const navigateTo = (path: string) => {
    navigate(path);
  };

  const gameChangeHandler = () => {
    const gameChange = selectedGame === '2' ? '3' : '2';
    dispatch({ type: AppContextActions.changeGame, payload: { selectedGame: gameChange } });

    const modChange = selectedGame === '2' ? 'vanilla3' : 'vanilla2';
    dispatch({ type: AppContextActions.changeMod, payload: { selectedMod: modChange } });
  };

  const buttonClass = 'bg-slate-500 rounded-2xl py-1 px-5 my-auto shadow-md shadow-gray-900';

  let imgSrc = '';
  if (location.pathname === '/') {
    imgSrc = selectedMod.includes('2') ? gameImages.vanilla2 : gameImages.vanilla3;
  } else {
    imgSrc = gameData[selectedMod].characterImages[characterData?.key as string];
  }
  return (
    <div className="flex flex-row flex-nowrap place-content-between">
      <div className="h-[10vh] text-slate-100 text-4xl flex cursor-pointer" onClick={() => navigateTo('/')}>
        <img src={headerImg} alt="header diplomacy icon" className="w-20 h-20 my-auto" draggable={false} />
        <h1 className="m-auto select-none">Warhammer Planner</h1>
      </div>
      {location.pathname === '/' ? (
        <div
          className="z-20 flex flex-col place-content-center absolute w-[10vw] h-[8vw] left-[45vw] bg-gray-700 hover:bg-gray-600 rounded-full mt-2 border border-gray-500 drop-shadow-[0.1rem_0.1rem_0.5rem_rgba(0,0,0,0.7)]"
          onClick={gameChangeHandler}
        >
          <div className="invisible">spacer</div>
          <img src={imgSrc} className="drop-shadow-[0.1rem_0.1rem_0.5rem_rgba(0,0,0,0.7)]" draggable={false} />
          <h1 className="text-center text-4xl mb-6 text-gray-200 text-shadow-md select-none">Game</h1>
        </div>
      ) : (
        <div className="absolute w-[8vw] h-[8vw] left-[46vw] bg-gray-700 rounded-full mt-2 border border-gray-500 drop-shadow-[0.1rem_0.1rem_0.5rem_rgba(0,0,0,0.7)]">
          <img src={imgSrc} className="drop-shadow-[0.1rem_0.1rem_0.5rem_rgba(0,0,0,0.7)]" draggable={false} />
        </div>
      )}

      <div className="text-xl text-slate-50 my-auto">
        <button className={buttonClass} onClick={() => navigateTo('/about')}>
          About
        </button>
        <button className={buttonClass + ' ml-4'} onClick={() => navigateTo('/issues')}>
          Issues
        </button>
      </div>
    </div>
  );
};

export default Header;
