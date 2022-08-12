import { useNavigate, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
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

  const gameChangeHandler = () => {
    const gameChange = selectedGame === '2' ? '3' : '2';
    dispatch({ type: AppContextActions.changeGame, payload: { selectedGame: gameChange } });

    const modChange = selectedGame === '2' ? 'vanilla3' : 'vanilla2';
    dispatch({ type: AppContextActions.changeMod, payload: { selectedMod: modChange } });
  };

  const isTabletOrMobileWidth = useMediaQuery({ maxWidth: 1023 });
  const isTabletOrMobileHeight = useMediaQuery({ maxHeight: 719 });

  const buttonClass = 'bg-slate-500 rounded-2xl py-1 px-5 my-auto shadow-md shadow-gray-900 hover-scale';

  let imgSrc = '';
  if (location.pathname === '/') {
    imgSrc = selectedMod.includes('2') ? gameImages.vanilla2 : gameImages.vanilla3;
  } else {
    imgSrc = gameData[selectedMod].characterImages[characterData?.key as string];
  }
  return (
    <div className="flex flex-row flex-nowrap h-[10vh]">
      {isTabletOrMobileWidth || isTabletOrMobileHeight ? (
        <div className="text-slate-100 text-4xl flex justify-start">
          <img
            src={headerImg}
            alt="header diplomacy icon"
            className="w-20 h-20 my-auto cursor-pointer drop-shadow-[0.1rem_0.1rem_0.5rem_rgba(0,0,0,0.7)]"
            draggable={false}
            onClick={() => navigate('/')}
          />
          <h1 className="my-auto cursor-pointer text-shadow-md" onClick={() => navigate('/')}>
            Total Warhammer Planner
          </h1>
        </div>
      ) : (
        <>
          <div className="w-[33vw] text-slate-100 text-4xl flex justify-start">
            <img
              src={headerImg}
              alt="header diplomacy icon"
              className="w-20 h-20 my-auto cursor-pointer drop-shadow-[0.1rem_0.1rem_0.5rem_rgba(0,0,0,0.7)]"
              draggable={false}
              onClick={() => navigate('/')}
            />
            <h1 className="my-auto cursor-pointer text-shadow-md" onClick={() => navigate('/')}>
              Total Warhammer Planner
            </h1>
          </div>
          <div className="z-10 w-[34vw]">
            {location.pathname === '/' ? (
              <div
                className="z-20 flex flex-col place-content-end m-auto mt-2 -mb-48 w-[14.5rem] h-[9.5rem] bg-gray-700 hover:bg-gray-600 rounded-full border border-gray-500 drop-shadow-[0.1rem_0.1rem_0.5rem_rgba(0,0,0,0.7)]"
                onClick={gameChangeHandler}
              >
                <img
                  src={imgSrc}
                  alt="Game Toggle"
                  className="drop-shadow-[0.1rem_0.1rem_0.5rem_rgba(0,0,0,0.7)]"
                  draggable={false}
                />
                <h1 className="z-10 text-center text-3xl -mt-8 mb-4 text-gray-200 text-shadow-border">Toggle Game</h1>
              </div>
            ) : location.pathname === '/about' || location.pathname === '/issues' ? (
              <></>
            ) : (
              <div className="m-auto -mb-48 mt-2 w-[9.5rem] h-[9.5rem] bg-gray-700 rounded-full border border-gray-500 drop-shadow-[0.1rem_0.1rem_0.5rem_rgba(0,0,0,0.7)]">
                <img
                  src={imgSrc}
                  className="w-[9.5rem] h-[9.5rem] drop-shadow-[0.1rem_0.1rem_0.5rem_rgba(0,0,0,0.7)]"
                  draggable={false}
                  alt="Character Portrait"
                />
              </div>
            )}
          </div>

          <div className="w-[33vw] flex flex-row justify-end text-xl text-slate-50 my-auto">
            <button className={buttonClass} onClick={() => navigate('/about')}>
              About
            </button>
            <button className={buttonClass + ' ml-4'} onClick={() => navigate('/issues')}>
              Issues
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
