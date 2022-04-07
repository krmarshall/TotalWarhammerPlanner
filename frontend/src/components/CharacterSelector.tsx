import { Fragment, useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router';
import api from '../api/api';
import { AppContext, AppContextActions } from '../contexts/AppContext';
import gameData from '../data/gameData';
import { createEmptyCharacterBuild } from '../utils/sharedFunctions';

const CharacterSelector = () => {
  const { state, dispatch } = useContext(AppContext);
  const { selectedGame, selectedFaction } = state;
  const navigate = useNavigate();

  const [gameCharacters, setGameCharacters] = useState(gameData[selectedGame as keyof typeof gameData].characters);

  // Grab all the lord and hero keys from the currently selected game characters
  const [lordKeys, setLordKeys] = useState(
    Object.keys(gameCharacters[`${selectedFaction}_lords` as keyof typeof gameCharacters])
  );
  const [heroKeys, setHeroKeys] = useState(
    Object.keys(gameCharacters[`${selectedFaction}_heroes` as keyof typeof gameCharacters])
  );

  // Whenever the selected game changes refresh the characters
  useEffect(() => {
    setGameCharacters(gameData[selectedGame as keyof typeof gameData].characters);
  }, [selectedGame]);

  // Whenever the characters change refresh the lord/hero keys
  useEffect(() => {
    setLordKeys(Object.keys(gameCharacters[`${selectedFaction}_lords` as keyof typeof gameCharacters]));
    setHeroKeys(Object.keys(gameCharacters[`${selectedFaction}_heroes` as keyof typeof gameCharacters]));
  }, [selectedFaction]);

  const handleCharacterSelect = (characterKey: string) => {
    api
      .getCharacterSkillTree(selectedGame, selectedFaction, characterKey)
      .then((response) => {
        dispatch({ type: AppContextActions.changeCharacterData, payload: { characterData: response } });
        const emptyCharacterBuild = createEmptyCharacterBuild(response, selectedGame, selectedFaction, characterKey);
        dispatch({ type: AppContextActions.changeCharacterBuild, payload: { characterBuild: emptyCharacterBuild } });
        navigate(`/planner/${selectedGame}/${selectedFaction}/${characterKey}`);
      })
      .catch(() => {
        toast.error('Error retrieving character data from server.');
        dispatch({ type: AppContextActions.changeCharacterData, payload: { characterData: null } });
      });
  };

  return (
    <Fragment>
      <div className="justify-self-center">
        <h1 className="text-center text-4xl m-2 text-gray-200">Lords</h1>
        <ul className="flex flex-row flex-wrap justify-center select-none">
          {lordKeys.map((lordKey) => {
            // @ts-expect-error ts(7053)
            const lordName = gameCharacters[`${selectedFaction}_lords`][lordKey];
            // @ts-expect-error ts(7053)
            const lordImage = gameData[selectedGame].characterImages[lordKey];
            return (
              <li
                key={lordKey}
                className="flex-col m-1 p-1 pb-0 rounded-lg border shadow-lg border-gray-500 hover:bg-gray-600"
                onClick={() => {
                  handleCharacterSelect(lordKey);
                }}
              >
                <div className="flex flex-row justify-center" style={{ minHeight: '3.7rem' }}>
                  <h2 className="w-36 text-center text-xl text-gray-200 mb-1">{lordName}</h2>
                </div>

                <div className="flex flex-row justify-center relative">
                  <img
                    className="w-32 mb-2"
                    draggable={false}
                    src={lordImage}
                    alt={`${lordName} icon`}
                    height="82"
                    width="82"
                  />
                  {/* {lord?.spellLoreIcon && (
                    <img
                      className="w-12 h-12 absolute bottom-0 mb-2 ml-0.5"
                      draggable={false}
                      src={lord?.spellLoreIcon}
                      alt={`${lord?.spellLoreIcon} icon`}
                    />
                  )} */}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="justify-self-center">
        <h1 className="text-center text-4xl m-2 text-gray-200">Heroes</h1>
        <ul className="flex flex-row flex-wrap justify-center select-none">
          {heroKeys.map((heroKey) => {
            // @ts-expect-error ts(7053)
            const heroName = gameCharacters[`${selectedFaction}_heroes`][heroKey];
            // @ts-expect-error ts(7053)
            const heroImage = gameData[selectedGame].characterImages[heroKey];
            return (
              <li
                key={heroKey}
                className="flex-col m-1 p-1 pb-0 rounded-lg border shadow-lg border-gray-500  hover:bg-gray-600"
                onClick={() => {
                  handleCharacterSelect(heroKey);
                }}
              >
                <h2 style={{ minHeight: '3.7rem' }} className="w-36 text-center text-xl text-gray-200 mb-1">
                  {heroName}
                </h2>
                <div className="flex flex-row justify-center relative">
                  <img
                    className="w-32 mb-2"
                    draggable={false}
                    src={heroImage}
                    alt={`${heroName} icon`}
                    height="82"
                    width="82"
                  />
                  {/* {hero?.spellLoreIcon && (
                    <img
                      className="w-12 h-12 absolute bottom-0 mb-2 ml-0.5"
                      draggable={false}
                      src={hero?.spellLoreIcon}
                      alt={`${hero?.spellLoreIcon} icon`}
                    />
                  )} */}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export default CharacterSelector;
