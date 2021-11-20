import { BattleSkillIcons, SkillIconTypes } from '../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const hoofedHeavyweights: SkillInterface = {
  name: 'Hoofed Heavyweights',
  icon: BattleSkillIcons.defence,
  iconType: SkillIconTypes.battle,
  requiresSkill: 'presenceOfMorrslieb',
  boxed: true,
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: BattleSkillIcons.defence,
          iconType: SkillIconTypes.battle,
          description: 'Melee defence: +4 for Minotaurs units\n(Lords army)',
          goodEffect: true,
        },
      ],
    },
    rank2: {
      skillEffects: [
        {
          icon: BattleSkillIcons.attack,
          iconType: SkillIconTypes.battle,
          description: 'Melee attack: +4 for Minotaurs units\n(Lords army)',
          goodEffect: true,
        },
        {
          icon: BattleSkillIcons.defence,
          iconType: SkillIconTypes.battle,
          description: 'Melee defence: +6 for Minotaurs units\n(Lords army)',
          goodEffect: true,
        },
      ],
    },
    rank3: {
      skillEffects: [
        {
          icon: BattleSkillIcons.attack,
          iconType: SkillIconTypes.battle,
          description: 'Melee attack: +8 for Minotaurs units\n(Lords army)',
          goodEffect: true,
        },
        {
          icon: BattleSkillIcons.defence,
          iconType: SkillIconTypes.battle,
          description: 'Melee defence: +8 for Minotaurs units\n(Lords army)',
          goodEffect: true,
        },
      ],
    },
  },
};

export default hoofedHeavyweights;
