import { BattleSkillIcons, CharacterSkillIcons, SkillIconTypes } from '@projectEnums/SkillIconEnums';
import SkillInterface from '@projectInterfaces/SkillInterfaces';

const presenceOfMorrslieb: SkillInterface = {
  name: 'Presence of Morrslieb',
  icon: BattleSkillIcons.morale,
  iconType: SkillIconTypes.battle,
  rightArrow: true,
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: CharacterSkillIcons.morale,
          iconType: SkillIconTypes.character,
          description: "Character's aura leadership effect: +5",
          goodEffect: true,
        },
      ],
    },
  },
};

export default presenceOfMorrslieb;
