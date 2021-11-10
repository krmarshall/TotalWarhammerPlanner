import { useEffect, useState } from 'react';
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

  const horizontalScroll = (event: React.WheelEvent) => {
    const container = document.getElementById('horScrollContainerLord');
    let containerScrollPosition = container?.scrollLeft;
    if (!containerScrollPosition) {
      containerScrollPosition = 0;
    }
    container?.scrollTo({
      top: 0,
      left: containerScrollPosition + event.deltaY,
    });
  };

  return (
    <div>
      <h2 className="text-center text-2xl m-2 text-gray-200">Lords</h2>
      <ul
        className="flex flex-row pb-3 flex-nowrap overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-600"
        onWheel={(event) => {
          horizontalScroll(event);
        }}
        id="horScrollContainerLord"
      >
        {lordKeys.map((lordKey) => {
          const lord = factionData.lords[lordKey];

          return (
            <li
              key={lordKey}
              className="w-32 flex-none flex-col m-1 py-2 px-1 border border-gray-500 rounded-lg hover:bg-gray-600"
            >
              <h5 className="text-center text-gray-200 mb-1">{lord?.name}</h5>
              <div className="flex flex-row justify-center relative">
                <img className="w-16" src={lord?.icon} alt={`${lord?.name} icon`} />
                {lord?.spellLoreIcon && (
                  <img
                    className="w-12 h-12 absolute bottom-0 inset-x-9"
                    src={lord?.spellLoreIcon}
                    alt={`${lord?.spellLoreIcon} icon`}
                  />
                )}
              </div>
            </li>
          );
        })}
      </ul>

      <h2 className="text-center text-2xl m-2 text-gray-200">Heroes</h2>
    </div>
  );
};

export default CharacterSelector;
