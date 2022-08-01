import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import { SkillEffectInterface } from '../../types/interfaces/CharacterInterface';
import ReactImage from '../ReactImage';

interface SkillEffectPropsInterface {
  skillEffect: SkillEffectInterface;
}

const SkillEffect = ({ skillEffect }: SkillEffectPropsInterface) => {
  const { state } = useContext(AppContext);
  const { selectedMod, selectedGame } = state;
  const goodBadEffectClassName = 'text-lg whitespace-pre-wrap';
  // if (skillEffect.goodEffect) {
  //   goodBadEffectClassName += ' text-green-400';
  // } else {
  //   goodBadEffectClassName += ' text-red-500';
  // }

  const vanillaGamePath = selectedGame === '2' ? 'vanilla2' : 'vanilla3';
  const iconName = skillEffect.icon.replace('.png', '.webp');
  return (
    <div className="flex flex-row flex-nowrap">
      <ReactImage
        srcList={[
          `/imgs/${selectedMod}/campaign_ui/effect_bundles/${iconName}`,
          `/imgs/${vanillaGamePath}/campaign_ui/effect_bundles/${iconName}`,
          `/imgs/${vanillaGamePath}/campaign_ui/effect_bundles/0_placeholder_effect_bundle.webp`,
        ]}
        className="w-6 h-6"
        alt={`${skillEffect.key} icon`}
        w="24"
        h="24"
      />

      <div className="flex flex-col justify-center ml-1 text-left max-w-fit min-w-[18vw]">
        <p className={goodBadEffectClassName}>{skillEffect.description}</p>
      </div>
    </div>
  );
};

export default SkillEffect;
