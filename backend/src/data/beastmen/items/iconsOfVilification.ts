import {
  CampaignSkillIcons,
  CharacterSkillIcons,
  MiscSkillIcons,
  SkillIconTypes,
} from '../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../types/interfaces/SkillInterfaces';

const iconsOfVilification: SkillInterface = {
  name: 'Icons of Vilification',
  icon: CharacterSkillIcons.enchantedItem,
  iconType: SkillIconTypes.character,
  ranks: {
    rank1: {
      requiresLevel: 5,
      skillEffects: [
        {
          icon: CampaignSkillIcons.magic,
          iconType: SkillIconTypes.campaign,
          description: 'Hero capacity: +1 for Bray-Shamans',
          goodEffect: true,
        },
        {
          icon: CampaignSkillIcons.magic,
          iconType: SkillIconTypes.campaign,
          description: 'Hero recruit rank: +1 for Bray-Shamans\n(Lords army)',
          goodEffect: true,
        },
        {
          icon: CampaignSkillIcons.militarySpending,
          iconType: SkillIconTypes.campaign,
          description: 'Horde building construction cost: -25%\n(Lords army)',
          goodEffect: true,
        },
        {
          icon: CampaignSkillIcons.growth,
          iconType: SkillIconTypes.campaign,
          description: 'Horde growth: +5\n(Lords army)',
          goodEffect: true,
        },
        {
          icon: MiscSkillIcons.itemPassiveEnchanted,
          iconType: SkillIconTypes.misc,
          description: 'Passive ability: "Icons of Vilification"',
          goodEffect: true,
        },
      ],
    },
  },
  extraTooltip: {
    title: 'Icons of Vilification',
    subTitle: 'Item',
    type: 'Augment\nOnly acts on targets when in area',
    duration: 'Constant',
    target: 'Self\nAffects allies in range',
    effectRange: '40m',
    effects: [
      {
        icon: CharacterSkillIcons.morale,
        iconType: SkillIconTypes.character,
        description: '+12 Leadership',
        goodEffect: true,
      },
    ],
  },
};

export default iconsOfVilification;
