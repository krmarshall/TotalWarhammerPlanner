import { useContext, useEffect, useState } from 'react';
import { useXarrow } from 'react-xarrows';
import { AppContext } from '../../contexts/AppContext';
import { TechNodeInterface } from '../../types/interfaces/TechInterface';
import { setFontSize, trimString } from '../../utils/sharedFunctions';
import TooltipWrapper from '../Planner/TooltipWrapper';
import ReactImage from '../ReactImage';
import TechTooltip from './TechTooltip';

import buildingRequired from '../../imgs/other/building_required.webp';

interface PropInterface {
  tech: TechNodeInterface;
  yIndex: number;
  xIndex: number;
}

const TechCell = ({ tech, yIndex, xIndex }: PropInterface) => {
  const { state } = useContext(AppContext);
  const { selectedModTech } = state;
  const [ctrCounter, setCtrCounter] = useState(0);
  const updateXarrow = useXarrow();

  const fontSize = setFontSize(tech.technology.name);

  const imgPadding = selectedModTech.includes('2') ? ' p-0 scale-110' : ' p-1.5';

  const vanillaGamePath = selectedModTech.includes('2') ? 'vanilla2' : 'vanilla3';
  const imgPath = tech.technology.icon_name + '.webp';
  const srcList = [
    `/imgs/${selectedModTech}/campaign_ui/technologies/${imgPath}`,
    `/imgs/${vanillaGamePath}/campaign_ui/technologies/${imgPath}`,
    `/imgs/${vanillaGamePath}/campaign_ui/skills/0_placeholder_skill.webp`,
  ];
  return (
    <td
      className="flex flex-row w-max h-auto my-2 mr-6 relative"
      onContextMenu={(event) => {
        event.preventDefault();
      }}
      onScroll={updateXarrow}
    >
      {tech.technology?.required_buildings !== undefined && tech.technology?.required_buildings?.length > 0 && (
        <TooltipWrapper
          tooltip={
            <div className="w-max p-2 rounded border border-gray-400 shadow-lg text-gray-50 bg-gray-600">
              <p className="text-yellow-300 text-xl">Requires: {tech.technology.required_buildings.join(', ')}</p>
            </div>
          }
        >
          <img
            src={buildingRequired}
            className="w-8 h-8 absolute top-0 right-0 z-20 hover-scale-large contrast-125"
            draggable={false}
            alt="building required icon"
            width="38"
            height="38"
          />
        </TooltipWrapper>
      )}
      <div
        id={tech.key}
        className="flex flex-row z-10 rounded-lg drop-shadow-lg hover-scale bg-no-repeat bg-cover filter-none bg-[url(/imgs/other/skills_tab_frame.webp)] hover:bg-[url(/imgs/other/skills_tab_frame_hover.webp)]"
      >
        <TooltipWrapper tooltip={<TechTooltip tech={tech} ctrCounter={ctrCounter} setCtrCounter={setCtrCounter} />}>
          <div className="flex flex-row">
            <ReactImage
              srcList={srcList}
              className={'w-[4.5rem] h-[4.5rem] my-auto drop-shadow-lg' + imgPadding}
              alt="techIcon"
              w="64"
              h="64"
            />

            <div className="flex flex-col justify-center mr-4">
              <h2 className={`w-[8.5rem] text-center text-gray-200 text-shadow z-10 break-words ${fontSize}`}>
                {trimString(tech.technology.name)}
              </h2>
            </div>
          </div>
        </TooltipWrapper>
      </div>
    </td>
  );
};

export default TechCell;
