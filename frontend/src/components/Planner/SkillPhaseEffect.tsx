import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import { StatEffectInterface } from '../../types/interfaces/CharacterInterface';
import ReactImage from '../ReactImage';

interface PropInterface {
  effect: StatEffectInterface;
}

const SkillPhaseEffect = ({ effect }: PropInterface) => {
  const { state } = useContext(AppContext);
  const { selectedMod, selectedGame } = state;

  const vanillaGamePath = selectedGame === '2' ? 'vanilla2' : 'vanilla3';
  const imagePath = effect?.icon?.replace('.png', '.webp');
  return (
    <div className="flex flex-row flex-nowrap">
      <ReactImage
        srcList={[
          `/imgs/${selectedMod}/skins/default/${imagePath}`,
          `/imgs/${vanillaGamePath}/skins/default/${imagePath}`,
          `/imgs/${selectedMod}/battle_ui/ability_icons/${imagePath}`,
          `/imgs/${vanillaGamePath}/battle_ui/ability_icons/${imagePath}`,
          `/imgs/${vanillaGamePath}/campaign_ui/skills/0_placeholder_skill.webp`,
        ]}
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
