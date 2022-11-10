import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import TechRow from './TechRow';

const TechTable = () => {
  const { state } = useContext(AppContext);
  const horizontalScroll = (event: React.WheelEvent) => {
    const container = document.getElementById('horScrollContainer');
    const containerScrollPosition = container?.scrollLeft !== undefined ? container?.scrollLeft : 0;
    container?.scrollTo({
      left: containerScrollPosition + event.deltaY,
    });
  };
  return (
    <div
      className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-600 rounded-xl"
      id="horScrollContainer"
      onWheel={(event) => {
        horizontalScroll(event);
      }}
    >
      <table className="table-fixed">
        <thead></thead>
        <tbody className="flex flex-col flex-nowrap">
          {state.techData?.tree.map((techRow, index) => {
            return <TechRow key={index} techRow={techRow} yIndex={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TechTable;
