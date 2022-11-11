import { useContext, useEffect, useState } from 'react';
import { useXarrow } from 'react-xarrows';
import { AppContext } from '../../contexts/AppContext';
import { TechNodeInterface } from '../../types/interfaces/TechInterface';
import { setFontSize, trimString } from '../../utils/sharedFunctions';
import TooltipWrapper from '../Planner/TooltipWrapper';
import ReactImage from '../ReactImage';
import TechTooltip from './TechTooltip';

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

  const vanillaGamePath = selectedModTech.includes('2') ? 'vanilla2' : 'vanilla3';
  const imgPath = tech.technology.icon_name + '.webp';
  const srcList = [
    `/imgs/${selectedModTech}/campaign_ui/technologies/${imgPath}`,
    `/imgs/${vanillaGamePath}/campaign_ui/technologies/${imgPath}`,
    `/imgs/${vanillaGamePath}/campaign_ui/skills/0_placeholder_skill.webp`,
  ];
  return (
    <td
      className="flex flex-row w-max h-auto my-2 mr-6"
      onContextMenu={(event) => {
        event.preventDefault();
      }}
      onScroll={updateXarrow}
    >
      <div
        id={tech.key}
        className="flex flex-row z-10 rounded-lg drop-shadow-lg hover-scale bg-no-repeat bg-cover filter-none bg-[url(/imgs/other/skills_tab_frame.webp)] hover:bg-[url(/imgs/other/skills_tab_frame_hover.webp)]"
      >
        <TooltipWrapper tooltip={<TechTooltip tech={tech} ctrCounter={ctrCounter} setCtrCounter={setCtrCounter} />}>
          <div className="flex flex-row">
            <ReactImage
              srcList={srcList}
              className="w-[4.5rem] h-[4.5rem] p-1.5 my-auto drop-shadow-lg"
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
