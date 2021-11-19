import { BattleSkillIcons, SkillIconTypes } from '../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const beastlordsLash: SkillInterface = {
  name: "Beastlord's Lash",
  icon: BattleSkillIcons.charge,
  iconType: SkillIconTypes.battle,
  requiresSkill: 'presenceOfMorrslieb',
  boxed: true,
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: BattleSkillIcons.charge,
          iconType: SkillIconTypes.battle,
          description: 'Charge bonus: +6 for Chaos Warhounds, Razorgor Herd, and Harpies units \n (Lords army)',
          goodEffect: true,
        },
      ],
    },
    rank2: {
      skillEffects: [
        {
          icon: BattleSkillIcons.attack,
          iconType: SkillIconTypes.battle,
          description: 'Melee attack: +4 for Chaos Warhounds, Razorgor Herd, and Harpies units \n (Lords army)',
          goodEffect: true,
        },
        {
          icon: BattleSkillIcons.charge,
          iconType: SkillIconTypes.battle,
          description: 'Charge bonus: +9 for Chaos Warhounds, Razorgor Herd, and Harpies units \n (Lords army)',
          goodEffect: true,
        },
      ],
    },
    rank3: {
      skillEffects: [
        {
          icon: BattleSkillIcons.attack,
          iconType: SkillIconTypes.battle,
          description: 'Melee attack: +8 for Chaos Warhounds, Razorgor Herd, and Harpies units \n (Lords army)',
          goodEffect: true,
        },
        {
          icon: BattleSkillIcons.charge,
          iconType: SkillIconTypes.battle,
          description: 'Charge bonus: +12 for Chaos Warhounds, Razorgor Herd, and Harpies units \n (Lords army)',
          goodEffect: true,
        },
      ],
    },
  },
};

export default beastlordsLash;
