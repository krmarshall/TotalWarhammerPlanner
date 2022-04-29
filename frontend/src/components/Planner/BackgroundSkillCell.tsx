import { useContext } from 'react';
import { useImage } from 'react-image';
import { AppContext } from '../../contexts/AppContext';
import { SkillInterface } from '../../types/interfaces/CharacterInterface';
import SkillTooltip from './SkillTooltip';
import TooltipWrapper from './TooltipWrapper';

interface PropInterface {
  skill: SkillInterface;
}

const BackgroundSkillCell = ({ skill }: PropInterface) => {
  const { state } = useContext(AppContext);
  const { selectedMod } = state;

  const imagePath = skill.image_path.replace('.png', '.webp');
  const { src } = useImage({
    srcList: [
      `/imgs/${selectedMod}/campaign_ui/skills/${imagePath}`,
      `/imgs/${selectedMod}/battle_ui/ability_icons/${imagePath}`,
    ],
  });
  let imgClassName = 'w-16 h-16';
  if (src?.includes('/battle_ui/ability_icons/')) {
    imgClassName += ' p-2.5';
  }
  return (
    <TooltipWrapper tooltip={<SkillTooltip skill={skill} skillPoints={0} blocked={false} />}>
      <div className="flex flex-row w-max h-fit my-1 p-2 border select-none border-gray-700 hover:bg-gray-600 rounded-lg">
        <img src={src} className={imgClassName} draggable={false} alt="skillIcon" width="64" height="64" />

        <div className="flex flex-col justify-center m-auto">
          <h2 className="w-32 text-center text-xl text-gray-200">{skill.name}</h2>
        </div>
      </div>
    </TooltipWrapper>
  );
};

export default BackgroundSkillCell;
