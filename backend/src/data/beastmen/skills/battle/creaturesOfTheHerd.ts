import { BattleSkillIcons, MiscSkillIcons, SkillIconTypes } from '../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const creaturesOfTheHerd: SkillInterface = {
  name: 'Creatures of the Herd',
  icon: BattleSkillIcons.speed,
  iconType: SkillIconTypes.battle,
  requiresSkill: 'callOfViolence',
  boxed: true,
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: MiscSkillIcons.resistanceMissile,
          iconType: SkillIconTypes.misc,
          description:
            'Missile resistance: 15% for Centigors, Centigors (Great Weapons), Razorgor Herd, Razorgor Chariot, Tuskgor Chariot, Tuskgor Chariot, Chaos Warhounds, and Harpies units \n (Rank 7 and above) \n (Lords army)',
          goodEffect: true,
        },
        {
          icon: BattleSkillIcons.speed,
          iconType: SkillIconTypes.battle,
          description:
            'Speed: +10% for Centigors, Centigors (Great Weapons), Razorgor Herd, Razorgor Chariot, Tuskgor Chariot, Tuskgor Chariot, Chaos Warhounds, and Harpies units \n (Rank 7 and above) \n (Lords army)',
          goodEffect: true,
        },
        {
          icon: BattleSkillIcons.charge,
          iconType: SkillIconTypes.battle,
          description:
            'Charge bonus: +12 for Centigors, Centigors (Great Weapons), Razorgor Herd, Razorgor Chariot, Tuskgor Chariot, Tuskgor Chariot, Chaos Warhounds, and Harpies units \n (Rank 7 and above) \n (Lords army)',
          goodEffect: true,
        },
      ],
    },
  },
};

export default creaturesOfTheHerd;
