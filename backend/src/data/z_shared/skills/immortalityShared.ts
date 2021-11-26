import { CampaignSkillIcons, CharacterSkillIcons, SkillIconTypes } from '../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../types/interfaces/SkillInterfaces';

const immortalityShared: SkillInterface = {
  name: 'Immortality',
  icon: CharacterSkillIcons.woundTime,
  iconType: SkillIconTypes.character,
  ranks: {
    rank1: {
      requiresLevel: 20,
      skillEffects: [
        {
          icon: CampaignSkillIcons.woundTime,
          iconType: SkillIconTypes.campaign,
          description: 'When normally killed in action, this character will be wounded instead',
          goodEffect: true,
        },
      ],
    },
  },
};

export default immortalityShared;
