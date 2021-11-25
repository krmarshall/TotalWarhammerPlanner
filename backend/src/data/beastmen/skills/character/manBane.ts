import { BattleSkillIcons, CharacterSkillIcons, SkillIconTypes } from '../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const manBane: SkillInterface = {
  name: 'Man-Bane',
  icon: CharacterSkillIcons.attack,
  iconType: SkillIconTypes.character,
  rightArrow: true,
  blocksSkills: ['runeOfTheTrueBeast'],
  ranks: {
    rank1: {
      requiresLevel: 5,
      skillEffects: [
        {
          icon: CharacterSkillIcons.attack,
          iconType: SkillIconTypes.character,
          description: 'Melee attack: +5',
          goodEffect: true,
        },
        {
          icon: BattleSkillIcons.damage,
          iconType: SkillIconTypes.battle,
          description: 'Weapon strength: +10%',
          goodEffect: true,
        },
      ],
    },
  },
};

export default manBane;
