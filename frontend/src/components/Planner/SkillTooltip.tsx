import { findSkill } from '../../utils/skillVerification';
import { SkillInterface } from '../../types/interfaces/CharacterInterface';
import SkillEffect from './SkillEffect';
import SkillAbilityTooltip from './SkillAbilityTooltip';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../contexts/AppContext';
import useBulkMediaQueries from '../../hooks/useBulkMediaQueries';
import { getRelatedAbilities } from '../../utils/sharedFunctions';

import ctrlImg from '../../imgs/other/ctrlKey.webp';

interface SkillTooltipPropInterface {
  skill: SkillInterface | undefined;
  skillPoints: number;
  blocked: boolean;
  ctrCounter: number;
  setCtrCounter: React.Dispatch<React.SetStateAction<number>>;
}

const SkillTooltip = ({ skill, skillPoints, blocked, ctrCounter, setCtrCounter }: SkillTooltipPropInterface) => {
  const { state } = useContext(AppContext);
  const { characterData, characterBuild } = state;

  const { isMobileWidth, isMobileHeight } = useBulkMediaQueries();

  const isMobile = isMobileWidth || isMobileHeight ? true : false;

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === 'Control') {
        if (ctrCounter + 1 < relatedAbilities.length) {
          setCtrCounter(ctrCounter + 1);
        } else {
          setCtrCounter(0);
        }
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [ctrCounter]);

  let parentName = '';
  if (skill?.parent_required) {
    const parentLocation = findSkill(characterData, characterBuild, skill?.parent_required[0]);
    parentName = characterData?.skillTree[parentLocation?.yIndex as number]?.[parentLocation?.xIndex as number]
      ?.name as string;
  }

  const relatedAbilities = getRelatedAbilities(skill?.levels?.[skillPoints]?.effects);

  return (
    <span className="text-center flex flex-row">
      <div className="flex flex-col">
        <div className="h-fit p-2 rounded border border-gray-400 shadow-lg text-gray-50 bg-gray-600">
          <h3 className="text-gray-50 text-2xl">{skill?.name}</h3>
          {skill?.description.trim() && !isMobile && (
            <h4 className="max-w-[20vw] mx-auto text-gray-50 opacity-70 text-lg">{skill?.description.trim()}</h4>
          )}
          {skill?.levels?.[skillPoints]?.auto_unlock_at_rank && (
            <p className="text-yellow-400 text-lg">
              Automatically unlocks at rank {skill?.levels?.[skillPoints]?.auto_unlock_at_rank}
            </p>
          )}
          {skill?.levels?.[skillPoints]?.unlocked_at_rank && (
            <p className="text-yellow-400 text-lg">
              Available at rank {skill?.levels?.[skillPoints]?.unlocked_at_rank}
            </p>
          )}
          {skill?.required_num_parents !== 0 && (
            <p className="text-yellow-400 text-lg">
              Available after spending {skill?.required_num_parents} skill points in the previous group
            </p>
          )}
          {skill?.parent_required && (
            <p className="text-yellow-400 text-lg">Available after unlocking &quot;{parentName?.trim()}&quot;</p>
          )}
          {blocked && <p className="text-red-500 text-lg">Skill has been blocked by another skill.</p>}
          <div>
            {skill?.levels?.[skillPoints]?.effects?.map((skillEffect, index) => {
              return <SkillEffect key={index} skillEffect={skillEffect} />;
            })}
          </div>
        </div>
        {relatedAbilities.length > 1 && (
          <div className="h-fit w-fit m-2 mx-auto p-2 rounded border border-gray-400 shadow-lg text-xl text-gray-50 bg-gray-600">
            <p>
              Showing ability {ctrCounter + 1}/{relatedAbilities.length}
            </p>
            <p>
              Press <img src={ctrlImg} alt="ctrl key" className="w-8 h-8 inline m-auto" width="80" height="80" /> to
              cycle the displayed ability
            </p>
          </div>
        )}
      </div>

      {relatedAbilities.length !== 0 &&
        relatedAbilities.map((ability, index) => {
          if (index !== ctrCounter) {
            return;
          }
          return <SkillAbilityTooltip key={index} ability={ability} />;
        })}
    </span>
  );
};

export default SkillTooltip;
