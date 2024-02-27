import { StatEffectInterface } from '../../../types/interfaces/CharacterInterface';
import ReactImage from '../../ReactImage';

interface PropInterface {
  effect: StatEffectInterface;
}

const SkillPhaseEffect = ({ effect }: PropInterface) => {
  return (
    <div className="flex flex-row flex-nowrap">
      <ReactImage
        srcList={[`/imgs/${effect?.icon}.webp`, `/imgs/vanilla3/campaign_ui/skills/0_placeholder_skill.webp`]}
        className="w-6 h-6"
        alt={`${effect.stat} icon`}
        w="24"
        h="24"
      />

      <p className="text-lg whitespace-pre-wrap ml-6">{effect.description}</p>
    </div>
  );
};

export default SkillPhaseEffect;
