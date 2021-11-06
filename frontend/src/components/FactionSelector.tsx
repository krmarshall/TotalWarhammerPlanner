import factionFlags from '../assets/img/flags/factionFlags';
import { FactionNames } from '../types/enums/FactionEnums';

const FactionSelector = () => {
  const factionKeys = Object.keys(factionFlags);

  const horizontalScroll = (event: React.WheelEvent) => {
    const container = document.getElementById('horScrollContainer');
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
      <ul
        className="flex flex-row pb-3 flex-nowrap overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-500"
        onWheel={(event) => {
          horizontalScroll(event);
        }}
        id="horScrollContainer"
      >
        {factionKeys.map((faction) => {
          return (
            <li
              key={faction}
              className="flex-none flex-col m-1 p-2 border border-gray-400 rounded-lg hover:bg-gray-500"
            >
              <h5 className="text-center text-gray-200 mb-1">
                {FactionNames[faction as keyof typeof FactionNames]}
              </h5>
              <div className="flex flex-row justify-center">
                <img
                  className="w-24"
                  src={factionFlags[faction as keyof typeof factionFlags]}
                  alt={`${faction} icon`}
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
