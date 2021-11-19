import { AbilitySkillIcons, CharacterSkillIcons, SkillIconTypes } from '@projectEnums/SkillIconEnums';
import SkillInterface from '@projectInterfaces/SkillInterfaces';

const apocalypticVision: SkillInterface = {
  name: 'Apocalyptic Vision',
  icon: AbilitySkillIcons.apocalypticVision,
  iconType: SkillIconTypes.abilities,
  requiresXPoints: 1,
  inLastYSkills: 4,
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: AbilitySkillIcons.callOfViolence,
          iconType: SkillIconTypes.abilities,
          description: 'Replaces: "Call of Violence"',
          goodEffect: true,
        },
        {
          icon: AbilitySkillIcons.apocalypticVision,
          iconType: SkillIconTypes.abilities,
          description: 'Ability: "Apocalyptic Vision"',
          goodEffect: true,
        },
      ],
    },
  },
  extraTooltip: {
    title: 'Apocalyptic Vision',
    subTitle: 'Character ability',
    cooldown: 90,
    type: 'Augment (Area) \n Instantly affects targets in area',
    duration: '18 seconds',
    target: 'Self \n Affects allies in range',
    effectRange: '40m',
    effects: [
      {
        icon: CharacterSkillIcons.morale,
        iconType: SkillIconTypes.character,
        description: '+16 Leadership',
        goodEffect: true,
      },
      {
        icon: CharacterSkillIcons.attack,
        iconType: SkillIconTypes.character,
        description: '+24 Melee Attack',
        goodEffect: true,
      },
    ],
  },
};

export default apocalypticVision;