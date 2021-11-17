import { BattleSkills, SkillTypes } from '@projectEnums/SkillIconEnums';
import SkillInterface from '@projectInterfaces/SkillInterfaces';

const fuelledByBlood: SkillInterface = {
  name: 'Fuelled By Blood',
  icon: BattleSkills.speed,
  iconType: SkillTypes.battle,
  ranks: {
    rank1: {
      requiresLevel: 5,
      skillEffects: [
        {
          icon: BattleSkills.vigour,
          iconType: SkillTypes.battle,
          description: 'Vigour loss reduction: -25% \n (Lords army)',
          goodEffect: true,
        },
        {
          icon: BattleSkills.speed,
          iconType: SkillTypes.battle,
          description: 'Speed: +5% for all units \n (Lords army)',
          goodEffect: true,
        },
      ],
    },
  },
};

export default fuelledByBlood;
