import { BattleSkillIcons, SkillIconTypes } from '../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const freakishMutations: SkillInterface = {
  name: 'Freakish Mutations',
  icon: BattleSkillIcons.damage,
  iconType: SkillIconTypes.battle,
  requiresSkill: 'presenceOfMorrslieb',
  boxed: true,
  rightArrow: true,
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: BattleSkillIcons.damage,
          iconType: SkillIconTypes.battle,
          description: 'Weapon strength: +6% for Chaos Spawn, Giant, Jabberslythe, and Ghorgon units \n (Lords army)',
          goodEffect: true,
        },
      ],
    },
    rank2: {
      skillEffects: [
        {
          icon: BattleSkillIcons.attack,
          iconType: SkillIconTypes.battle,
          description: 'Melee attack: +4 for Chaos Spawn, Giant, Jabberslythe, and Ghorgon units \n (Lords army)',
          goodEffect: true,
        },
        {
          icon: BattleSkillIcons.damage,
          iconType: SkillIconTypes.battle,
          description: 'Weapon strength: +9% for Chaos Spawn, Giant, Jabberslythe, and Ghorgon units \n (Lords army)',
          goodEffect: true,
        },
      ],
    },
    rank3: {
      skillEffects: [
        {
          icon: BattleSkillIcons.attack,
          iconType: SkillIconTypes.battle,
          description: 'Melee attack: +8 for Chaos Spawn, Giant, Jabberslythe, and Ghorgon units \n (Lords army)',
          goodEffect: true,
        },
        {
          icon: BattleSkillIcons.damage,
          iconType: SkillIconTypes.battle,
          description: 'Weapon strength: +12% for Chaos Spawn, Giant, Jabberslythe, and Ghorgon units \n (Lords army)',
          goodEffect: true,
        },
      ],
    },
  },
};

export default freakishMutations;
