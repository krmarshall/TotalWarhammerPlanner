import { useContext, useEffect, useState } from 'react';
import { AppContext, AppContextActions } from '../../contexts/AppContext';
import gameData from '../../data/gameData';
import ReactImage from '../ReactImage';
import placeholderImg from '../../imgs/other/0placeholder.webp';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import TooltipWrapper from '../Planner/TooltipWrapper';

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
    <div className="justify-self-center mt-14">
      <div className="flex flex-row place-content-center w-[80vw]">
        <hr className="grow mt-[1.25rem] opacity-50" />
        <h1 className="w-max text-center text-4xl mx-2 text-gray-200 text-shadow">Mods</h1>
        <hr className="grow mt-[1.25rem] opacity-50" />
      </div>
      <ul className="flex flex-row flex-wrap justify-center">
        <TransitionGroup component={null}>
          {gameKeys.map((gameKey) => {
            const game = gameData[gameKey as keyof typeof gameData];
            let liClassName =
              'flex flex-col justify-around h-48 m-1 mx-2 p-2 border border-gray-500 shadow-lg shadow-gray-800/60 rounded-lg hover-scale';

            if (gameKey === selectedMod) {
              liClassName += ' bg-gray-600 hover:bg-gray-500/80 scale-105';
            } else {
              liClassName += ' hover:bg-gray-600';
            }

            let categoryDesc = 'Placeholder';
            switch (gameData[gameKey].category) {
              case 'Base': {
                categoryDesc = 'The vanilla game with no mods. All characters are displayed with few exceptions.';
                break;
              }
              case 'Overhaul': {
                categoryDesc =
                  'A total overhaul mod. Both new and vanilla characters are displayed whether they have been modified or not.';
                break;
              }
              case 'Character Mod': {
                categoryDesc =
                  'A mod that adds new characters. Vanilla characters have been pruned, only new characters added by the mod are displayed.';
                break;
              }
            }
            return (
              <CSSTransition
                key={gameKey}
                classNames={{
                  enterActive: 'animate__animated animate__faster animate__flipInX',
                  exitActive: 'hidden',
                }}
                timeout={500}
              >
                <li
                  className={liClassName}
                  key={gameKey}
                  onClick={() => {
                    dispatch({ type: AppContextActions.changeMod, payload: { selectedMod: gameKey } });
                  }}
                >
                  <h2 className="text-center text-gray-200 text-2xl text-shadow mb-1">{game.text}</h2>
                  <ReactImage
                    srcList={[game.image, placeholderImg]}
                    alt={`${game.text} icon`}
                    className="w-36 h-fit m-auto drop-shadow-[0.1rem_0.1rem_0.5rem_rgba(0,0,0,0.7)]"
                    h="128"
                    w="128"
                  />
                  <h3 className="text-center text-gray-400 text-lg text-shadow my-1">{gameData[gameKey].updated}</h3>
                  <TooltipWrapper
                    tooltip={
                      <span className="text-center flex flex-row">
                        <div className="h-fit p-2 rounded border border-gray-400 shadow-lg text-gray-50 bg-gray-600">
                          <h3 className="text-gray-50 text-xl">{categoryDesc}</h3>
                        </div>
                      </span>
                    }
                  >
                    <h3 className="w-fit mx-auto text-center text-gray-400 text-lg text-shadow mb-1 underline decoration-dashed underline-offset-2">
                      {gameData[gameKey].category}
                    </h3>
                  </TooltipWrapper>
                </li>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </ul>
    </div>
  );
};

export default ModSelector;
