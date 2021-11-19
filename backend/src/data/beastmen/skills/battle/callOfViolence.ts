import { AbilitySkillIcons, CharacterSkillIcons, SkillIconTypes } from '../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const callOfViolence: SkillInterface = {
  name: 'Call of Violence',
  icon: AbilitySkillIcons.callOfViolence,
  iconType: SkillIconTypes.abilities,
  requiresXPoints: 6,
  inLastYSkills: 6,
  rightArrow: true,
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: AbilitySkillIcons.callOfViolence,
          iconType: SkillIconTypes.abilities,
          description: 'Ability: "Call of Violence"',
          goodEffect: true,
        },
      ],
    },
  },
  extraTooltip: {
    title: 'Call of Violence',
    subTitle: 'Character ability',
    cooldown: 60,
    type: 'Augment (Area) \n Only acts on targets when in area',
    duration: '14 seconds',
    target: 'Self \n Affects allies in range',
    effectRange: '40m',
    effects: [
      {
        icon: CharacterSkillIcons.morale,
        iconType: SkillIconTypes.character,
        description: '+16 Leadership',
        goodEffect: true,
      },
    ],
  },
};

export default callOfViolence;
