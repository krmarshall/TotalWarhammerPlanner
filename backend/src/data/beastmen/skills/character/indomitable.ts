import { CharacterSkillIcons, SkillIconTypes } from '../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const indomitable: SkillInterface = {
  name: 'Indomitable',
  icon: CharacterSkillIcons.morale,
  iconType: SkillIconTypes.character,
  boxed: true,
  requiresSkill: 'banquetOfFlesh',
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: CharacterSkillIcons.morale,
          iconType: SkillIconTypes.character,
          description: 'Leadership: +6',
          goodEffect: true,
        },
      ],
    },
    rank2: {
      skillEffects: [
        {
          icon: CharacterSkillIcons.morale,
          iconType: SkillIconTypes.character,
          description: 'Leadership: +12',
          goodEffect: true,
        },
      ],
    },
  },
};

export default indomitable;
