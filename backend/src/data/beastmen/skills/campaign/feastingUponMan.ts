import { CampaignSkillIcons, SkillIconTypes } from '@projectEnums/SkillIconEnums';
import SkillInterface from '@projectInterfaces/SkillInterfaces';

const feastingUponMan: SkillInterface = {
  name: 'Feasting Upon Man',
  icon: CampaignSkillIcons.militarySpending,
  iconType: SkillIconTypes.campaign,
  boxed: true,
  requiresSkill: 'gargantuanHooves',
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: CampaignSkillIcons.income,
          iconType: SkillIconTypes.campaign,
          description: 'Income from raiding: +3% \n (Lords army)',
          goodEffect: true,
        },
      ],
    },
    rank2: {
      skillEffects: [
        {
          icon: CampaignSkillIcons.income,
          iconType: SkillIconTypes.campaign,
          description: 'Income from raising settlements: +3%',
          goodEffect: true,
        },
        {
          icon: CampaignSkillIcons.income,
          iconType: SkillIconTypes.campaign,
          description: 'Income from raiding: +8% \n (Lords army)',
          goodEffect: true,
        },
      ],
    },
    rank3: {
      skillEffects: [
        {
          icon: CampaignSkillIcons.income,
          iconType: SkillIconTypes.campaign,
          description: 'Income from raising settlements: +8%',
          goodEffect: true,
        },
        {
          icon: CampaignSkillIcons.income,
          iconType: SkillIconTypes.campaign,
          description: 'Income from raiding: +15% \n (Lords army)',
          goodEffect: true,
        },
      ],
    },
  },
};

export default feastingUponMan;
