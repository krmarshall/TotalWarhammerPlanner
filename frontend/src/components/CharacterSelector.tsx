import { Fragment, useEffect, useState } from 'react';
import factions from '../data/factions';

interface CharacterSelectorProps {
  selectedFaction: string;
}

const CharacterSelector = ({ selectedFaction }: CharacterSelectorProps) => {
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

  return (
    <Fragment>
      <div className="justify-self-center">
        <h2 className="text-center text-4xl m-2 text-gray-200">Lords</h2>
        <ul className="flex flex-row flex-wrap justify-center">
          {lordKeys.map((lordKey) => {
            const lord = factionData.lords[lordKey];

            return (
              <li
                key={lordKey}
                className="flex-col m-1 p-1 pb-0 rounded-lg border shadow-lg border-gray-500 hover:bg-gray-600"
              >
                <div className="flex flex-row justify-center" style={{ minHeight: '3.7rem' }}>
                  <h5 className="w-36 text-center text-xl text-gray-200 mb-1">{lord?.name}</h5>
                </div>

                <div className="flex flex-row justify-center relative">
                  <img className="w-16 mb-2" draggable={false} src={lord?.icon} alt={`${lord?.name} icon`} />
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
        <h2 className="text-center text-4xl m-2 text-gray-200">Heroes</h2>
        <ul className="flex flex-row flex-wrap justify-center">
          {heroKeys.map((heroKey) => {
            const hero = factionData.heroes[heroKey];

            return (
              <li
                key={heroKey}
                className="flex-col m-1 p-1 pb-0 rounded-lg border shadow-lg border-gray-500  hover:bg-gray-600"
              >
                <h5 style={{ minHeight: '3.7rem' }} className="w-36 text-center text-xl text-gray-200 mb-1">
                  {hero?.name}
                </h5>
                <div className="flex flex-row justify-center relative">
                  <img className="w-16 mb-2" draggable={false} src={hero?.icon} alt={`${hero?.name} icon`} />
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
