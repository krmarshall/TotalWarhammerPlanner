import { useState } from 'react';
import { SkillInterface } from '../../types/interfaces/CharacterInterface';
import { setFontSize, trimString } from '../../utils/sharedFunctions';
import ReactImage from '../ReactImage';
import SkillTooltip from './SkillTooltip';
import TooltipWrapper from './TooltipWrapper';

interface PropInterface {
  skill: SkillInterface;
}

const BackgroundSkillCell = ({ skill }: PropInterface) => {
  const [ctrCounter, setCtrCounter] = useState(0);

  const fontSize = setFontSize(skill.name);

  const srcList = [`/imgs/${skill.image_path}.webp`, `/imgs/vanilla3/campaign_ui/skills/0_placeholder_skill.webp`];

  return (
    <TooltipWrapper
      tooltip={
        <SkillTooltip
          skill={skill}
          skillPoints={0}
          blocked={false}
          ctrCounter={ctrCounter}
          setCtrCounter={setCtrCounter}
        />
      }
    >
      <div className="flex flex-row m-auto drop-shadow-lg hover-scale bg-no-repeat bg-cover bg-[url(/imgs/other/skills_tab_frame.webp)] hover:bg-[url(/imgs/other/skills_tab_frame_hover.webp)]">
        <ReactImage
          srcList={srcList}
          className="w-[4.5rem] h-[4.5rem] drop-shadow-lg my-auto text"
          alt="skillIcon"
          w="64"
          h="64"
        />

        <div className="flex flex-col justify-center">
          <h2 className={`w-[8.5rem] text-center text-gray-200 text-shadow z-10 break-words ${fontSize}`}>
            {trimString(skill.name)}
          </h2>
        </div>
        <div className="invisible w-4 pl-0.5">spacer</div>
      </div>
    </TooltipWrapper>
  );
};

export default BackgroundSkillCell;
