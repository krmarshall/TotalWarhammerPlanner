import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import { SkillEffectInterface } from '../../types/interfaces/CharacterInterface';

interface SkillEffectPropsInterface {
  skillEffect: SkillEffectInterface;
}

const SkillEffect = ({ skillEffect }: SkillEffectPropsInterface) => {
  const { state } = useContext(AppContext);
  const { selectedGame } = state;
  const goodBadEffectClassName = 'text-lg whitespace-pre-wrap';
  // if (skillEffect.goodEffect) {
  //   goodBadEffectClassName += ' text-green-400';
  // } else {
  //   goodBadEffectClassName += ' text-red-500';
  // }

  const iconName = skillEffect.icon.replace('.png', '.webp');
  return (
    <div className="flex flex-row flex-nowrap">
      <img
        src={`/imgs/${selectedGame}/campaign_ui/effect_bundles/${iconName}`}
        className="w-6 h-6"
        alt={`${skillEffect.key} icon`}
        width="32"
        height="32"
      />
      <div className="flex flex-col justify-center ml-1 text-left ">
        <p className={goodBadEffectClassName}>{skillEffect.description}</p>
      </div>
    </div>
  );
};

export default SkillEffect;
