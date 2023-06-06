import { findSkill } from '../../utils/skillVerification';
import { SkillInterface } from '../../types/interfaces/CharacterInterface';
import SkillEffect from './SkillEffect';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../contexts/AppContext';
import useBulkMediaQueries from '../../hooks/useBulkMediaQueries';
import { getRelatedAbilities, getRelatedAttributes, getRelatedContactPhases } from '../../utils/sharedFunctions';
import TooltipAbilityCycler from '../TooltipAbiltyCycler';
import TooltipAbilityMap from '../TooltipAbilityMap';

interface SkillTooltipPropInterface {
  skill: SkillInterface | undefined;
  skillPoints: number;
  blocked: boolean;
  ctrCounter: number;
  setCtrCounter: React.Dispatch<React.SetStateAction<number>>;
  setTooltipScrollable?: React.Dispatch<React.SetStateAction<boolean>>;
  tooltipRef?: React.RefObject<HTMLSpanElement>;
}

const SkillTooltip = ({
  skill,
  skillPoints,
  blocked,
  ctrCounter,
  setCtrCounter,
  setTooltipScrollable,
  tooltipRef,
}: SkillTooltipPropInterface) => {
  const { state } = useContext(AppContext);
  const { characterData, characterBuild } = state;

  const { isMobileWidth, isMobileHeight } = useBulkMediaQueries();

  const isMobile = isMobileWidth || isMobileHeight ? true : false;

  useEffect(() => {
    const ctrKeyDownHandler = (event: KeyboardEvent) => {
      if (event.key === 'Control') {
        if (ctrCounter + 1 < relatedAbilities.length) {
          setCtrCounter(ctrCounter + 1);
        } else {
          setCtrCounter(0);
        }
      }
    };

    document.addEventListener('keydown', ctrKeyDownHandler);

    return () => {
      document.removeEventListener('keydown', ctrKeyDownHandler);
    };
  }, [ctrCounter]);

  useEffect(() => {
    if (setTooltipScrollable !== undefined) {
      if (tooltipRef?.current !== null && tooltipRef?.current !== undefined) {
        setTooltipScrollable(tooltipRef.current.scrollHeight > tooltipRef.current.clientHeight);
      } else {
        setTooltipScrollable(false);
      }
    }
  }, [tooltipRef?.current, ctrCounter]);

  let parentName = '';
  if (skill?.parent_required) {
    const parentLocation = findSkill(characterData, characterBuild, skill?.parent_required[0]);
    parentName = characterData?.skillTree[parentLocation?.yIndex as number]?.[parentLocation?.xIndex as number]
      ?.localised_name as string;
  }

  const relatedAbilities = getRelatedAbilities(skill?.levels?.[skillPoints]?.effects);
  const relatedPhases = getRelatedContactPhases(relatedAbilities[ctrCounter], skill?.levels?.[skillPoints]?.effects);
  const relatedAttributes = getRelatedAttributes(relatedAbilities[ctrCounter], skill?.levels?.[skillPoints]?.effects);
  return (
    <span
      ref={tooltipRef}
      className="max-h-[98vh] text-center flex flex-row overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700"
    >
      <div className="flex flex-col">
        <div className="h-fit p-2 rounded border border-gray-400 shadow-lg text-gray-50 bg-gray-600">
          <h3 className="text-gray-50 text-2xl">{skill?.localised_name}</h3>
          {skill?.localised_description.trim() && !isMobile && (
            <h4 className="max-w-[20vw] mx-auto text-gray-50 opacity-70 text-lg">
              {skill?.localised_description.trim()}
            </h4>
          )}
          {skill?.levels?.[skillPoints]?.auto_unlock_at_rank !== undefined &&
            skill?.levels?.[skillPoints]?.auto_unlock_at_rank !== 0 && (
              <p className="text-yellow-300 text-lg">
                Automatically unlocks at rank {skill?.levels?.[skillPoints]?.auto_unlock_at_rank}
              </p>
            )}
          {skill?.levels?.[skillPoints]?.unlocked_at_rank && (
            <p className="text-yellow-300 text-lg">
              Available at rank {skill?.levels?.[skillPoints]?.unlocked_at_rank}
            </p>
          )}
          {skill?.required_num_parents !== 0 && (
            <p className="text-yellow-300 text-lg">
              Available after spending {skill?.required_num_parents} skill points in the previous group
            </p>
          )}
          {skill?.parent_required && (
            <p className="text-yellow-300 text-lg">Available after unlocking &quot;{parentName?.trim()}&quot;</p>
          )}
          {blocked && <p className="text-red-500 text-lg">Skill has been blocked by another skill.</p>}
          <div>
            {skill?.levels?.[skillPoints]?.effects?.map((skillEffect, index) => {
              return <SkillEffect key={index} skillEffect={skillEffect} />;
            })}
          </div>
        </div>
        {relatedAbilities.length > 1 && (
          <TooltipAbilityCycler ctrCounter={ctrCounter} relatedAbilitiesLength={relatedAbilities.length} />
        )}
      </div>

      {(relatedAbilities.length !== 0 || relatedPhases.length !== 0 || relatedAttributes.length !== 0) && (
        <TooltipAbilityMap
          relatedAbilities={relatedAbilities}
          relatedPhases={relatedPhases}
          relatedAttributes={relatedAttributes}
          ctrCounter={ctrCounter}
        />
      )}
    </span>
  );
};

export default SkillTooltip;
