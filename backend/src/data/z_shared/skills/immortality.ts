import { CampaignSkillIcons, CharacterSkillIcons, SkillIconTypes } from '@projectEnums/SkillIconEnums';
import SkillInterface from '@projectInterfaces/SkillInterfaces';

const immortality: SkillInterface = {
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

export default immortality;
