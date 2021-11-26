import { CharacterSkillIcons, SkillIconTypes } from '../../../../types/enums/SkillIconEnums';
import { DeathSpellIcons, SpellIconTypes } from '../../../../types/enums/SpellIconEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const doomAndDarknessMalagor: SkillInterface = {
  name: 'Doom & Darkness',
  icon: DeathSpellIcons.doomAndDarkness,
  iconSpellLore: SpellIconTypes.death,
  iconType: SkillIconTypes.spell,
  boxed: true,
  requiresSkill: 'flockOfDoomMalagor',
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: DeathSpellIcons.doomAndDarkness,
          iconSpellLore: SpellIconTypes.death,
          iconType: SkillIconTypes.spell,
          description: 'Spell: "Doom & Darkness"',
          goodEffect: true,
        },
        {
          icon: DeathSpellIcons.doomAndDarkness,
          iconSpellLore: SpellIconTypes.death,
          iconType: SkillIconTypes.spell,
          description: 'Overcast spell: "Doom & Darkness Upgraded"',
          goodEffect: true,
        },
        {
          icon: DeathSpellIcons.doomAndDarkness,
          iconSpellLore: SpellIconTypes.death,
          iconType: SkillIconTypes.spell,
          description: 'Cooldown: -30% to "Doom & Darkness"',
          goodEffect: true,
        },
      ],
    },
    rank2: {
      skillEffects: [
        {
          icon: DeathSpellIcons.doomAndDarkness,
          iconSpellLore: SpellIconTypes.death,
          iconType: SkillIconTypes.spell,
          description: 'Overcast spell: "Doom & Darkness Upgraded"',
          goodEffect: true,
        },
        {
          icon: DeathSpellIcons.doomAndDarkness,
          iconSpellLore: SpellIconTypes.death,
          iconType: SkillIconTypes.spell,
          description: 'Cooldown: -50% to "Doom & Darkness"',
          goodEffect: true,
        },
        {
          icon: DeathSpellIcons.doomAndDarkness,
          iconSpellLore: SpellIconTypes.death,
          iconType: SkillIconTypes.spell,
          description: 'Winds of Magic cost: -1 for "Doom & Darkness"',
          goodEffect: true,
        },
        {
          icon: DeathSpellIcons.doomAndDarkness,
          iconSpellLore: SpellIconTypes.death,
          iconType: SkillIconTypes.spell,
          description: 'Winds of Magic cost: -2 for "Doom & Darkness Upgraded"',
          goodEffect: true,
        },
        {
          icon: DeathSpellIcons.doomAndDarkness,
          iconSpellLore: SpellIconTypes.death,
          iconType: SkillIconTypes.spell,
          description: 'Miscast base chance: -15% for "Doom & Darkness Upgraded"',
          goodEffect: true,
        },
      ],
    },
  },
  extraTooltip: {
    title: 'Doom & Darkness',
    subTitle: 'Spell',
    windsCost: 7,
    cooldown: 43,
    type: 'Hex',
    duration: '36 seconds',
    target: 'Enemy\n200m',
    effects: [
      {
        icon: CharacterSkillIcons.morale,
        iconType: SkillIconTypes.character,
        description: '-16 Leadership',
        goodEffect: false,
      },
    ],
  },
};

export default doomAndDarknessMalagor;
