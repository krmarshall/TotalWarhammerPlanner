import { SkillIconTypes } from '../../../../types/enums/SkillIconEnums';
import { SpellIconTypes, WildSpellIcons } from '../../../../types/enums/SpellIconEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const savageDominionMalagor: SkillInterface = {
  name: 'Savage Dominion',
  icon: WildSpellIcons.savageDominion,
  iconSpellLore: SpellIconTypes.wild,
  iconType: SkillIconTypes.spell,
  boxed: true,
  requiresSkill: 'flockOfDoomMalagor',
  rightArrow: true,
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: WildSpellIcons.savageDominion,
          iconSpellLore: SpellIconTypes.wild,
          iconType: SkillIconTypes.spell,
          description: 'Spell: "Savage Dominion"',
          goodEffect: true,
        },
        {
          icon: WildSpellIcons.savageDominion,
          iconSpellLore: SpellIconTypes.wild,
          iconType: SkillIconTypes.spell,
          description: 'Winds of Magic cost: -5 for "Savage Dominion"',
          goodEffect: true,
        },
      ],
    },
  },
  extraTooltip: {
    title: 'Savage Dominion',
    subTitle: 'Spell',
    windsCost: 18,
    cooldown: 48,
    charges: 2,
    type: 'Augment',
    target: 'Ground\n60m',
    cannotUseIf: 'Climbing',
    cannotTargetIf: 'Climbing or manning equipment or on a platform',
    effects: [
      {
        description: '+ Summons a Cygor',
        goodEffect: true,
      },
      {
        description: '- Summoned units degrade over time',
        goodEffect: false,
      },
    ],
  },
};

export default savageDominionMalagor;
