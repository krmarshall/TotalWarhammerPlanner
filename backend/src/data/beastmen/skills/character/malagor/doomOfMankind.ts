import { CharacterSkillIcons, SkillIconTypes } from '../../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../../types/interfaces/SkillInterfaces';

const doomOfMankind: SkillInterface = {
  name: 'Doom of Mankind',
  icon: CharacterSkillIcons.magic,
  iconType: SkillIconTypes.character,
  requiresXPoints: 2,
  inLastYSkills: 4,
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: CharacterSkillIcons.magic,
          iconType: SkillIconTypes.character,
          description: 'Wind of Magic cost: -20% for all spells',
          goodEffect: true,
        },
      ],
    },
  },
};

export default doomOfMankind;
