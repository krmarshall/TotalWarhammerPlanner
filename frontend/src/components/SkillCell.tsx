import skillIcons from '../assets/img/skills/skillIcons';
import SkillInterface from '../types/interfaces/SkillInterfaces';
import SkillTooltip from './SkillTooltip';

interface SkillCellPropsInterface {
  skill: SkillInterface;
  yIndex: number;
  xIndex: number;
  boxedType: string;
}

const SkillCell = ({ skill, yIndex, xIndex, boxedType }: SkillCellPropsInterface) => {
  const rankKeys = Object.keys(skill.ranks);
  let tdClassName = 'flex flex-row w-max h-full my-1 border hover:bg-gray-600 select-none';

  switch (boxedType) {
    case 'start': {
      tdClassName += ' border-gray-400 border-r-0 rounded-l';
      break;
    }
    case 'center': {
      tdClassName += ' border-gray-400 border-l-0 border-r-0';
      break;
    }
    case 'end': {
      tdClassName += ' border-gray-400 border-l-0 rounded-r';
      break;
    }
    case 'none': {
      tdClassName += ' border-gray-700 rounded';
      break;
    }
    default: {
      break;
    }
  }

  return (
    <td className={tdClassName}>
      <img // @ts-expect-error 7053
        src={skillIcons[skill.iconType][skill.icon]}
        className="w-16 h-16"
        draggable={false}
        alt="skillIcon"
        width="64"
        height="64"
      />
      <div className="flex flex-col justify-center m-auto">
        <h2 className="w-32 text-center text-xl text-gray-200">{skill.name}</h2>
      </div>
      <div className="w-4 flex flex-col justify-center mx-1 text-sm text-gray-200">
        {rankKeys.map((rankKey) => {
          return <SkillTooltip key={rankKey} skill={skill} rankKey={rankKey} />;
        })}
      </div>
      <div className="flex flex-col justify-center">
        {skill.rightArrow && <p className="w-12 text-center text-4xl text-gray-200">→</p>}
      </div>
    </td>
  );
};

export default SkillCell;
