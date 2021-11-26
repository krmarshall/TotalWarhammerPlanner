import { SkillIconTypes } from '../../../../types/enums/SkillIconEnums';
import { BeastsSpellIcons, SpellIconTypes } from '../../../../types/enums/SpellIconEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const flockOfDoomMalagor: SkillInterface = {
  name: 'Flock Of Doom',
  icon: BeastsSpellIcons.flockOfDoom,
  iconSpellLore: SpellIconTypes.beasts,
  iconType: SkillIconTypes.spell,
  rightArrow: true,
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: BeastsSpellIcons.flockOfDoom,
          iconSpellLore: SpellIconTypes.beasts,
          iconType: SkillIconTypes.spell,
          description: 'Overcast spell: "Flock of Doom Upgraded"',
          goodEffect: true,
        },
        {
          icon: BeastsSpellIcons.flockOfDoom,
          iconSpellLore: SpellIconTypes.beasts,
          iconType: SkillIconTypes.spell,
          description: 'Cooldown: -30% to "Flock of Doom"',
          goodEffect: true,
        },
      ],
    },
    rank2: {
      skillEffects: [
        {
          icon: BeastsSpellIcons.flockOfDoom,
          iconSpellLore: SpellIconTypes.beasts,
          iconType: SkillIconTypes.spell,
          description: 'Overcast spell: "Flock of Doom Upgraded"',
          goodEffect: true,
        },
        {
          icon: BeastsSpellIcons.flockOfDoom,
          iconSpellLore: SpellIconTypes.beasts,
          iconType: SkillIconTypes.spell,
          description: 'Cooldown: -50% to "Flock of Doom"',
          goodEffect: true,
        },
        {
          icon: BeastsSpellIcons.flockOfDoom,
          iconSpellLore: SpellIconTypes.beasts,
          iconType: SkillIconTypes.spell,
          description: 'Winds of Magic cost: -1 for "Flock of Doom"',
          goodEffect: true,
        },
        {
          icon: BeastsSpellIcons.flockOfDoom,
          iconSpellLore: SpellIconTypes.beasts,
          iconType: SkillIconTypes.spell,
          description: 'Winds of Magic cost: -2 for "Flock of Doom Upgraded"',
          goodEffect: true,
        },
        {
          icon: BeastsSpellIcons.flockOfDoom,
          iconSpellLore: SpellIconTypes.beasts,
          iconType: SkillIconTypes.spell,
          description: 'Miscast base chance: -15% for "Flock of Doom Upgraded"',
          goodEffect: true,
        },
      ],
    },
  },
  extraTooltip: {
    title: 'Flock of Doom',
    subTitle: 'Spell',
    windsCost: 6,
    cooldown: 30,
    type: 'Direct Damage (Area)\nOnly acts on targets when in area',
    duration: '7 seconds',
    target: 'Ground, Enemy\nAffects enemies in range\n100m',
    effectRange: '30m',
    effects: [
      {
        description: '+ Causes damage to combatants',
        goodEffect: true,
      },
      {
        description: '+ Strong vs multiple combatants',
        goodEffect: true,
      },
      {
        description: '- High chance opponent will resist damage',
        goodEffect: false,
      },
      {
        description: '- Weak vs a single combatant',
        goodEffect: false,
      },
    ],
  },
};

export default flockOfDoomMalagor;
