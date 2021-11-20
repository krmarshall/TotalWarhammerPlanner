import SkillInterface from '../types/interfaces/SkillInterfaces';
import SkillEffect from './SkillEffect';
import SkillExtraTooltip from './SkillExtraTooltip';

interface SkillTooltipPropInterface {
  skill: SkillInterface | undefined;
  rankKey: string;
}

const SkillTooltip = ({ skill, rankKey }: SkillTooltipPropInterface) => {
  let pClassName = 'w-4 text-center has-tooltip';

  // Check if this skill rank has been selected
  // eslint-disable-next-line no-constant-condition
  if (false) {
    pClassName += ' text-gray-50';
  } else {
    pClassName += ' text-gray-400';
  }
  return (
    <div className={pClassName}>
      O
      <span className="tooltip text-center">
        <div className="p-2 rounded border border-gray-400 shadow-lg text-gray-50 bg-gray-600">
          <h3 className="text-gray-50 text-xl">{skill?.name}</h3>
          {skill?.ranks[rankKey as keyof typeof skill.ranks]?.requiresLevel && (
            <p className="text-red-500 text-lg">
              Available at rank {skill?.ranks[rankKey as keyof typeof skill.ranks]?.requiresLevel}
            </p>
          )}
          {skill?.requiresXPoints && (
            <p className="text-red-500 text-lg">
              Available after spending {skill?.requiresXPoints} skill points in the previous group
            </p>
          )}
          {skill?.requiresSkill && (
            <p className="text-red-500 text-lg">Available after unlocking &quot;{skill?.requiresSkill}&quot;</p>
          )}
          <div>
            {skill?.ranks[rankKey as keyof typeof skill.ranks]?.skillEffects.map((skillEffect, index) => {
              return <SkillEffect key={index} skillEffect={skillEffect} />;
            })}
          </div>
        </div>
        {skill?.extraTooltip && (
          <div className="mt-2 p-2 rounded border border-gray-400 shadow-lg text-lg text-gray-50 bg-gray-600">
            <SkillExtraTooltip extraTooltip={skill.extraTooltip} />
          </div>
        )}
      </span>
    </div>
  );
};

export default SkillTooltip;
