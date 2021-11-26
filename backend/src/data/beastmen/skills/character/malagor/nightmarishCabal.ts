import { CampaignSkillIcons, CharacterSkillIcons, SkillIconTypes } from '../../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../../types/interfaces/SkillInterfaces';

const nightmarishCabal: SkillInterface = {
  name: 'Nightmarish Cabal',
  icon: CharacterSkillIcons.agent,
  iconType: SkillIconTypes.character,
  boxed: true,
  requiresSkill: 'somethingWickedThisWayComes',
  rightArrow: true,
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: CharacterSkillIcons.magic,
          iconType: SkillIconTypes.character,
          description: 'Winds of Magic cost: -1 for all spells\n(all characters)',
          goodEffect: true,
        },
        {
          icon: CampaignSkillIcons.militarySpending,
          iconType: SkillIconTypes.campaign,
          description: 'Hero action cost: -25% for Bray-Shamans\n(all characters)',
          goodEffect: true,
        },
        {
          icon: CampaignSkillIcons.magic,
          iconType: SkillIconTypes.campaign,
          description: 'Hero action success chance: +10% for Bray-Shamans\n(all characters)',
          goodEffect: true,
        },
      ],
    },
  },
};

export default nightmarishCabal;
