import {
  BattleSkillIcons,
  CampaignSkillIcons,
  CharacterSkillIcons,
  SkillIconTypes,
} from '../../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../../types/interfaces/SkillInterfaces';

const bestialCunning: SkillInterface = {
  name: 'Bestial Cunning',
  icon: CharacterSkillIcons.subterfuge,
  iconType: SkillIconTypes.character,
  rightArrow: true,
  ranks: {
    rank1: {
      requiresLevel: 12,
      skillEffects: [
        {
          icon: BattleSkillIcons.attack,
          iconType: SkillIconTypes.battle,
          description: 'Melee attack: +4 during ambushes\n(Lords Army)',
          goodEffect: true,
        },
        {
          icon: BattleSkillIcons.defence,
          iconType: SkillIconTypes.battle,
          description: 'Melee defence: +4 during ambushes\n(Lords Army)',
          goodEffect: true,
        },
        {
          icon: CampaignSkillIcons.ambush,
          iconType: SkillIconTypes.campaign,
          description: 'Ambush success chance: +15%\n(Lords Army)',
          goodEffect: true,
        },
      ],
    },
  },
};

export default bestialCunning;
