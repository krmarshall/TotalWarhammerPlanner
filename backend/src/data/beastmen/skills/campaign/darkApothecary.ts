import { CampaignSkillIcons, SkillIconTypes } from '@projectEnums/SkillIconEnums';
import SkillInterface from '@projectInterfaces/SkillInterfaces';

const darkApothecary: SkillInterface = {
  name: 'Dark Apothecary',
  icon: CampaignSkillIcons.disaster,
  iconType: SkillIconTypes.campaign,
  boxed: true,
  requiresSkill: 'gargantuanHooves',
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: CampaignSkillIcons.disaster,
          iconType: SkillIconTypes.campaign,
          description: 'Attrition: -10% casualties suffered from all attrition \n (Lords army)',
          goodEffect: true,
        },
        {
          icon: CampaignSkillIcons.replenishment,
          iconType: SkillIconTypes.campaign,
          description: 'Casualty replenishment rate: +2% \n (Lords army)',
          goodEffect: true,
        },
      ],
    },
    rank2: {
      skillEffects: [
        {
          icon: CampaignSkillIcons.disaster,
          iconType: SkillIconTypes.campaign,
          description: 'Attrition: -20% casualties suffered from all attrition \n (Lords army)',
          goodEffect: true,
        },
        {
          icon: CampaignSkillIcons.replenishment,
          iconType: SkillIconTypes.campaign,
          description: 'Casualty replenishment rate: +4% \n (Lords army)',
          goodEffect: true,
        },
      ],
    },
    rank3: {
      skillEffects: [
        {
          icon: CampaignSkillIcons.disaster,
          iconType: SkillIconTypes.campaign,
          description: 'Attrition: -30% casualties suffered from all attrition \n (Lords army)',
          goodEffect: true,
        },
        {
          icon: CampaignSkillIcons.replenishment,
          iconType: SkillIconTypes.campaign,
          description: 'Casualty replenishment rate: +6% \n (Lords army)',
          goodEffect: true,
        },
      ],
    },
  },
};

export default darkApothecary;
