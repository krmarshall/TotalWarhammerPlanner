import { CampaignSkillIcons, SkillIconTypes } from '../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const gatheringOfBeasts: SkillInterface = {
  name: 'Gathering of Beasts',
  icon: CampaignSkillIcons.army,
  iconType: SkillIconTypes.campaign,
  boxed: true,
  requiresSkill: 'unholyResilience',
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: CampaignSkillIcons.army,
          iconType: SkillIconTypes.campaign,
          description: 'Horde recruitment capacity: +1',
          goodEffect: true,
        },
      ],
    },
    rank2: {
      skillEffects: [
        {
          icon: CampaignSkillIcons.army,
          iconType: SkillIconTypes.campaign,
          description: 'Horde recruitment capacity: +2',
          goodEffect: true,
        },
      ],
    },
    rank3: {
      skillEffects: [
        {
          icon: CampaignSkillIcons.army,
          iconType: SkillIconTypes.campaign,
          description: 'Horde recruitment capacity: +3',
          goodEffect: true,
        },
      ],
    },
  },
};

export default gatheringOfBeasts;
