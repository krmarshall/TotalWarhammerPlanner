import { CharacterSkillIcons, SkillIconTypes } from '../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const dualWielder: SkillInterface = {
  name: 'Dual Wielder',
  icon: CharacterSkillIcons.charge,
  iconType: SkillIconTypes.character,
  rightArrow: true,
  blocksSkills: ['dreadsAndCharms'],
  ranks: {
    rank1: {
      requiresLevel: 5,
      skillEffects: [
        {
          icon: CharacterSkillIcons.charge,
          iconType: SkillIconTypes.character,
          description: 'Charge bonus: +15',
          goodEffect: true,
        },
        {
          icon: CharacterSkillIcons.damage,
          iconType: SkillIconTypes.character,
          description: 'Weapon strength: +15%',
          goodEffect: true,
        },
      ],
    },
  },
};

export default dualWielder;
