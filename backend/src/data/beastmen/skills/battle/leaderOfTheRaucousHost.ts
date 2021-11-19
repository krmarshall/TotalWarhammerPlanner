import { BattleSkillIcons, SkillIconTypes } from '../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const leaderOfTheRaucousHost: SkillInterface = {
  name: 'Leader of the Raucous Host',
  icon: BattleSkillIcons.charge,
  iconType: SkillIconTypes.battle,
  boxed: true,
  requiresSkill: 'presenceOfMorrslieb',
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: BattleSkillIcons.charge,
          iconType: SkillIconTypes.battle,
          description:
            'Charge bonus: +6 for Centigors, Centigors (Great Weapons), Tuskgor Chariots, and Razorgor Chariot units \n (Lords army)',
          goodEffect: true,
        },
      ],
    },
    rank2: {
      skillEffects: [
        {
          icon: BattleSkillIcons.speed,
          iconType: SkillIconTypes.battle,
          description:
            'Speed: +6% for Centigors, Centigors (Great Weapons), Tuskgor Chariots, and Razorgor Chariot units \n (Lords army)',
          goodEffect: true,
        },
        {
          icon: BattleSkillIcons.damage,
          iconType: SkillIconTypes.battle,
          description:
            'Weapon strength: +6% for Centigors, Centigors (Great Weapons), Tuskgor Chariots, and Razorgor Chariot units \n (Lords army)',
          goodEffect: true,
        },
        {
          icon: BattleSkillIcons.charge,
          iconType: SkillIconTypes.battle,
          description:
            'Charge bonus: +9 for Centigors, Centigors (Great Weapons), Tuskgor Chariots, and Razorgor Chariot units \n (Lords army)',
          goodEffect: true,
        },
      ],
    },
    rank3: {
      skillEffects: [
        {
          icon: BattleSkillIcons.speed,
          iconType: SkillIconTypes.battle,
          description:
            'Speed: +12% for Centigors, Centigors (Great Weapons), Tuskgor Chariots, and Razorgor Chariot units \n (Lords army)',
          goodEffect: true,
        },
        {
          icon: BattleSkillIcons.damage,
          iconType: SkillIconTypes.battle,
          description:
            'Weapon strength: +12% for Centigors, Centigors (Great Weapons), Tuskgor Chariots, and Razorgor Chariot units \n (Lords army)',
          goodEffect: true,
        },
        {
          icon: BattleSkillIcons.charge,
          iconType: SkillIconTypes.battle,
          description:
            'Charge bonus: +12 for Centigors, Centigors (Great Weapons), Tuskgor Chariots, and Razorgor Chariot units \n (Lords army)',
          goodEffect: true,
        },
      ],
    },
  },
};

export default leaderOfTheRaucousHost;
