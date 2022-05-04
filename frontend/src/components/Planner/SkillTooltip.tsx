import { findSkill } from '../../utils/skillVerification';
import { AbilityInterface, SkillInterface } from '../../types/interfaces/CharacterInterface';
import SkillEffect from './SkillEffect';
import SkillAbilityTooltip from './SkillAbilityTooltip';
import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';

interface SkillTooltipPropInterface {
  skill: SkillInterface | undefined;
  skillPoints: number;
  blocked: boolean;
}

const SkillTooltip = ({ skill, skillPoints, blocked }: SkillTooltipPropInterface) => {
  const { state } = useContext(AppContext);
  const { characterData, characterBuild } = state;

  let parentName = '';
  if (skill?.parent_required) {
    const parentLocation = findSkill(characterData, characterBuild, skill?.parent_required[0]);
    parentName = characterData?.skillTree[parentLocation?.yIndex as number][parentLocation?.xIndex as number]
      .name as string;
  }

  const relatedAbilities: Array<AbilityInterface> = [];
  skill?.levels?.[skillPoints]?.effects?.forEach((effect) => {
    if (effect.related_abilities) {
      relatedAbilities.push(...effect.related_abilities);
    }
  });
  return (
    <span className="text-center">
      <div className="w-fit p-2 rounded border border-gray-400 shadow-lg text-gray-50 bg-gray-600">
        <h3 className="text-gray-50 text-2xl">{skill?.name}</h3>
        {skill?.description.trim() && (
          <h4 className="text-gray-50 opacity-70 text-lg max-w-fit">&quot;{skill?.description.trim()}&quot;</h4>
        )}
        {skill?.levels?.[skillPoints]?.unlocked_at_rank && (
          <p className="text-yellow-400 text-lg">Available at rank {skill?.levels?.[skillPoints]?.unlocked_at_rank}</p>
        )}
        {skill?.required_num_parents !== 0 && (
          <p className="text-yellow-400 text-lg">
            Available after spending {skill?.required_num_parents} skill points in the previous group
          </p>
        )}
        {skill?.parent_required && (
          <p className="text-yellow-400 text-lg">Available after unlocking &quot;{parentName.trim()}&quot;</p>
        )}
        {blocked && <p className="text-red-500 text-lg">Skill has been blocked by another skill.</p>}
        <div>
          {skill?.levels?.[skillPoints]?.effects?.map((skillEffect, index) => {
            return <SkillEffect key={index} skillEffect={skillEffect} />;
          })}
        </div>
      </div>
      {
        relatedAbilities.length !== 0 && (
          <div className="w-fit mt-2 p-2 rounded border border-gray-400 shadow-lg text-lg text-gray-50 bg-gray-600">
            <SkillAbilityTooltip ability={relatedAbilities[0]} />
          </div>
        )
        // relatedAbilities.map((ability, index) => {
        //   return (
        //     <div
        //       key={index}
        //       className="mt-2 p-2 rounded border border-gray-400 shadow-lg text-lg text-gray-50 bg-gray-600"
        //     >
        //       <SkillAbilityTooltip ability={ability} />
        //     </div>
        //   );
        // })
      }
    </span>
  );
};

export default SkillTooltip;
