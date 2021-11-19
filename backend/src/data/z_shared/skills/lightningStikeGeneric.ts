import { CampaignSkillIcons, SkillIconTypes } from '../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../types/interfaces/SkillInterfaces';

const lightningStrikeGeneric: SkillInterface = {
  name: 'Lightning Strike Generic',
  icon: CampaignSkillIcons.subterfuge,
  iconType: SkillIconTypes.campaign,
  boxed: true,
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: CampaignSkillIcons.subterfuge,
          iconType: SkillIconTypes.campaign,
          description: 'Enables lightning strike battles when reinforcements are present',
          goodEffect: true,
        },
      ],
    },
  },
};

export default lightningStrikeGeneric;
