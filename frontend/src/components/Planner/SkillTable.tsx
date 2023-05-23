import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import { getBgUrl } from '../../utils/sharedFunctions';
import SkillRow from './SkillRow';

interface PropInterface {
  faction: string | undefined;
}

const SkillTable = ({ faction }: PropInterface) => {
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
      className={
        'w-fit overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-600 bg-left-top bg-local bg-no-repeat bg-cover' +
        getBgUrl(faction)
      }
      id="horScrollContainer"
      onWheel={(event) => {
        horizontalScroll(event);
      }}
    >
      <table className="table-fixed">
        <thead></thead>
        <tbody className="flex flex-col flex-nowrap">
          {state.characterData?.skillTree?.map((skillRow, index) => {
            return <SkillRow key={index} skillRow={skillRow} yIndex={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SkillTable;
