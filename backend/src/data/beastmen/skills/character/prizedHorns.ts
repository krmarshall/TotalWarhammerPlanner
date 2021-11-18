import { CharacterSkillIcons, SkillIconTypes } from '@projectEnums/SkillIconEnums';
import SkillInterface from '@projectInterfaces/SkillInterfaces';

const prizedHorns: SkillInterface = {
  name: 'Prized Horns',
  icon: CharacterSkillIcons.defence,
  iconType: SkillIconTypes.character,
  boxed: true,
  requiresSkill: 'banquetOfFlesh',
  rightArrow: true,
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

export default prizedHorns;
