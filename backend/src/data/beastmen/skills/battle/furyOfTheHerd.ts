import { BattleSkillIcons, SkillIconTypes } from '../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const furyOfTheHerd: SkillInterface = {
  name: 'Fury of the Herd',
  icon: BattleSkillIcons.morale,
  iconType: SkillIconTypes.battle,
  boxed: true,
  requiresSkill: 'presenceOfMorrslieb',
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: BattleSkillIcons.defence,
          iconType: SkillIconTypes.battle,
          description:
            'Melee defence: +4 for Ungor Spearmen Herd, Ungor Herd, Gor Herd, and Bestigor Herd units \n(Lords army)',
          goodEffect: true,
        },
      ],
    },
    rank2: {
      skillEffects: [
        {
          icon: BattleSkillIcons.morale,
          iconType: SkillIconTypes.battle,
          description:
            'Leadership: +4 for Ungor Spearmen Herd, Ungor Herd, Gor Herd, and Bestigor Herd units \n(Lords army)',
          goodEffect: true,
        },
        {
          icon: BattleSkillIcons.defence,
          iconType: SkillIconTypes.battle,
          description:
            'Melee defence: +6 for Ungor Spearmen Herd, Ungor Herd, Gor Herd, and Bestigor Herd units \n(Lords army)',
          goodEffect: true,
        },
      ],
    },
    rank3: {
      skillEffects: [
        {
          icon: BattleSkillIcons.morale,
          iconType: SkillIconTypes.battle,
          description:
            'Leadership: +8 for Ungor Spearmen Herd, Ungor Herd, Gor Herd, and Bestigor Herd units \n(Lords army)',
          goodEffect: true,
        },
        {
          icon: BattleSkillIcons.defence,
          iconType: SkillIconTypes.battle,
          description:
            'Melee defence: +8 for Ungor Spearmen Herd, Ungor Herd, Gor Herd, and Bestigor Herd units \n(Lords army)',
          goodEffect: true,
        },
      ],
    },
  },
};

export default furyOfTheHerd;
