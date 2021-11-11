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
      <ul className="flex flex-row flex-wrap justify-center">
        {factionKeys.map((factionKey) => {
          const faction = factions[factionKey as keyof typeof factions];

          const normalClassName = 'flex-col m-1 p-2 border border-gray-500 shadow-lg rounded-lg hover:bg-gray-600';
          const highlightedClassName =
            'flex-col m-1 p-2 border border-gray-500 rounded-lg bg-gray-600 shadow-lg hover:bg-gray-500';

          return (
            <li
              key={faction.name}
              className={factionKey === selectedFaction ? highlightedClassName : normalClassName}
              onClick={() => {
                setSelectedFaction(factionKey);
              }}
            >
              <h5 className="text-center text-gray-200 text-xl mb-1">{faction.name}</h5>
              <div className="flex flex-row justify-center">
                <img className="w-24" draggable={false} src={faction.icon} alt={`${faction.name} icon`} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FactionSelector;
