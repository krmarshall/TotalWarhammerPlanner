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
        <td className="h-16"></td>
      ) : (
        skillKeys.map((skillKey, index) => {
          const skill = skillLine[skillKey];
          const nextSkill = skillLine[skillKeys[index + 1]];
          const prevSkill = skillLine[skillKeys[index - 1]];
          let boxedType = 'none';
          if (skill.boxed && !prevSkill?.boxed) {
            boxedType = 'start';
          } else if (skill.boxed && prevSkill?.boxed && nextSkill?.boxed) {
            boxedType = 'center';
          } else if (skill.boxed && !nextSkill.boxed) {
            boxedType = 'end';
          }
          return (
            <SkillCell
              key={skillKey}
              skillKey={skillKey}
              skill={skill}
              yIndex={yIndex}
              xIndex={index}
              boxedType={boxedType}
            />
          );
        })
      )}
    </tr>
  );
};

export default SkillRow;
