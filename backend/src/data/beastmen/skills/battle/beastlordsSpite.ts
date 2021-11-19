import { BattleSkillIcons, SkillIconTypes } from '../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const beastlordsSpite: SkillInterface = {
  name: "Beastlord's Spite",
  icon: BattleSkillIcons.ammo,
  iconType: SkillIconTypes.battle,
  requiresSkill: 'presenceOfMorrslieb',
  boxed: true,
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: BattleSkillIcons.ammo,
          iconType: SkillIconTypes.battle,
          description: 'Ammunition: +10% for Ungor Raiders, Centigors (Throwing Axes), and Cygor units \n (Lords army)',
          goodEffect: true,
        },
      ],
    },
    rank2: {
      skillEffects: [
        {
          icon: BattleSkillIcons.speed,
          iconType: SkillIconTypes.battle,
          description: 'Speed: +6% for Ungor Raiders, Centigors (Throwing Axes), and Cygor units \n (Lords army)',
          goodEffect: true,
        },
        {
          icon: BattleSkillIcons.ammo,
          iconType: SkillIconTypes.battle,
          description: 'Ammunition: +15% for Ungor Raiders, Centigors (Throwing Axes), and Cygor units \n (Lords army)',
          goodEffect: true,
        },
        {
          icon: BattleSkillIcons.reload,
          iconType: SkillIconTypes.battle,
          description:
            'Reload time reduction: +5% for Ungor Raiders, Centigors (Throwing Axes), and Cygor units \n (Lords army)',
          goodEffect: true,
        },
      ],
    },
    rank3: {
      skillEffects: [
        {
          icon: BattleSkillIcons.speed,
          iconType: SkillIconTypes.battle,
          description: 'Speed: +12% for Ungor Raiders, Centigors (Throwing Axes), and Cygor units \n (Lords army)',
          goodEffect: true,
        },
        {
          icon: BattleSkillIcons.ammo,
          iconType: SkillIconTypes.battle,
          description: 'Ammunition: +20% for Ungor Raiders, Centigors (Throwing Axes), and Cygor units \n (Lords army)',
          goodEffect: true,
        },
        {
          icon: BattleSkillIcons.reload,
          iconType: SkillIconTypes.battle,
          description:
            'Reload time reduction: +10% for Ungor Raiders, Centigors (Throwing Axes), and Cygor units \n (Lords army)',
          goodEffect: true,
        },
      ],
    },
  },
};

export default beastlordsSpite;
