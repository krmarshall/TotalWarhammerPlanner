import { Fragment, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import api from '../api/api';
import { AppContext, AppContextActions } from '../contexts/AppContext';
import factions from '../data/factions';

const CharacterSelector = () => {
  const { state, dispatch } = useContext(AppContext);
  const { selectedFaction } = state;
  const history = useHistory();
  // Set the current faction data from the selected faction
  const [factionData, setFactionData] = useState(factions[selectedFaction as keyof typeof factions]);

  // Grab all the lord and hero keys from the currently selected faction
  const [lordKeys, setLordKeys] = useState(Object.keys(factionData.lords));
  const [heroKeys, setHeroKeys] = useState(Object.keys(factionData.heroes));

  // Whenever the selected faction changes refresh the faction data
  useEffect(() => {
    setFactionData(factions[selectedFaction as keyof typeof factions]);
  }, [selectedFaction]);

  // Whenever faction data changes refresh that factions lords/heroes
  useEffect(() => {
    setLordKeys(Object.keys(factionData.lords));
    setHeroKeys(Object.keys(factionData.heroes));
  }, [factionData]);

  // To Do: Set up notifications without using alert
  const handleCharacterSelect = (characterKey: string, characterImplemented: boolean) => {
    if (!characterImplemented) {
      alert(
        'This character is not currently implemented, please select a character that is not transparent.\n-Sorry'
      );
    } else {
      api
        .getCharacterSkillTree(selectedFaction, characterKey)
        .then((response) => {
          dispatch({ type: AppContextActions.changeCharacterData, payload: response });
          history.push(`/planner/${selectedFaction}/${characterKey}/`);
        })
        .catch((error) => {
          console.log(error);
          dispatch({ type: AppContextActions.changeCharacterData, payload: null });
        });
    }
  };

  return (
    <Fragment>
      <div className="justify-self-center">
        <h1 className="text-center text-4xl m-2 text-gray-200">Lords</h1>
        <ul className="flex flex-row flex-wrap justify-center select-none">
          {lordKeys.map((lordKey) => {
            const lord = factionData.lords[lordKey];

            let liClassName = 'flex-col m-1 p-1 pb-0 rounded-lg border shadow-lg border-gray-500 hover:bg-gray-600';

            if (!lord?.implemented) {
              liClassName += ' opacity-50';
            }

            return (
              <li
                key={lordKey}
                className={liClassName}
                onClick={() => {
                  handleCharacterSelect(lordKey, lord?.implemented);
                }}
              >
                <div className="flex flex-row justify-center" style={{ minHeight: '3.7rem' }}>
                  <h2 className="w-36 text-center text-xl text-gray-200 mb-1">{lord?.name}</h2>
                </div>

                <div className="flex flex-row justify-center relative">
                  <img
                    className="w-16 mb-2"
                    draggable={false}
                    src={lord?.icon}
                    alt={`${lord?.name} icon`}
                    height="139"
                    width="64"
                  />
                  {lord?.spellLoreIcon && (
                    <img
                      className="w-12 h-12 absolute bottom-0 mb-2 ml-0.5"
                      draggable={false}
                      src={lord?.spellLoreIcon}
                      alt={`${lord?.spellLoreIcon} icon`}
                    />
                  )}
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
            const hero = factionData.heroes[heroKey];

            let liClassName = 'flex-col m-1 p-1 pb-0 rounded-lg border shadow-lg border-gray-500  hover:bg-gray-600';

            if (!hero?.implemented) {
              liClassName += ' opacity-50';
            }

            return (
              <li
                key={heroKey}
                className={liClassName}
                onClick={() => {
                  handleCharacterSelect(heroKey, hero?.implemented);
                }}
              >
                <h2 style={{ minHeight: '3.7rem' }} className="w-36 text-center text-xl text-gray-200 mb-1">
                  {hero?.name}
                </h2>
                <div className="flex flex-row justify-center relative">
                  <img
                    className="w-16 mb-2"
                    draggable={false}
                    src={hero?.icon}
                    alt={`${hero?.name} icon`}
                    height="139"
                    width="64"
                  />
                  {hero?.spellLoreIcon && (
                    <img
                      className="w-12 h-12 absolute bottom-0 mb-2 ml-0.5"
                      draggable={false}
                      src={hero?.spellLoreIcon}
                      alt={`${hero?.spellLoreIcon} icon`}
                    />
                  )}
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
