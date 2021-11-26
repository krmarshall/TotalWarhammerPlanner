import { CharacterSkillIcons, SkillIconTypes } from '../../../../types/enums/SkillIconEnums';
import { ShadowsSpellIcons, SpellIconTypes } from '../../../../types/enums/SpellIconEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const smokeAndMirrors: SkillInterface = {
  name: 'Smoke & Mirrors',
  icon: ShadowsSpellIcons.smokeAndMirrors,
  iconSpellLore: SpellIconTypes.shadows,
  iconType: SkillIconTypes.spell,
  requiresSkill: 'melkothsMystifyingMiasma',
  boxed: true,
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: ShadowsSpellIcons.smokeAndMirrors,
          iconSpellLore: SpellIconTypes.shadows,
          iconType: SkillIconTypes.spell,
          description: 'Passive ability: "Smoke & Mirrors"',
          goodEffect: true,
        },
      ],
    },
  },
  extraTooltip: {
    title: 'Smoke & Mirrors',
    subTitle: 'Lore attribute',
    type: 'Augment (Area)',
    duration: 'Constant',
    target: 'Self\nAffects allies in range',
    activeIf: 'Casting',
    effectRange: 'Map-wide',
    effects: [
      {
        description: 'Smoke & Mirrors (24 seconds)',
        goodEffect: true,
      },
      {
        icon: CharacterSkillIcons.speed,
        iconType: SkillIconTypes.character,
        description: '+10% speed',
        goodEffect: true,
      },
    ],
  },
};

export default smokeAndMirrors;
