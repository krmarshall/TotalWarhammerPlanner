import { useContext, useEffect, useMemo, useState } from 'react';
import { AppContext, AppContextActions } from '../../contexts/AppContext';
import gameData from '../../data/gameData';
import factionImages from '../../imgs/factions/factionImages';
import ReactImage from '../ReactImage';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import placeholderImg from '../../imgs/other/0placeholder.webp';
import shareIcon from '../../imgs/other/icon_button_external_link.webp';
import TooltipWrapper from '../TooltipWrapper';
import { toast } from 'react-hot-toast';

const FactionSelector = () => {
  const { state, dispatch } = useContext(AppContext);
  const { selectedMod, selectedFaction, selectedCompGroups } = state;
  const [currentModFactions, setCurrentModFactions] = useState(Object.keys(gameData[selectedMod].factions));

  useEffect(() => {
    if (gameData[selectedMod].compilationGroups !== undefined && selectedCompGroups.length > 0) {
      const filteredFactionKeys = Object.keys(filterCurrentModFactions());
      setCurrentModFactions(filteredFactionKeys);
      if (!filteredFactionKeys.includes(selectedFaction)) {
        dispatch({ type: AppContextActions.changeFaction, payload: { selectedFaction: filteredFactionKeys[0] } });
      }
    } else {
      setCurrentModFactions(Object.keys(gameData[selectedMod].factions));
    }
  }, [selectedMod, selectedCompGroups]);

  const filterCurrentModFactions = () => {
    const gameCompGroups = gameData[selectedMod].compilationGroups;
    if (gameCompGroups !== undefined) {
      const validFactions: { [key: string]: string } = {};
      const currentModCharacters = gameData[selectedMod].characters;

      // O(n^3) Lawd He Comin
      Object.keys(gameCompGroups).forEach((compGroup) => {
        if (selectedCompGroups.includes(compGroup)) {
          // Could short circuit the for loop when charKey is found in a faction once, but chars can be in multiple factions so dont
          Object.keys(gameCompGroups[compGroup]).forEach((charKey) => {
            Object.keys(currentModCharacters).forEach((factionKey) => {
              if (
                currentModCharacters[factionKey].lords[charKey] !== undefined ||
                currentModCharacters[factionKey].heroes[charKey] !== undefined
              ) {
                validFactions[factionKey] = factionKey;
              }
            });
          });
        }
      });
      // Remove invalid factions while preserving manual ordering
      const cloneFaction = JSON.parse(JSON.stringify(gameData[selectedMod].factions));
      Object.keys(cloneFaction).forEach((factionKey) => {
        if (validFactions[factionKey] === undefined) {
          delete cloneFaction[factionKey];
        }
      });
      return cloneFaction;
    } else {
      return gameData[selectedMod].factions;
    }
  };

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
    <div className="justify-self-center px-2 w-full">
      <div className="flex flex-row place-content-center mx-auto">
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
      <ul className="flex flex-row flex-wrap justify-center py-1">
        <TransitionGroup component={null}>
          {currentModFactions?.map((factionKey) => {
            if (
              gameData[selectedMod].characters[factionKey]?.lords === undefined &&
              gameData[selectedMod].characters[factionKey]?.lords === undefined
            ) {
              return null;
            }

            if (
              gameData[selectedMod].characters[factionKey]?.lords !== undefined &&
              Object.keys(gameData[selectedMod].characters[factionKey].lords).length === 0 &&
              gameData[selectedMod].characters[factionKey]?.heroes !== undefined &&
              Object.keys(gameData[selectedMod].characters[factionKey].heroes).length === 0
            ) {
              return null;
            }

            const factionName = gameData[selectedMod]?.factions[factionKey];
            let liClassName =
              'flex-col m-1 p-1.5 border border-gray-500 shadow-lg shadow-gray-800/60 rounded-lg hover-scale';

            if (factionKey === state.selectedFaction) {
              liClassName += ' bg-gray-600 hover:bg-gray-500/80 scale-105';
            } else {
              liClassName += ' hover:bg-gray-600';
            }

            return (
              <CSSTransition
                key={factionKey}
                classNames={{
                  enterActive: 'animate__animated animate__faster animate__zoomIn',
                  exitActive: 'hidden',
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
                  <h2 className="text-center h-7 text-gray-200 text-2xl text-shadow mb-2">{factionName}</h2>
                  <div className="flex flex-row justify-center">
                    <ReactImage
                      srcList={[factionImages[factionKey as keyof typeof factionImages], placeholderImg]}
                      alt={`${factionName} icon`}
                      className="w-20 h-auto drop-shadow-[0.1rem_0.1rem_0.35rem_rgba(0,0,0,0.7)]"
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
