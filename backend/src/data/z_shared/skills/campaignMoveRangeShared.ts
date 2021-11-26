import { CampaignSkillIcons, SkillIconTypes } from '../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../types/interfaces/SkillInterfaces';

const campaignMoveRangeShared: SkillInterface = {
  name: 'Campaign Move Range Shared',
  icon: CampaignSkillIcons.movement,
  iconType: SkillIconTypes.campaign,
  rightArrow: true,
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: CampaignSkillIcons.movement,
          iconType: SkillIconTypes.campaign,
          description: 'Campaign movement range: +10%',
          goodEffect: true,
        },
      ],
    },
  },
};

export default campaignMoveRangeShared;
