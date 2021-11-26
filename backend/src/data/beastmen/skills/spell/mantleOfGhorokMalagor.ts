import { CharacterSkillIcons, MiscSkillIcons, SkillIconTypes } from '../../../../types/enums/SkillIconEnums';
import { SpellIconTypes, WildSpellIcons } from '../../../../types/enums/SpellIconEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const mantleOfGhorokMalagor: SkillInterface = {
  name: 'Mantle Of Ghorok',
  icon: WildSpellIcons.mantleOfGhorok,
  iconSpellLore: SpellIconTypes.wild,
  iconType: SkillIconTypes.spell,
  boxed: true,
  requiresSkill: 'flockOfDoomMalagor',
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: WildSpellIcons.mantleOfGhorok,
          iconSpellLore: SpellIconTypes.wild,
          iconType: SkillIconTypes.spell,
          description: 'Spell: "Mantle of Ghorok"',
          goodEffect: true,
        },
        {
          icon: WildSpellIcons.mantleOfGhorok,
          iconSpellLore: SpellIconTypes.wild,
          iconType: SkillIconTypes.spell,
          description: 'Overcast Spell: "Mantle of Ghorok Upgraded"',
          goodEffect: true,
        },
        {
          icon: WildSpellIcons.mantleOfGhorok,
          iconSpellLore: SpellIconTypes.wild,
          iconType: SkillIconTypes.spell,
          description: 'Cooldown: -30% to "Mantle of Ghorok"',
          goodEffect: true,
        },
      ],
    },
    rank2: {
      skillEffects: [
        {
          icon: WildSpellIcons.mantleOfGhorok,
          iconSpellLore: SpellIconTypes.wild,
          iconType: SkillIconTypes.spell,
          description: 'Overcast Spell: "Mantle of Ghorok Upgraded"',
          goodEffect: true,
        },
        {
          icon: WildSpellIcons.mantleOfGhorok,
          iconSpellLore: SpellIconTypes.wild,
          iconType: SkillIconTypes.spell,
          description: 'Cooldown: -50% to "Mantle of Ghorok"',
          goodEffect: true,
        },
        {
          icon: WildSpellIcons.mantleOfGhorok,
          iconSpellLore: SpellIconTypes.wild,
          iconType: SkillIconTypes.spell,
          description: 'Winds of Magic cost: -2 for "Mantle of Ghorok"',
          goodEffect: true,
        },
        {
          icon: WildSpellIcons.mantleOfGhorok,
          iconSpellLore: SpellIconTypes.wild,
          iconType: SkillIconTypes.spell,
          description: 'Winds of Magic cost: -3 for "Mantle of Ghorok Upgraded"',
          goodEffect: true,
        },
        {
          icon: WildSpellIcons.mantleOfGhorok,
          iconSpellLore: SpellIconTypes.wild,
          iconType: SkillIconTypes.spell,
          description: 'Miscast base chance: -15% for "Mantle of Ghorok Upgraded"',
          goodEffect: true,
        },
      ],
    },
  },
  extraTooltip: {
    title: 'Mantle of Ghorok',
    subTitle: 'Spell',
    windsCost: 12,
    cooldown: 47,
    type: 'Augment',
    duration: '26 seconds',
    target: 'Self, Ally\n200m',
    effects: [
      {
        icon: CharacterSkillIcons.baseDamage,
        iconType: SkillIconTypes.character,
        description: '+50% Base Weapon Damage',
        goodEffect: true,
      },
      {
        icon: CharacterSkillIcons.attack,
        iconType: SkillIconTypes.character,
        description: '+40 Melee Attack',
        goodEffect: true,
      },
      {
        icon: MiscSkillIcons.modifierArmourPiercing,
        iconType: SkillIconTypes.character,
        description: '+50% Armour-Piercing Weapon Damage',
        goodEffect: true,
      },
      {
        icon: CharacterSkillIcons.armour,
        iconType: SkillIconTypes.character,
        description: '-30 Armour',
        goodEffect: false,
      },
    ],
  },
};

export default mantleOfGhorokMalagor;
