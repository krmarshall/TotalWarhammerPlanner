import { useContext, useEffect, useState } from 'react';
import { useXarrow } from 'react-xarrows';
import { AppContext } from '../../contexts/AppContext';
import { TechNodeInterface } from '../../types/interfaces/TechInterface';
import { setFontSize, trimString } from '../../utils/sharedFunctions';
import TooltipWrapper from '../Planner/TooltipWrapper';
import ReactImage from '../ReactImage';
import TechTooltip from './TechTooltip';

import buildingRequired from '../../imgs/other/building_required.webp';
import timerFrame from '../../imgs/other/timer_frame.webp';

interface PropInterface {
  tech: TechNodeInterface;
  yIndex: number;
  xIndex: number;
  borderClass: string;
}

const TechCell = ({ tech, yIndex, xIndex, borderClass }: PropInterface) => {
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
    `/imgs/${selectedModTech}/campaign_ui/technologies/${imgPath.toLowerCase()}`,
    `/imgs/${vanillaGamePath}/campaign_ui/technologies/${imgPath}`,
    `/imgs/${vanillaGamePath}/campaign_ui/technologies/${imgPath.toLowerCase()}`,
    `/imgs/${vanillaGamePath}/campaign_ui/skills/0_placeholder_skill.webp`,
  ];
  return (
    <td
      className={'flex flex-row w-max h-auto py-2 pr-6' + borderClass}
      style={{ backgroundColor: `#${tech.ui_group_colour}50` }}
      onContextMenu={(event) => {
        event.preventDefault();
      }}
      onScroll={updateXarrow}
    >
      <div
        id={tech.key}
        className="flex flex-row relative z-10 rounded-lg drop-shadow-lg hover-scale bg-no-repeat bg-cover filter-none bg-[url(/imgs/other/skills_tab_frame.webp)] hover:bg-[url(/imgs/other/skills_tab_frame_hover.webp)]"
      >
        <TooltipWrapper tooltip={<TechTooltip tech={tech} ctrCounter={ctrCounter} setCtrCounter={setCtrCounter} />}>
          <div className="flex flex-row">
            {tech.research_points_required > 0 && (
              <div className="">
                <img
                  src={timerFrame}
                  className="w-12 absolute top-[-0.3rem] right-[-1rem] z-20"
                  draggable={false}
                  alt="timer frame"
                  width="46"
                  height="27"
                />
                <p className="text-gray-50 text-lg absolute top-[-0.25rem] right-[-0.2rem] z-30">
                  {Math.ceil(tech.research_points_required / 100)}
                </p>
              </div>
            )}
            {tech.technology?.required_buildings !== undefined && tech.technology?.required_buildings?.length > 0 && (
              <img
                src={buildingRequired}
                className="w-8 h-8 absolute top-[1.3rem] right-[-0.45rem] z-20 contrast-125"
                draggable={false}
                alt="building required icon"
                width="38"
                height="38"
              />
            )}
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
