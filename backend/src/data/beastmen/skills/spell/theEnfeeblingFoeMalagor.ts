import { CharacterSkillIcons, SkillIconTypes } from '../../../../types/enums/SkillIconEnums';
import { ShadowsSpellIcons, SpellIconTypes } from '../../../../types/enums/SpellIconEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const theEnfeeblingFoeMalagor: SkillInterface = {
  name: 'The Enfeebling Foe',
  icon: ShadowsSpellIcons.theEnfeeblingFoe,
  iconSpellLore: SpellIconTypes.shadows,
  iconType: SkillIconTypes.spell,
  boxed: true,
  requiresSkill: 'flockOfDoomMalagor',
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: ShadowsSpellIcons.theEnfeeblingFoe,
          iconSpellLore: SpellIconTypes.shadows,
          iconType: SkillIconTypes.spell,
          description: 'Overcast spell: "The Enfeebling Foe Upgraded"',
          goodEffect: true,
        },
        {
          icon: ShadowsSpellIcons.theEnfeeblingFoe,
          iconSpellLore: SpellIconTypes.shadows,
          iconType: SkillIconTypes.spell,
          description: 'Cooldown: -30% to "The Enfeebling Foe"',
          goodEffect: true,
        },
      ],
    },
    rank2: {
      skillEffects: [
        {
          icon: ShadowsSpellIcons.theEnfeeblingFoe,
          iconSpellLore: SpellIconTypes.shadows,
          iconType: SkillIconTypes.spell,
          description: 'Overcast spell: "The Enfeebling Foe Upgraded"',
          goodEffect: true,
        },
        {
          icon: ShadowsSpellIcons.theEnfeeblingFoe,
          iconSpellLore: SpellIconTypes.shadows,
          iconType: SkillIconTypes.spell,
          description: 'Cooldown: -50% to "The Enfeebling Foe"',
          goodEffect: true,
        },
        {
          icon: ShadowsSpellIcons.theEnfeeblingFoe,
          iconSpellLore: SpellIconTypes.shadows,
          iconType: SkillIconTypes.spell,
          description: 'Winds of Magic cost: -1 for "The Enfeebling Foe"',
          goodEffect: true,
        },
        {
          icon: ShadowsSpellIcons.theEnfeeblingFoe,
          iconSpellLore: SpellIconTypes.shadows,
          iconType: SkillIconTypes.spell,
          description: 'Winds of Magic cost: -2 for "The Enfeebling Foe Upgraded"',
          goodEffect: true,
        },
        {
          icon: ShadowsSpellIcons.theEnfeeblingFoe,
          iconSpellLore: SpellIconTypes.shadows,
          iconType: SkillIconTypes.spell,
          description: 'Miscast base chance: -15% for "The Enfeebling Foe Upgraded"',
          goodEffect: true,
        },
      ],
    },
  },
  extraTooltip: {
    title: 'The Enfeebling Foe',
    subTitle: 'Spell',
    windsCost: 6,
    cooldown: 30,
    type: 'Hex',
    duration: '17 seconds',
    target: 'Enemy\n200m',
    effects: [
      {
        icon: CharacterSkillIcons.attack,
        iconType: SkillIconTypes.character,
        description: '-24 Melee Attack',
        goodEffect: false,
      },
      {
        icon: CharacterSkillIcons.defence,
        iconType: SkillIconTypes.character,
        description: '-24 Melee Defence',
        goodEffect: false,
      },
    ],
  },
};

export default theEnfeeblingFoeMalagor;
