import { AbilityInterface, PhaseInterface } from '../types/interfaces/CharacterInterface';
import SkillAbilityTooltip from './Planner/SkillAbilityTooltip';
import SkillPhase from './Planner/SkillPhase';

interface PropInterface {
  relatedAbilities: Array<AbilityInterface>;
  relatedPhases: Array<PhaseInterface>;
  ctrCounter: number;
}

const TooltipAbilityMap = ({ relatedAbilities, relatedPhases, ctrCounter }: PropInterface) => {
  return (
    <div className="flex flex-col w-fit h-fit max-w-[30vw] ml-2">
      {relatedAbilities.map((ability, index) => {
        if (index !== ctrCounter) {
          return;
        }
        return <SkillAbilityTooltip key={index} ability={ability} />;
      })}
      {relatedPhases.map((phase, index) => {
        return <SkillPhase key={index} phase={phase} index={index} header={true} random={false} />;
      })}
    </div>
  );
};

export default TooltipAbilityMap;
