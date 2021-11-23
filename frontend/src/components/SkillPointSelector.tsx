import SkillInterface from '../types/interfaces/SkillInterfaces';
import SkillTooltip from './SkillTooltip';

interface SkillPointSelectorPropInterface {
  skill: SkillInterface | undefined;
  index: number;
  rankKey: string;
  thisSkillsCurrentPoints: number;
}

const SkillPointSelector = ({ skill, index, rankKey, thisSkillsCurrentPoints }: SkillPointSelectorPropInterface) => {
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
      <SkillTooltip skill={skill} rankKey={rankKey} />
    </div>
  );
};

export default SkillPointSelector;
