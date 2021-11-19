import { CharacterSkillIcons, SkillIconTypes } from '../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

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
