import { CharacterSkillIcons, SkillIconTypes } from '../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

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
