import { SkillInterface } from '../../types/interfaces/CharacterInterface';
import SkillTooltip from './SkillTooltip';
import TooltipWrapper from './TooltipWrapper';

interface SkillPointSelectorPropInterface {
  key: number;
  skill: SkillInterface | undefined;
  index: number;
  skillPoints: number;
  thisSkillsCurrentPoints: number;
  blocked: boolean;
}

const SkillPointSelector = ({
  skill,
  index,
  skillPoints,
  thisSkillsCurrentPoints,
  blocked,
}: SkillPointSelectorPropInterface) => {
  let containerClassName = 'w-4 text-center';
  const selected = thisSkillsCurrentPoints >= index + 1 ? true : false;

  if (selected) {
    containerClassName += ' text-gray-50';
  } else {
    containerClassName += ' text-gray-400';
  }

  return (
    <TooltipWrapper tooltip={<SkillTooltip skill={skill} skillPoints={skillPoints} blocked={blocked} />}>
      <div className={containerClassName}>O</div>
    </TooltipWrapper>
  );
};

export default SkillPointSelector;
