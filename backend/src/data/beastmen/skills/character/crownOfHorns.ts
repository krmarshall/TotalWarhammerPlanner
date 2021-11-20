import { BattleSkillIcons, SkillIconTypes } from '../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const crownOfHorns: SkillInterface = {
  name: 'Crown of Horns',
  icon: BattleSkillIcons.damage,
  iconType: SkillIconTypes.battle,
  requiresSkill: 'manBane',
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: BattleSkillIcons.damage,
          iconType: SkillIconTypes.battle,
          description: 'Weapon strength: +10%\n(Lords army)',
          goodEffect: true,
        },
      ],
    },
  },
};

export default crownOfHorns;
