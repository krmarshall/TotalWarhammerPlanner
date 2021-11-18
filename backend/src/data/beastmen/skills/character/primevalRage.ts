import { CharacterSkillIcons, SkillIconTypes } from '@projectEnums/SkillIconEnums';
import SkillInterface from '@projectInterfaces/SkillInterfaces';

const primevalRage: SkillInterface = {
  name: 'Primeval Rage',
  icon: CharacterSkillIcons.attack,
  iconType: SkillIconTypes.character,
  rightArrow: true,
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: CharacterSkillIcons.attack,
          iconType: SkillIconTypes.character,
          description: 'Melee attack: +5',
          goodEffect: true,
        },
      ],
    },
  },
};

export default primevalRage;
