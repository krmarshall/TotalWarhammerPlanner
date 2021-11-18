import { CharacterSkillIcons, SkillIconTypes } from '@projectEnums/SkillIconEnums';
import SkillInterface from '@projectInterfaces/SkillInterfaces';

const primalInstincts: SkillInterface = {
  name: 'Primal Instincts',
  icon: CharacterSkillIcons.defence,
  iconType: SkillIconTypes.character,
  boxed: true,
  requiresSkill: 'primevalRage',
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: CharacterSkillIcons.defence,
          iconType: SkillIconTypes.character,
          description: 'Melee defence: +6',
          goodEffect: true,
        },
      ],
    },
    rank2: {
      skillEffects: [
        {
          icon: CharacterSkillIcons.defence,
          iconType: SkillIconTypes.character,
          description: 'Melee defence: +12',
          goodEffect: true,
        },
      ],
    },
  },
};

export default primalInstincts;