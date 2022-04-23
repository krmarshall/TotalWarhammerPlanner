import { SkillInterface } from '../../types/interfaces/CharacterInterface';
import SkillTooltip from './SkillTooltip';

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
  let containerClassName = 'w-4 text-center has-tooltip';
  const selected = thisSkillsCurrentPoints >= index + 1 ? true : false;

  if (selected) {
    containerClassName += ' text-gray-50';
  } else {
    containerClassName += ' text-gray-400';
  }

  return (
    <div className={containerClassName}>
      O
      <SkillTooltip skill={skill} skillPoints={skillPoints} blocked={blocked} />
    </div>
  );
};

export default SkillPointSelector;
