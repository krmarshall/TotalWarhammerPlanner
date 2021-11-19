import { CharacterSkillIcons, SkillIconTypes } from '../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const banquetOfFlesh: SkillInterface = {
  name: 'Banquet of Flesh',
  icon: CharacterSkillIcons.speed,
  iconType: SkillIconTypes.character,
  requiresXPoints: 4,
  inLastYSkills: 4,
  rightArrow: true,
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: CharacterSkillIcons.speed,
          iconType: SkillIconTypes.character,
          description: 'Speed: +5%',
          goodEffect: true,
        },
        {
          icon: CharacterSkillIcons.charge,
          iconType: SkillIconTypes.character,
          description: 'Charge bonus: +15',
          goodEffect: true,
        },
      ],
    },
  },
};

export default banquetOfFlesh;
