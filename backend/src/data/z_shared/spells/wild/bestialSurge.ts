import { BattleSkillIcons, CharacterSkillIcons, SkillIconTypes } from '../../../../types/enums/SkillIconEnums';
import { SpellIconTypes, WildSpellIcons } from '../../../../types/enums/SpellIconEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const bestialSurge: SkillInterface = {
  name: 'Bestial Surge',
  icon: WildSpellIcons.bestialSurge,
  iconSpellLore: SpellIconTypes.wild,
  iconType: SkillIconTypes.spell,
  boxed: true,
  requiresSkill: 'devolve',
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: WildSpellIcons.bestialSurge,
          iconSpellLore: SpellIconTypes.wild,
          iconType: SkillIconTypes.spell,
          description: 'Passive ability: "Bestial Surge"',
          goodEffect: true,
        },
      ],
    },
  },
  extraTooltip: {
    title: 'Bestial Surge',
    subTitle: 'Lore attribute',
    type: 'Augment (Area)',
    duration: 'Constant',
    target: 'Self\nAffects allies in range',
    activeIf: 'Casting',
    effectRange: 'Map-wide',
    effects: [
      {
        description: 'Bestial Surge (9 seconds)',
        goodEffect: true,
      },
      {
        icon: CharacterSkillIcons.charge,
        iconType: SkillIconTypes.character,
        description: '+15% Charge Bonus',
        goodEffect: true,
      },
      {
        icon: BattleSkillIcons.vigour,
        iconType: SkillIconTypes.battle,
        description: '+5% Vigour',
        goodEffect: true,
      },
    ],
  },
};

export default bestialSurge;
