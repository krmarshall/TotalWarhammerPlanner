import { BattleSkillIcons, CharacterSkillIcons, SkillIconTypes } from '@projectEnums/SkillIconEnums';
import SkillInterface from '@projectInterfaces/SkillInterfaces';

const voiceOfTheDarkGods: SkillInterface = {
  name: 'Voice of the Dark Gods',
  icon: BattleSkillIcons.generalAbility,
  iconType: SkillIconTypes.battle,
  ranks: {
    rank1: {
      requiresLevel: 5,
      skillEffects: [
        {
          icon: CharacterSkillIcons.generalAbility,
          iconType: SkillIconTypes.character,
          description: 'Leadership aura size: +25%',
          goodEffect: true,
        },
      ],
    },
    rank2: {
      requiresLevel: 5,
      skillEffects: [
        {
          icon: CharacterSkillIcons.generalAbility,
          iconType: SkillIconTypes.character,
          description: 'Leadership aura size: +25%',
          goodEffect: true,
        },
        {
          icon: CharacterSkillIcons.morale,
          iconType: SkillIconTypes.character,
          description: "Character's aura leadership effect: +5",
          goodEffect: true,
        },
        {
          icon: CharacterSkillIcons.morale,
          iconType: SkillIconTypes.character,
          description: 'Leadership: +5',
          goodEffect: true,
        },
      ],
    },
  },
};

export default voiceOfTheDarkGods;
