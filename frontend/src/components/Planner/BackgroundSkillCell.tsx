import { useContext } from 'react';
import { useImage } from 'react-image';
import { AppContext } from '../../contexts/AppContext';
import { SkillInterface } from '../../types/interfaces/CharacterInterface';
import SkillTooltip from './SkillTooltip';

interface PropInterface {
  skill: SkillInterface;
}

const BackgroundSkillCell = ({ skill }: PropInterface) => {
  const { state } = useContext(AppContext);
  const { selectedGame } = state;

  const imagePath = skill.image_path.replace('.png', '.webp');
  const { src } = useImage({
    srcList: [
      `/imgs/${selectedGame}/campaign_ui/skills/${imagePath}`,
      `/imgs/${selectedGame}/battle_ui/ability_icons/${imagePath}`,
    ],
  });
  let imgClassName = 'w-16 h-16';
  if (src?.includes('/battle_ui/ability_icons/')) {
    imgClassName += ' p-2.5';
  }
  return (
    <td className="flex flex-row has-tooltip w-max h-fit my-1 p-2 border select-none border-gray-700 hover:bg-gray-600 rounded-lg">
      <img src={src} className={imgClassName} draggable={false} alt="skillIcon" width="64" height="64" />

      <div className="flex flex-col justify-center m-auto">
        <h2 className="w-32 text-center text-xl text-gray-200">{skill.name}</h2>
      </div>
      <SkillTooltip skill={skill} skillPoints={0} blocked={false} />
    </td>
  );
};

export default BackgroundSkillCell;
