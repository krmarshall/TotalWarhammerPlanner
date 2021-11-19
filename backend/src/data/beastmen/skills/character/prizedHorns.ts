import { CharacterSkillIcons, SkillIconTypes } from '../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

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
