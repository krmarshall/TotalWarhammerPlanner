import { EffectInterface } from '../../../types/interfaces/CharacterInterface';
import ReactImage from '../../ReactImage';

interface SkillEffectPropsInterface {
  skillEffect: EffectInterface;
}

const SkillEffect = ({ skillEffect }: SkillEffectPropsInterface) => {
  const goodBadEffectClassName = 'text-lg whitespace-pre-wrap';
  // if (skillEffect.goodEffect) {
  //   goodBadEffectClassName += ' text-green-400';
  // } else {
  //   goodBadEffectClassName += ' text-red-500';
  // }

  const srcList = [
    // `/imgs/${abilityImagePath}.webp`, // Effective placement from below, avoids 404s
    // `/imgs/${skillEffect.icon}.webp`, // Effective placement from below, avoids 404s
    `/imgs/vanilla3/campaign_ui/effect_bundles/0_placeholder_effect_bundle.webp`,
  ];
  if (skillEffect.icon !== '') {
    srcList.unshift(`/imgs/${skillEffect.icon}.webp`);
  }

  const abilityImagePath = skillEffect.related_abilities?.[0].unit_ability.icon_name;
  if (abilityImagePath !== undefined) {
    srcList.unshift(`/imgs/${abilityImagePath}.webp`);
  }
  return (
    <div className="flex flex-row flex-nowrap">
      <ReactImage srcList={srcList} className="w-6 h-6" alt={`${skillEffect.key} icon`} w="24" h="24" />

      <div className="flex flex-col justify-center ml-1 text-left max-w-[25vw]">
        <p className={goodBadEffectClassName}>{skillEffect.description}</p>
      </div>
    </div>
  );
};

export default SkillEffect;
