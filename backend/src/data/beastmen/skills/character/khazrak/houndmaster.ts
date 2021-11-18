import { BattleSkillIcons, SkillIconTypes } from '@projectEnums/SkillIconEnums';
import SkillInterface from '@projectInterfaces/SkillInterfaces';

const houndmaster: SkillInterface = {
  name: 'Houndmaster',
  icon: BattleSkillIcons.charge,
  iconType: SkillIconTypes.battle,
  requiresSkill: 'bestialCunning',
  boxed: true,
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: BattleSkillIcons.charge,
          iconType: SkillIconTypes.battle,
          description: 'Charge bonus: +10 for Chaos Warhounds, Razorgor Herd, and Harpies units \n (Lords Army)',
          goodEffect: true,
        },
        {
          icon: BattleSkillIcons.bonusVsInfantry,
          iconType: SkillIconTypes.battle,
          description: 'Bonus vs Infantry: +10 for Chaos Warhounds, Razorgor Herd, and Harpies units \n (Lords Army)',
          goodEffect: true,
        },
      ],
    },
  },
};

export default houndmaster;
