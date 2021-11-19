import SkillInterface from '../types/interfaces/SkillInterfaces';
import SkillCell from './SkillCell';

interface SkillRowPropsInterface {
  skillLine: {
    [key: string]: SkillInterface;
  };
  yIndex: number;
}

const SkillRow = ({ skillLine, yIndex }: SkillRowPropsInterface) => {
  const skillKeys = Object.keys(skillLine);
  return (
    <tr className="flex flex-row">
      {skillKeys.length === 0 ? (
        <td className="h-20"></td>
      ) : (
        skillKeys.map((skillKey, index) => {
          const skill = skillLine[skillKey];
          return <SkillCell key={skillKey} skill={skill} yIndex={yIndex} xIndex={index} />;
        })
      )}
    </tr>
  );
};

export default SkillRow;
