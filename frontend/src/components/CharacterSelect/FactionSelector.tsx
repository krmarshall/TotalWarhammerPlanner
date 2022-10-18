import { useContext, useEffect, useState } from 'react';
import { AppContext, AppContextActions } from '../../contexts/AppContext';
import gameData from '../../data/gameData';
import factionImages from '../../imgs/factions/factionImages';
import ReactImage from '../ReactImage';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import placeholderImg from '../../imgs/other/0placeholder.webp';
import shareIcon from '../../imgs/other/icon_button_external_link.webp';
import TooltipWrapper from '../Planner/TooltipWrapper';
import { toast } from 'react-hot-toast';

const FactionSelector = () => {
  const { state, dispatch } = useContext(AppContext);
  const { selectedMod, selectedFaction } = state;
  const [currentGameFactions, setCurrentGameFactions] = useState(Object.keys(gameData[selectedMod].factions));

  useEffect(() => {
    setCurrentGameFactions(Object.keys(gameData[selectedMod].factions));
  }, [selectedMod]);

  const shareHandler = () => {
    let url = import.meta.env.DEV ? 'http://127.0.0.1:5173/' : 'https://totalwarhammerplanner.com/';
    url += `${selectedMod}/${selectedFaction}`;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        toast.success('Link copied to clipboard!', { id: 'success clipboard' });
      })
      .catch(() => {
        toast.error('Error copying link to the clipboard...', { id: 'error clipboard' });
      });
  };

  return (
    <div className="justify-self-center">
      <div className="flex flex-row place-content-center w-[80vw] mx-auto mt-2">
        <hr className="grow mt-[1.25rem] opacity-50" />
        <h1 className="w-max text-center text-4xl mx-2 text-gray-200 text-shadow">Factions</h1>
        <TooltipWrapper
          tooltip={
            <span className="text-center flex flex-row">
              <div className="h-fit p-2 rounded border border-gray-400 shadow-lg text-gray-50 text-xl bg-gray-600">
                <h3 className="text-gray-50">Copy link to currently selected mod/faction</h3>
              </div>
            </span>
          }
        >
          <img
            src={shareIcon}
            className="w-6 h-6 m-auto cursor-pointer"
            width="24"
            height="24"
            onClick={shareHandler}
          />
        </TooltipWrapper>
        <hr className="grow mt-[1.25rem] opacity-50" />
      </div>
      <ul className="flex flex-row flex-wrap justify-center">
        <TransitionGroup component={null}>
          {currentGameFactions?.map((factionKey) => {
            if (
              gameData[selectedMod].characters[`${factionKey}_lords`] === undefined &&
              gameData[selectedMod].characters[`${factionKey}_heroes`] === undefined
            ) {
              return null;
            }

            if (
              gameData[selectedMod].characters[`${factionKey}_lords`] !== undefined &&
              Object.keys(gameData[selectedMod].characters[`${factionKey}_lords`]).length === 0 &&
              gameData[selectedMod].characters[`${factionKey}_heroes`] !== undefined &&
              Object.keys(gameData[selectedMod].characters[`${factionKey}_heroes`]).length === 0
            ) {
              return null;
            }

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
