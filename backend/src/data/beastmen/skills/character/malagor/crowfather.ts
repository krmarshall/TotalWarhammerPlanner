import {
  CampaignSkillIcons,
  CharacterSkillIcons,
  MiscSkillIcons,
  SkillIconTypes,
} from '../../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../../types/interfaces/SkillInterfaces';

const crowfather: SkillInterface = {
  name: 'Crowfather',
  icon: CharacterSkillIcons.charge,
  iconType: SkillIconTypes.character,
  boxed: true,
  requiresSkill: 'somethingWickedThisWayComes',
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: CampaignSkillIcons.unitCapacity,
          iconType: SkillIconTypes.campaign,
          description: 'Unit capacity: +4 Harpies',
          goodEffect: true,
        },
        {
          icon: CharacterSkillIcons.speed,
          iconType: SkillIconTypes.character,
          description: 'Speed: +10%',
          goodEffect: true,
        },
        {
          icon: MiscSkillIcons.resistanceMissile,
          iconType: SkillIconTypes.misc,
          description: 'Missile resistance: 20%',
          goodEffect: true,
        },
      ],
    },
  },
};

export default crowfather;
