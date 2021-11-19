import skillIcons from '../assets/img/skills/skillIcons';
import SkillInterface from '../types/interfaces/SkillInterfaces';

interface SkillCellPropsInterface {
  skill: SkillInterface;
  yIndex: number;
  xIndex: number;
}

const SkillCell = ({ skill, yIndex, xIndex }: SkillCellPropsInterface) => {
  return (
    <td className="flex flex-row w-48">
      {/* @ts-expect-error 7053*/}
      <img className="w-20 h-20" src={skillIcons[skill.iconType][skill.icon]} />
      <h2 className="text-center text-xl text-gray-200">{skill.name}</h2>
    </td>
  );
};

export default SkillCell;
