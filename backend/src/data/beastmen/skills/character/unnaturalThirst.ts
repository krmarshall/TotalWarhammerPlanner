import { CharacterSkillIcons, SkillIconTypes } from '@projectEnums/SkillIconEnums';
import SkillInterface from '@projectInterfaces/SkillInterfaces';

const unnaturalThirst: SkillInterface = {
  name: 'Unnatural Thirst',
  icon: CharacterSkillIcons.health,
  iconType: SkillIconTypes.character,
  requiresSkill: 'banquetOfFlesh',
  boxed: true,
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: CharacterSkillIcons.health,
          iconType: SkillIconTypes.character,
          description: 'Hit points: +7%',
          goodEffect: true,
        },
      ],
    },
    rank2: {
      skillEffects: [
        {
          icon: CharacterSkillIcons.health,
          iconType: SkillIconTypes.character,
          description: 'Hit points: +15%',
          goodEffect: true,
        },
      ],
    },
  },
};

export default unnaturalThirst;
