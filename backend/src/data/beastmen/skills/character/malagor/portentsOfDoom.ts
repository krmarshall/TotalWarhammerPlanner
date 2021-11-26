import { CampaignSkillIcons, MiscSkillIcons, SkillIconTypes } from '../../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../../types/interfaces/SkillInterfaces';

const portentsOfDoom: SkillInterface = {
  name: 'Portents of Doom',
  icon: MiscSkillIcons.causesFear,
  iconType: SkillIconTypes.misc,
  boxed: true,
  requiresSkill: 'somethingWickedThisWayComes',
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: CampaignSkillIcons.publicOrder,
          iconType: SkillIconTypes.campaign,
          description: 'Public order: -10\n(local enemy province)',
          goodEffect: true,
        },
        {
          icon: MiscSkillIcons.causesTerror,
          iconType: SkillIconTypes.misc,
          description: 'Attribute: Causes Terror',
          goodEffect: true,
        },
      ],
    },
  },
};

export default portentsOfDoom;
