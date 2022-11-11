import { useContext } from 'react';
import { Xwrapper } from 'react-xarrows';
import { AppContext } from '../../contexts/AppContext';
import TechArrows from './TechArrows';
import TechRow from './TechRow';

const TechTable = () => {
  const { state } = useContext(AppContext);
  const { techData } = state;

  const horizontalScroll = (event: React.WheelEvent) => {
    const container = document.getElementById('horScrollContainer');
    const containerScrollPosition = container?.scrollLeft !== undefined ? container?.scrollLeft : 0;
    container?.scrollTo({
      left: containerScrollPosition + event.deltaY,
    });
  };

  return (
    <div
      className="relative overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-600 rounded-xl"
      id="horScrollContainer"
      onWheel={(event) => {
        horizontalScroll(event);
      }}
    >
      <Xwrapper>
        <table className="table-fixed">
          <thead></thead>
          <tbody className="flex flex-col flex-nowrap">
            {techData?.tree.map((techRow, index) => {
              return (
                <TechRow
                  key={index}
                  techRow={techRow}
                  techRowAbove={techData.tree[index - 1]}
                  techRowBelow={techData.tree[index + 1]}
                  yIndex={index}
                />
              );
            })}
          </tbody>
        </table>
        <TechArrows />
      </Xwrapper>
    </div>
  );
};

export default TechTable;
