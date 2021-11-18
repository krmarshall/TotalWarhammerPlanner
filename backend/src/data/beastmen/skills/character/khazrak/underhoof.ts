import { CampaignSkillIcons, SkillIconTypes } from '@projectEnums/SkillIconEnums';
import SkillInterface from '@projectInterfaces/SkillInterfaces';

const underhoof: SkillInterface = {
  name: 'Underhoof',
  icon: CampaignSkillIcons.ambush,
  iconType: SkillIconTypes.campaign,
  requiresSkill: 'bestialCunning',
  boxed: true,
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: CampaignSkillIcons.subterranean,
          iconType: SkillIconTypes.campaign,
          description: 'Reinforcement range: +50% \n (all characters)',
          goodEffect: true,
        },
        {
          icon: CampaignSkillIcons.subterranean,
          iconType: SkillIconTypes.campaign,
          description: 'Chance of intercepting an army using the Underway, beast-paths or Worldroots: +20%',
          goodEffect: true,
        },
      ],
    },
  },
};

export default underhoof;
