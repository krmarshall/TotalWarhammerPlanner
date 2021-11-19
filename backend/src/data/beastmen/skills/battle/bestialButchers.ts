import { BattleSkillIcons, MiscSkillIcons, SkillIconTypes } from '../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const bestialButchers: SkillInterface = {
  name: 'Bestial Butchers',
  icon: BattleSkillIcons.damage,
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
            'Missile resistance: 15% for Chaos Spawn, Minotaurs, Giant, Jabberslythe, and Ghorgon units \n (Rank 7 and above) \n (Lords army)',
          goodEffect: true,
        },
        {
          icon: BattleSkillIcons.attack,
          iconType: SkillIconTypes.battle,
          description:
            'Melee attack: +5 for Chaos Spawn, Minotaurs, Giant, Jabberslythe, and Ghorgon units \n (Rank 7 and above) \n (Lords army)',
          goodEffect: true,
        },
        {
          icon: BattleSkillIcons.damage,
          iconType: SkillIconTypes.battle,
          description:
            'Weapon strength: +12% for Chaos Spawn, Minotaurs, Giant, Jabberslythe, and Ghorgon units \n (Rank 7 and above) \n (Lords army)',
          goodEffect: true,
        },
      ],
    },
  },
};

export default bestialButchers;
