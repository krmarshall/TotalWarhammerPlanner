import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import useBulkMediaQueries from '../../hooks/useBulkMediaQueries';
import { getBgUrl } from '../../utils/sharedFunctions';
import SkillRow from './SkillRow';

interface PropInterface {
  faction: string | undefined;
  shortViewToggle: boolean;
}

const SkillTable = ({ faction, shortViewToggle }: PropInterface) => {
  const { state } = useContext(AppContext);
  const { isShortWidth, isShortHeight } = useBulkMediaQueries();

  const isShort = isShortWidth || isShortHeight ? true : false;

  const horizontalScroll = (event: React.WheelEvent) => {
    const container = document.getElementById('horScrollContainer');
    const containerScrollPosition = container?.scrollLeft !== undefined ? container?.scrollLeft : 0;
    container?.scrollTo({
      left: containerScrollPosition + event.deltaY,
    });
  };

  let containerClass =
    'overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-600 rounded-xl bg-left-top bg-local bg-no-repeat bg-cover' +
    getBgUrl(faction);

  if (isShort && shortViewToggle) {
    containerClass += ' h-0';
  } else {
    containerClass += ' grow max-h-[88vh] min-h-[50vh]';
  }
  return (
    <div
      className={containerClass}
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
