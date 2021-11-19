import { CampaignSkillIcons, SkillIconTypes } from '../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const ruination: SkillInterface = {
  name: 'Ruination',
  icon: CampaignSkillIcons.siegeAttack,
  iconType: SkillIconTypes.campaign,
  boxed: true,
  requiresSkill: 'gargantuanHooves',
  rightArrow: true,
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: CampaignSkillIcons.siegeAttack,
          iconType: SkillIconTypes.campaign,
          description: 'Enemy siege holdout time: -1 (minimum 1 turn)',
          goodEffect: true,
        },
      ],
    },
    rank2: {
      skillEffects: [
        {
          icon: CampaignSkillIcons.disaster,
          iconType: SkillIconTypes.campaign,
          description: 'Attrition suffered by defender: +10% when laying siege (local region)',
          goodEffect: true,
        },
        {
          icon: CampaignSkillIcons.siegeAttack,
          iconType: SkillIconTypes.campaign,
          description: 'Enemy siege holdout time: -2 (minimum 1 turn)',
          goodEffect: true,
        },
      ],
    },
    rank3: {
      skillEffects: [
        {
          icon: CampaignSkillIcons.disaster,
          iconType: SkillIconTypes.campaign,
          description: 'Attrition suffered by defender: +15% when laying siege (local region)',
          goodEffect: true,
        },
        {
          icon: CampaignSkillIcons.siegeAttack,
          iconType: SkillIconTypes.campaign,
          description: 'Enemy siege holdout time: -3 (minimum 1 turn)',
          goodEffect: true,
        },
      ],
    },
  },
};

export default ruination;
