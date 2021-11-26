import { SkillIconTypes } from '../../../../types/enums/SkillIconEnums';
import { ShadowsSpellIcons, SpellIconTypes } from '../../../../types/enums/SpellIconEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const thePenumbralPendulumMalagor: SkillInterface = {
  name: 'The Penumbral Pendulum',
  icon: ShadowsSpellIcons.thePenumbralPendulum,
  iconSpellLore: SpellIconTypes.shadows,
  iconType: SkillIconTypes.spell,
  boxed: true,
  requiresSkill: 'flockOfDoomMalagor',
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: ShadowsSpellIcons.thePenumbralPendulum,
          iconSpellLore: SpellIconTypes.shadows,
          iconType: SkillIconTypes.spell,
          description: 'Spell: "The Penumbral Pendulum"',
          goodEffect: true,
        },
        {
          icon: ShadowsSpellIcons.thePenumbralPendulum,
          iconSpellLore: SpellIconTypes.shadows,
          iconType: SkillIconTypes.spell,
          description: 'Overcast spell: "The Penumbral Pendulum Upgraded"',
          goodEffect: true,
        },
        {
          icon: ShadowsSpellIcons.thePenumbralPendulum,
          iconSpellLore: SpellIconTypes.shadows,
          iconType: SkillIconTypes.spell,
          description: 'Cooldown: -30% to "The Penumbral Pendulum"',
          goodEffect: true,
        },
      ],
    },
    rank2: {
      skillEffects: [
        {
          icon: ShadowsSpellIcons.thePenumbralPendulum,
          iconSpellLore: SpellIconTypes.shadows,
          iconType: SkillIconTypes.spell,
          description: 'Overcast spell: "The Penumbral Pendulum Upgraded"',
          goodEffect: true,
        },
        {
          icon: ShadowsSpellIcons.thePenumbralPendulum,
          iconSpellLore: SpellIconTypes.shadows,
          iconType: SkillIconTypes.spell,
          description: 'Cooldown: -50% to "The Penumbral Pendulum"',
          goodEffect: true,
        },
        {
          icon: ShadowsSpellIcons.thePenumbralPendulum,
          iconSpellLore: SpellIconTypes.shadows,
          iconType: SkillIconTypes.spell,
          description: 'Winds of Magic cost: -2 for "The Penumbral Pendulum"',
          goodEffect: true,
        },
        {
          icon: ShadowsSpellIcons.thePenumbralPendulum,
          iconSpellLore: SpellIconTypes.shadows,
          iconType: SkillIconTypes.spell,
          description: 'Winds of Magic cost: -3 for "The Penumbral Pendulum Upgraded"',
          goodEffect: true,
        },
        {
          icon: ShadowsSpellIcons.thePenumbralPendulum,
          iconSpellLore: SpellIconTypes.shadows,
          iconType: SkillIconTypes.spell,
          description: 'Miscast base chance: -15% for "The Penumbral Pendulum Upgraded"',
          goodEffect: true,
        },
      ],
    },
  },
  extraTooltip: {
    title: 'The Penumbral Pendulum',
    subTitle: 'Spell',
    windsCost: 13,
    cooldown: 40,
    type: 'Wind',
    duration: '3 seconds',
    target: 'Ground\n200m',
    cannotTargetIf: 'Flying, On a wall',
    effects: [
      {
        description: 'Causes massive magical damage',
        goodEffect: true,
      },
      {
        description: 'Small, forward-moving area of effect',
        goodEffect: true,
      },
      {
        description: 'Strong vs multiple units',
        goodEffect: true,
      },
      {
        description: 'Weak vs a single combatant',
        goodEffect: false,
      },
    ],
  },
};

export default thePenumbralPendulumMalagor;
