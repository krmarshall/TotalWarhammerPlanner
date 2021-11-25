import { CharacterSkillIcons, MiscSkillIcons, SkillIconTypes } from '../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const runeOfTheTrueBeast: SkillInterface = {
  name: 'Rune of the True Beast',
  icon: CharacterSkillIcons.defence,
  iconType: SkillIconTypes.character,
  rightArrow: true,
  blocksSkills: ['manBane'],
  ranks: {
    rank1: {
      requiresLevel: 5,
      skillEffects: [
        {
          icon: CharacterSkillIcons.defence,
          iconType: SkillIconTypes.character,
          description: 'Melee defense: +5',
          goodEffect: true,
        },
        {
          icon: MiscSkillIcons.resistanceMissile,
          iconType: SkillIconTypes.misc,
          description: 'Missile resistance: 10%',
          goodEffect: true,
        },
      ],
    },
  },
};

export default runeOfTheTrueBeast;
