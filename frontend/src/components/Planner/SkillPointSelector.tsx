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
  let containerClassName = 'w-5 h-5 bg-contain ';
  const selected = thisSkillsCurrentPoints >= index + 1 ? true : false;

  if (selected) {
    containerClassName +=
      'brightness-125 bg-[url(/imgs/other/checkbox_round_selected.webp)] hover:bg-[url(/imgs/other/checkbox_round_selected_hover.webp)]';
  } else {
    containerClassName +=
      'bg-[url(/imgs/other/checkbox_round_active.webp)] hover:brightness-125 hover:bg-[url(/imgs/other/checkbox_round_hover.webp)]';
  }

  return (
    <TooltipWrapper tooltip={<SkillTooltip skill={skill} skillPoints={skillPoints} blocked={blocked} />}>
      <div className={containerClassName}></div>
    </TooltipWrapper>
  );
};

export default SkillPointSelector;
