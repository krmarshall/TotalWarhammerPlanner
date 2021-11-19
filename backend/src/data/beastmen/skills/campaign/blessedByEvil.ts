import { CampaignSkillIcons, SkillIconTypes } from '@projectEnums/SkillIconEnums';
import SkillInterface from '@projectInterfaces/SkillInterfaces';

const blessedByEvil: SkillInterface = {
  name: 'Blessed By Evil',
  icon: CampaignSkillIcons.militarySpending,
  iconType: SkillIconTypes.campaign,
  boxed: true,
  requiresSkill: 'gargantuanHooves',
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: CampaignSkillIcons.item,
          iconType: SkillIconTypes.campaign,
          description: 'Post battle chance of stealing a magic item: +10%',
          goodEffect: true,
        },
        {
          icon: CampaignSkillIcons.income,
          iconType: SkillIconTypes.campaign,
          description: 'Income from post-battle loot: +5%',
          goodEffect: true,
        },
      ],
    },
    rank2: {
      skillEffects: [
        {
          icon: CampaignSkillIcons.item,
          iconType: SkillIconTypes.campaign,
          description: 'Post battle chance of stealing a magic item: +20%',
          goodEffect: true,
        },
        {
          icon: CampaignSkillIcons.income,
          iconType: SkillIconTypes.campaign,
          description: 'Income from post-battle loot: +10%',
          goodEffect: true,
        },
      ],
    },
    rank3: {
      skillEffects: [
        {
          icon: CampaignSkillIcons.item,
          iconType: SkillIconTypes.campaign,
          description: 'Post battle chance of stealing a magic item: +30%',
          goodEffect: true,
        },
        {
          icon: CampaignSkillIcons.income,
          iconType: SkillIconTypes.campaign,
          description: 'Income from post-battle loot: +15%',
          goodEffect: true,
        },
      ],
    },
  },
};

export default blessedByEvil;
