import { BattleSkillIcons, SkillIconTypes } from '../../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../../types/interfaces/SkillInterfaces';

const hordesOfTheDrakwald: SkillInterface = {
  name: 'Hordes of the Drakwald',
  icon: BattleSkillIcons.attack,
  iconType: SkillIconTypes.battle,
  requiresSkill: 'bestialCunning',
  boxed: true,
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: BattleSkillIcons.attack,
          iconType: SkillIconTypes.battle,
          description: 'Melee attack: +6 for Ungor, Gor, and Bestigor units \n (Lords army)',
          goodEffect: true,
        },
        {
          icon: BattleSkillIcons.charge,
          iconType: SkillIconTypes.battle,
          description: 'Charge bonus: +6 for Ungor, Gor, and Bestigor units \n (Lords army)',
          goodEffect: true,
        },
        {
          icon: BattleSkillIcons.rangedDamage,
          iconType: SkillIconTypes.battle,
          description: 'Missile strength: +6 for Ungor Raiders units \n (Lords army)',
          goodEffect: true,
        },
      ],
    },
  },
};

export default hordesOfTheDrakwald;
