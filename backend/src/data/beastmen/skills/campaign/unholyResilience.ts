import { CampaignSkillIcons, SkillIconTypes } from '../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const unholyResilience: SkillInterface = {
  name: 'Unholy Resilience',
  icon: CampaignSkillIcons.woundTime,
  iconType: SkillIconTypes.campaign,
  requiresXPoints: 4,
  inLastYSkills: 4,
  rightArrow: true,
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: CampaignSkillIcons.replenishment,
          iconType: SkillIconTypes.campaign,
          description: 'Casualty replenishment rate: +30% for Lords \n (Lords army)',
          goodEffect: true,
        },
        {
          icon: CampaignSkillIcons.woundTime,
          iconType: SkillIconTypes.campaign,
          description: 'Wound recovery time: -1',
          goodEffect: true,
        },
      ],
    },
  },
};

export default unholyResilience;
