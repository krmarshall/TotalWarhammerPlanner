import skillIcons from '../assets/img/skills/skillIcons';
import SkillInterface from '../types/interfaces/SkillInterfaces';

interface SkillCellPropsInterface {
  skill: SkillInterface;
  yIndex: number;
  xIndex: number;
  boxedType: string;
}

const SkillCell = ({ skill, yIndex, xIndex, boxedType }: SkillCellPropsInterface) => {
  let tdClassName = 'flex flex-row w-52 h-full my-1 border hover:bg-gray-600 select-none';

  switch (boxedType) {
    case 'start': {
      tdClassName += ' border-gray-400 border-r-0';
      break;
    }
    case 'center': {
      tdClassName += ' border-gray-400 border-l-0 border-r-0';
      break;
    }
    case 'end': {
      tdClassName += ' border-gray-400 border-l-0';
      break;
    }
    case 'none': {
      tdClassName += ' border-gray-700';
      break;
    }
    default: {
      break;
    }
  }

  return (
    <td className={tdClassName}>
      {/* @ts-expect-error 7053*/}
      <img className="w-16 h-16" src={skillIcons[skill.iconType][skill.icon]} draggable={false} />
      <div className="flex flex-col justify-center m-auto">
        <h2 className="text-center text-xl text-gray-200">{skill.name}</h2>
      </div>
      <div className="flex flex-col justify-center">
        {skill.rightArrow && <p className="text-center text-4xl text-gray-200">→</p>}
      </div>
    </td>
  );
};

export default SkillCell;
