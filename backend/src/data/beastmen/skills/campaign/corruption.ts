import { CampaignSkillIcons, SkillIconTypes } from '../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const corruption: SkillInterface = {
  name: 'Corruption',
  icon: CampaignSkillIcons.chaosCorruption,
  iconType: SkillIconTypes.campaign,
  boxed: true,
  requiresSkill: 'unholyResilience',
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: CampaignSkillIcons.item,
          iconType: SkillIconTypes.campaign,
          description: 'Magic item drop chance: +5%',
          goodEffect: true,
        },
        {
          icon: CampaignSkillIcons.chaosCorruption,
          iconType: SkillIconTypes.campaign,
          description: 'Chaos corruption: +1\n(local province)',
          goodEffect: true,
        },
      ],
    },
    rank2: {
      skillEffects: [
        {
          icon: CampaignSkillIcons.item,
          iconType: SkillIconTypes.campaign,
          description: 'Magic item drop chance: +10%',
          goodEffect: true,
        },
        {
          icon: CampaignSkillIcons.chaosCorruption,
          iconType: SkillIconTypes.campaign,
          description: 'Chaos corruption: +2\n(local province)',
          goodEffect: true,
        },
      ],
    },
    rank3: {
      skillEffects: [
        {
          icon: CampaignSkillIcons.item,
          iconType: SkillIconTypes.campaign,
          description: 'Magic item drop chance: +15%',
          goodEffect: true,
        },
        {
          icon: CampaignSkillIcons.chaosCorruption,
          iconType: SkillIconTypes.campaign,
          description: 'Chaos corruption: +4\n(local province)',
          goodEffect: true,
        },
      ],
    },
  },
};

export default corruption;
