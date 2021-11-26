import {
  AbilitySkillIcons,
  BattleSkillIcons,
  CharacterSkillIcons,
  MiscSkillIcons,
  SkillIconTypes,
} from '../../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../../types/interfaces/SkillInterfaces';

const somethingWickedThisWayComes: SkillInterface = {
  name: 'Something Wicked This Way Comes',
  icon: CharacterSkillIcons.morale,
  iconType: SkillIconTypes.character,
  rightArrow: true,
  ranks: {
    rank1: {
      requiresLevel: 12,
      skillEffects: [
        {
          icon: BattleSkillIcons.morale,
          iconType: SkillIconTypes.battle,
          description: 'Enemy leadership: -5\n(local region)',
          goodEffect: true,
        },
      ],
    },
    rank2: {
      skillEffects: [
        {
          icon: BattleSkillIcons.morale,
          iconType: SkillIconTypes.battle,
          description: 'Enemy leadership: -5\n(local region)',
          goodEffect: true,
        },
        {
          icon: AbilitySkillIcons.somethingWickedThisWayComes,
          iconType: SkillIconTypes.abilities,
          description: 'Ability: "Something Wicked This Way Comes Upgraded"',
          goodEffect: true,
        },
        {
          icon: MiscSkillIcons.causesFear,
          iconType: SkillIconTypes.misc,
          description: 'Attribute: Cases Fear',
          goodEffect: true,
        },
      ],
    },
  },
  extraTooltip: {
    title: 'Something Wicked This Way Comes Upgraded',
    subTitle: 'Lord ability',
    type: 'Hex (Area)\nOnly acts on targets when in area',
    duration: 'Constant',
    target: 'Around self\nAffects enemies in range',
    effectRange: '40m',
    effects: [
      {
        icon: CharacterSkillIcons.morale,
        iconType: SkillIconTypes.character,
        description: '-8 Leadership',
        goodEffect: false,
      },
      {
        icon: MiscSkillIcons.immuneToPsychology,
        iconType: SkillIconTypes.misc,
        description: 'Removes Immune to Psychology',
        goodEffect: false,
      },
    ],
  },
};

export default somethingWickedThisWayComes;
