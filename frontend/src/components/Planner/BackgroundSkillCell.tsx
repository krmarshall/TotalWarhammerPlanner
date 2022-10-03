import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import { SkillInterface } from '../../types/interfaces/CharacterInterface';
import ReactImage from '../ReactImage';
import SkillTooltip from './SkillTooltip';
import TooltipWrapper from './TooltipWrapper';

interface PropInterface {
  skill: SkillInterface;
}

const BackgroundSkillCell = ({ skill }: PropInterface) => {
  const { state } = useContext(AppContext);
  const { selectedMod, selectedGame } = state;

  const fontSize = skill.name.length < 28 ? 'text-xl' : 'text-base';

  const vanillaGamePath = selectedGame === '2' ? 'vanilla2' : 'vanilla3';
  const imagePath = skill.image_path.replace('.png', '.webp');

  const srcList = [
    `/imgs/${selectedMod}/campaign_ui/skills/${imagePath}`,
    `/imgs/${vanillaGamePath}/campaign_ui/skills/${imagePath}`,
    `/imgs/${selectedMod}/battle_ui/ability_icons/${imagePath}`,
    `/imgs/${vanillaGamePath}/battle_ui/ability_icons/${imagePath}`,
    `/imgs/${vanillaGamePath}/campaign_ui/skills/0_placeholder_skill.webp`,
  ];

  return (
    <TooltipWrapper tooltip={<SkillTooltip skill={skill} skillPoints={0} blocked={false} />}>
      <div className="flex flex-row m-auto drop-shadow-lg hover-scale bg-no-repeat bg-cover bg-[url(/imgs/other/skills_tab_frame.webp)] hover:bg-[url(/imgs/other/skills_tab_frame_hover.webp)]">
        <ReactImage
          srcList={srcList}
          className="w-[4.5rem] h-[4.5rem] drop-shadow-lg my-auto"
          alt="skillIcon"
          w="64"
          h="64"
        />

        <div className="flex flex-col justify-center">
          <h2 className={`w-[8.5rem] text-center text-gray-200 text-shadow z-10 ${fontSize}`}>{skill.name}</h2>
        </div>
        <div className="invisible w-4 pl-0.5">spacer</div>
      </div>
    </TooltipWrapper>
  );
};

export default BackgroundSkillCell;
