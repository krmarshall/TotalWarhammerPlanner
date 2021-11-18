import { CharacterSkillIcons, SkillIconTypes } from '@projectEnums/SkillIconEnums';
import SkillInterface from '@projectInterfaces/SkillInterfaces';

const devastatingCharge: SkillInterface = {
  name: 'Devastating Charge',
  icon: CharacterSkillIcons.charge,
  iconType: SkillIconTypes.character,
  requiresSkill: 'primevalRage',
  boxed: true,
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: CharacterSkillIcons.charge,
          iconType: SkillIconTypes.character,
          description: 'Charge bonus: +15',
          goodEffect: true,
        },
      ],
    },
    rank2: {
      skillEffects: [
        {
          icon: CharacterSkillIcons.charge,
          iconType: SkillIconTypes.character,
          description: 'Charge bonus: +30',
          goodEffect: true,
        },
      ],
    },
  },
};

export default devastatingCharge;
