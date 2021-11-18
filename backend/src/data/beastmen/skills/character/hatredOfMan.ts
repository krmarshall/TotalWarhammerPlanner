import { CharacterSkillIcons, SkillIconTypes } from '@projectEnums/SkillIconEnums';
import SkillInterface from '@projectInterfaces/SkillInterfaces';

const hatredOfMan: SkillInterface = {
  name: 'Hatred Of Man',
  icon: CharacterSkillIcons.attack,
  iconType: SkillIconTypes.character,
  requiresSkill: 'primevalRage',
  boxed: true,
  rightArrow: true,
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: CharacterSkillIcons.attack,
          iconType: SkillIconTypes.character,
          description: 'Melee attack: +6',
          goodEffect: true,
        },
      ],
    },
    rank2: {
      skillEffects: [
        {
          icon: CharacterSkillIcons.attack,
          iconType: SkillIconTypes.character,
          description: 'Melee attack: +12',
          goodEffect: true,
        },
      ],
    },
  },
};

export default hatredOfMan;