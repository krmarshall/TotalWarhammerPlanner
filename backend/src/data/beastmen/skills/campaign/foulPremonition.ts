import { CampaignSkillIcons, SkillIconTypes } from '../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const foulPremonition: SkillInterface = {
  name: 'Foul Premonition',
  icon: CampaignSkillIcons.ambush,
  iconType: SkillIconTypes.campaign,
  boxed: true,
  requiresSkill: 'unholyResilience',
  rightArrow: true,
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: CampaignSkillIcons.subterranean,
          iconType: SkillIconTypes.campaign,
          description: 'Chance of intercepting an army using the Underway, beast-paths, or Worldroots: +10%',
          goodEffect: true,
        },
        {
          icon: CampaignSkillIcons.ambush,
          iconType: SkillIconTypes.campaign,
          description: 'Ambush success chance: +3% \n (Lords army)',
          goodEffect: true,
        },
        {
          icon: CampaignSkillIcons.ambush,
          iconType: SkillIconTypes.campaign,
          description: 'Ambush defence chance: +10% \n (Lords army)',
          goodEffect: true,
        },
      ],
    },
    rank2: {
      skillEffects: [
        {
          icon: CampaignSkillIcons.subterranean,
          iconType: SkillIconTypes.campaign,
          description: 'Chance of intercepting an army using the Underway, beast-paths, or Worldroots: +15%',
          goodEffect: true,
        },
        {
          icon: CampaignSkillIcons.ambush,
          iconType: SkillIconTypes.campaign,
          description: 'Ambush success chance: +6% \n (Lords army)',
          goodEffect: true,
        },
        {
          icon: CampaignSkillIcons.ambush,
          iconType: SkillIconTypes.campaign,
          description: 'Ambush defence chance: +15% \n (Lords army)',
          goodEffect: true,
        },
      ],
    },
    rank3: {
      skillEffects: [
        {
          icon: CampaignSkillIcons.subterranean,
          iconType: SkillIconTypes.campaign,
          description: 'Chance of intercepting an army using the Underway, beast-paths, or Worldroots: +25%',
          goodEffect: true,
        },
        {
          icon: CampaignSkillIcons.ambush,
          iconType: SkillIconTypes.campaign,
          description: 'Ambush success chance: +10% \n (Lords army)',
          goodEffect: true,
        },
        {
          icon: CampaignSkillIcons.ambush,
          iconType: SkillIconTypes.campaign,
          description: 'Ambush defence chance: +25% \n (Lords army)',
          goodEffect: true,
        },
      ],
    },
  },
};

export default foulPremonition;
