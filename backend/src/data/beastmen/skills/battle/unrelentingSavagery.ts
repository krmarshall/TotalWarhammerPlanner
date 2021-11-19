import { BattleSkillIcons, MiscSkillIcons, SkillIconTypes } from '@projectEnums/SkillIconEnums';
import SkillInterface from '@projectInterfaces/SkillInterfaces';

const unrelentingSavagery: SkillInterface = {
  name: 'Unrelenting Savagery',
  icon: BattleSkillIcons.attack,
  iconType: SkillIconTypes.battle,
  requiresSkill: 'callOfViolence',
  boxed: true,
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: MiscSkillIcons.resistancePhysical,
          iconType: SkillIconTypes.misc,
          description:
            'Physical resistance: 15% for Ungor Spearmen Herd, Ungor Herd, and Bestigor Herd units \n (Rank 7 and above) \n (Lords army)',
          goodEffect: true,
        },
        {
          icon: BattleSkillIcons.attack,
          iconType: SkillIconTypes.battle,
          description:
            'Melee attack: +5 for Ungor Spearmen Herd, Ungor Herd, and Bestigor Herd units \n (Rank 7 and above) \n (Lords army)',
          goodEffect: true,
        },
        {
          icon: BattleSkillIcons.defence,
          iconType: SkillIconTypes.battle,
          description:
            'Melee defence: +5 for Ungor Spearmen Herd, Ungor Herd, and Bestigor Herd units \n (Rank 7 and above) \n (Lords army)',
          goodEffect: true,
        },
      ],
    },
  },
};

export default unrelentingSavagery;
