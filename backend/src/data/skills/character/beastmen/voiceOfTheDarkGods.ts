import { BattleSkills, CharacterSkills, SkillTypes } from '../../../../types/enums/SkillEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const voiceOfTheDarkGods: SkillInterface = {
  name: 'Voice of the Dark Gods',
  icon: BattleSkills.generalAbility,
  iconType: SkillTypes.battle,
  ranks: {
    rank1: {
      requiresLevel: 5,
      skillEffects: [
        {
          icon: CharacterSkills.generalAbility,
          iconType: SkillTypes.character,
          description: 'Leadership aura size: +25%',
          goodEffect: true,
        },
      ],
    },
    rank2: {
      requiresLevel: 5,
      skillEffects: [
        {
          icon: CharacterSkills.generalAbility,
          iconType: SkillTypes.character,
          description: 'Leadership aura size: +25%',
          goodEffect: true,
        },
        {
          icon: CharacterSkills.morale,
          iconType: SkillTypes.character,
          description: "Character's aura leadership effect: +5",
          goodEffect: true,
        },
        {
          icon: CharacterSkills.morale,
          iconType: SkillTypes.character,
          description: 'Leadership: +5',
          goodEffect: true,
        },
      ],
    },
  },
};

export default voiceOfTheDarkGods;
