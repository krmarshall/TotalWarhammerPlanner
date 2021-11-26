import { CharacterSkillIcons, SkillIconTypes } from '../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const dreadsAndCharms: SkillInterface = {
  name: 'Dreads & Charms',
  icon: CharacterSkillIcons.defence,
  iconType: SkillIconTypes.character,
  rightArrow: true,
  blocksSkills: ['dualWielder'],
  ranks: {
    rank1: {
      requiresLevel: 5,
      skillEffects: [
        {
          icon: CharacterSkillIcons.armour,
          iconType: SkillIconTypes.character,
          description: 'Armour: +15',
          goodEffect: true,
        },
        {
          icon: CharacterSkillIcons.defence,
          iconType: SkillIconTypes.character,
          description: 'Melee defence: +5',
          goodEffect: true,
        },
      ],
    },
  },
};

export default dreadsAndCharms;
