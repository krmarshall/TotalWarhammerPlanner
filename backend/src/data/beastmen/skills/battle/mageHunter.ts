import { BattleSkillIcons, MiscSkillIcons, SkillIconTypes } from '@projectEnums/SkillIconEnums';
import SkillInterface from '@projectInterfaces/SkillInterfaces';

const mageHunter: SkillInterface = {
  name: 'Mage Hunter',
  icon: BattleSkillIcons.rangedDamage,
  iconType: SkillIconTypes.battle,
  requiresSkill: 'callOfViolence',
  boxed: true,
  rightArrow: true,
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: BattleSkillIcons.reload,
          iconType: SkillIconTypes.battle,
          description:
            'Reload time reduction: +10% for Ungor Raiders, Centigors (Throwing Axes), and Cygor units \n (Rank 7 and above) \n (Lords army)',
          goodEffect: true,
        },
        {
          icon: BattleSkillIcons.rangedDamage,
          iconType: SkillIconTypes.battle,
          description:
            'Missile strength: +12% for Ungor Raiders, Centigors (Throwing Axes), and Cygor units \n (Rank 7 and above) \n (Lords army)',
          goodEffect: true,
        },
        {
          icon: MiscSkillIcons.resistanceMagic,
          iconType: SkillIconTypes.battle,
          description:
            'Magic resistance: 15% for Ungor Raiders, Centigors (Throwing Axes), and Cygor units \n (Rank 7 and above) \n (Lords army)',
          goodEffect: true,
        },
      ],
    },
  },
};

export default mageHunter;
