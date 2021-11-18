import { CharacterSkillIcons, SkillIconTypes } from '@projectEnums/SkillIconEnums';
import SkillInterface from '@projectInterfaces/SkillInterfaces';

const savageBeast: SkillInterface = {
  name: 'Savage Beast',
  icon: CharacterSkillIcons.damage,
  iconType: SkillIconTypes.character,
  requiresSkill: 'banquetOfFlesh',
  boxed: true,
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: CharacterSkillIcons.damage,
          iconType: SkillIconTypes.character,
          description: 'Weapon strength: +10%',
          goodEffect: true,
        },
      ],
    },
    rank2: {
      skillEffects: [
        {
          icon: CharacterSkillIcons.damage,
          iconType: SkillIconTypes.character,
          description: 'Weapon strength: +20%',
          goodEffect: true,
        },
      ],
    },
  },
};

export default savageBeast;
