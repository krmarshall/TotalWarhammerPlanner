import { BattleSkillIcons, SkillIconTypes } from '@projectEnums/SkillIconEnums';
import SkillInterface from '@projectInterfaces/SkillInterfaces';

const fuelledByBlood: SkillInterface = {
  name: 'Fuelled By Blood',
  icon: BattleSkillIcons.speed,
  iconType: SkillIconTypes.battle,
  ranks: {
    rank1: {
      requiresLevel: 5,
      skillEffects: [
        {
          icon: BattleSkillIcons.vigour,
          iconType: SkillIconTypes.battle,
          description: 'Vigour loss reduction: -25% \n (Lords army)',
          goodEffect: true,
        },
        {
          icon: BattleSkillIcons.speed,
          iconType: SkillIconTypes.battle,
          description: 'Speed: +5% for all units \n (Lords army)',
          goodEffect: true,
        },
      ],
    },
  },
};

export default fuelledByBlood;
