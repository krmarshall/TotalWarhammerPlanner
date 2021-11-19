import { CampaignSkillIcons, SkillIconTypes } from '../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const childrenOfChaos: SkillInterface = {
  name: 'Children of Chaos',
  icon: CampaignSkillIcons.experience,
  iconType: SkillIconTypes.campaign,
  requiresXPoints: 4,
  inLastYSkills: 4,
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: CampaignSkillIcons.bestialRage,
          iconType: SkillIconTypes.campaign,
          description: 'Bestial rage: +1 \n (Lords army)',
          goodEffect: true,
        },
        {
          icon: CampaignSkillIcons.movement,
          iconType: SkillIconTypes.campaign,
          description: 'Campaign movement range: +5%',
          goodEffect: true,
        },
        {
          icon: CampaignSkillIcons.agent,
          iconType: SkillIconTypes.campaign,
          description: 'Hero self-defence: +25% chance of wounding aggressors',
          goodEffect: true,
        },
        {
          icon: CampaignSkillIcons.agent,
          iconType: SkillIconTypes.campaign,
          description: 'Enemy Hero action success chance: -10%',
          goodEffect: true,
        },
        {
          icon: CampaignSkillIcons.experience,
          iconType: SkillIconTypes.campaign,
          description: 'Recruit rank: +1 for all units',
          goodEffect: true,
        },
      ],
    },
  },
};

export default childrenOfChaos;
