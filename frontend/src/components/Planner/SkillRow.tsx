import { SkillInterface } from '../../types/interfaces/CharacterInterface';
import SkillCell from './SkillCell';

interface SkillRowPropsInterface {
  skillRow: Array<SkillInterface>;
  yIndex: number;
}

const SkillRow = ({ skillRow, yIndex }: SkillRowPropsInterface) => {
  return (
    <tr className="flex flex-row">
      {skillRow.length === 0 ? (
        <td className="h-16"></td>
      ) : (
        skillRow.map((skill, xIndex) => {
          const nextSkill = skillRow[xIndex + 1];
          const prevSkill = skillRow[xIndex - 1];
          let boxedType = 'none';
          if (skill.boxed && !prevSkill?.boxed && !nextSkill?.boxed) {
            boxedType = 'none';
          } else if (skill.boxed && prevSkill?.boxed && prevSkill.right_arrow) {
            boxedType = 'start';
          } else if (skill.boxed && nextSkill?.boxed && skill.right_arrow) {
            boxedType = 'end';
          } else if (skill.boxed && !prevSkill?.boxed) {
            boxedType = 'start';
          } else if (skill.boxed && prevSkill?.boxed && nextSkill?.boxed) {
            boxedType = 'center';
          } else if (skill.boxed && !nextSkill?.boxed) {
            boxedType = 'end';
          }
          return (
            <>
              <SkillCell
                key={skill.key}
                skillKey={skill.key}
                skill={skill}
                yIndex={yIndex}
                xIndex={xIndex}
                boxedType={boxedType}
              />
              {skill.right_arrow && (
                <td className="w-10 flex flex-col justify-center">
                  {skill?.right_arrow && <p className="text-center text-4xl text-gray-200">→</p>}
                </td>
              )}
            </>
          );
        })
      )}
    </tr>
  );
};

export default SkillRow;
