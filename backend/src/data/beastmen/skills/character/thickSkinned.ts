import { CharacterSkillIcons, SkillIconTypes } from '../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const thickSkinned: SkillInterface = {
  name: 'Thick Skinned',
  icon: CharacterSkillIcons.armour,
  iconType: SkillIconTypes.character,
  requiresSkill: 'primevalRage',
  boxed: true,
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: CharacterSkillIcons.armour,
          iconType: SkillIconTypes.character,
          description: 'Armour: +7',
          goodEffect: true,
        },
      ],
    },
    rank2: {
      skillEffects: [
        {
          icon: CharacterSkillIcons.armour,
          iconType: SkillIconTypes.character,
          description: 'Armour: +15',
          goodEffect: true,
        },
      ],
    },
  },
};

export default thickSkinned;
