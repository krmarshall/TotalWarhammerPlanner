import { useNavigate, useLocation } from 'react-router-dom';
import headerImg from '../imgs/header.webp';
import gameData from '../data/gameData';
import gameImages from '../imgs/games/gameImages';
import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

const Header = () => {
  const { state } = useContext(AppContext);
  const { selectedGame, characterData } = state;

  const location = useLocation();

  const navigate = useNavigate();
  const navigateTo = (path: string) => {
    navigate(path);
  };
  const buttonClass = 'bg-slate-500 rounded-2xl py-1 px-5 my-auto shadow-md shadow-gray-900';

  let imgSrc = '';
  if (location.pathname === '/') {
    imgSrc = selectedGame.includes('2') ? gameImages.vanilla2 : gameImages.vanilla3;
  } else {
    // @ts-expect-error ts(7053)
    imgSrc = gameData[selectedGame].characterImages[characterData?.key as string];
  }
  return (
    <div className="flex flex-row flex-nowrap place-content-between">
      <div className="h-[10vh] text-slate-100 text-4xl flex cursor-pointer" onClick={() => navigateTo('/')}>
        <img src={headerImg} alt="header diplomacy icon" className="w-20 h-20 my-auto" />
        <h1 className="m-auto">Warhammer Planner</h1>
      </div>
      {location.pathname === '/' ? (
        <div className="flex flex-col place-content-center absolute w-[10vw] h-[8vw] left-[45vw] bg-gray-700 rounded-full mt-2 border border-gray-500">
          <img src={imgSrc} className="drop-shadow-[0.1rem_0.1rem_0.5rem_rgba(0,0,0,0.7)]" />
        </div>
      ) : (
        <div className="absolute w-[8vw] h-[8vw] left-[46vw] bg-gray-700 rounded-full mt-2 border border-gray-500">
          <img src={imgSrc} className="drop-shadow-[0.1rem_0.1rem_0.5rem_rgba(0,0,0,0.7)]" />
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
