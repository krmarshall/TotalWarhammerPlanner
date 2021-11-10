import factions from '../data/factions';

interface FactionSelectorProps {
  selectedFaction: string;
  setSelectedFaction: CallableFunction;
}

const FactionSelector = ({ selectedFaction, setSelectedFaction }: FactionSelectorProps) => {
  const factionKeys = Object.keys(factions);

  const horizontalScroll = (event: React.WheelEvent) => {
    const container = document.getElementById('horScrollContainerFaction');
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
    <div className="justify-self-center">
      <h1 className="text-center text-2xl mb-2 text-gray-200">Factions</h1>
      <ul
        className="flex flex-row pb-3 flex-nowrap overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-600"
        onWheel={(event) => {
          horizontalScroll(event);
        }}
        id="horScrollContainerFaction"
      >
        {factionKeys.map((factionKey) => {
          const faction = factions[factionKey as keyof typeof factions];

          const normalClassName = 'flex-none flex-col m-1 p-2 border border-gray-500 rounded-lg hover:bg-gray-600';
          const highlightedClassName =
            'flex-none flex-col m-1 p-2 border border-gray-500 rounded-lg bg-gray-600 hover:bg-gray-500';

          return (
            <li
              key={faction.name}
              className={factionKey === selectedFaction ? highlightedClassName : normalClassName}
              onClick={() => {
                setSelectedFaction(factionKey);
              }}
            >
              <h5 className="text-center text-gray-200 mb-1">{faction.name}</h5>
              <div className="flex flex-row justify-center">
                <img className="w-24" src={faction.icon} alt={`${faction.name} icon`} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FactionSelector;
