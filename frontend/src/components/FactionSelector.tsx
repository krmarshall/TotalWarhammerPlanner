import factions from '../data/factions';

interface FactionSelectorProps {
  selectedFaction: string;
  setSelectedFaction: CallableFunction;
}

const FactionSelector = ({ selectedFaction, setSelectedFaction }: FactionSelectorProps) => {
  const factionKeys = Object.keys(factions);

  return (
    <div className="justify-self-center">
      <h1 className="text-center text-4xl mb-2 text-gray-200">Factions</h1>
      <ul className="flex flex-row flex-wrap justify-center select-none">
        {factionKeys.map((factionKey) => {
          const faction = factions[factionKey as keyof typeof factions];

          let liClassName = 'flex-col m-1 p-2 border border-gray-500 shadow-lg rounded-lg';

          if (!faction.implemented) {
            liClassName += ' opacity-50';
          }

          if (factionKey === selectedFaction) {
            liClassName += ' bg-gray-600 hover:bg-gray-500';
          } else {
            liClassName += ' hover:bg-gray-600';
          }

          return (
            <li
              key={faction.name}
              className={liClassName}
              onClick={() => {
                setSelectedFaction(factionKey);
              }}
            >
              <h5 className="text-center text-gray-200 text-xl mb-1">{faction.name}</h5>
              <div className="flex flex-row justify-center">
                <img
                  className="w-24"
                  draggable={false}
                  src={faction.icon}
                  alt={`${faction.name} icon`}
                  height="96"
                  width="96"
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FactionSelector;
