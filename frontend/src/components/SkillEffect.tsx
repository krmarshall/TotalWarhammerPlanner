import skillIcons from '../assets/img/skills/skillIcons';
import { SkillEffectInterface } from '../types/interfaces/SkillInterfaces';

interface SkillEffectPropsInterface {
  skillEffect: SkillEffectInterface;
}

const SkillEffect = ({ skillEffect }: SkillEffectPropsInterface) => {
  let goodBadEffectClassName = 'text-lg whitespace-pre-wrap';
  if (skillEffect.goodEffect) {
    goodBadEffectClassName += ' text-green-400';
  } else {
    goodBadEffectClassName += ' text-red-500';
  }
  return (
    <div className="flex flex-row flex-nowrap">
      <img // @ts-expect-error 7053
        src={skillIcons[skillEffect.iconType][skillEffect.icon]}
        className="w-8 h-8"
        alt="skillIcon"
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
