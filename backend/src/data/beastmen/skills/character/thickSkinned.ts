import { CharacterSkillIcons, SkillIconTypes } from '@projectEnums/SkillIconEnums';
import SkillInterface from '@projectInterfaces/SkillInterfaces';

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
