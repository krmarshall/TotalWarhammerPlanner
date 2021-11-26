import { SkillIconTypes } from '../../../../types/enums/SkillIconEnums';
import { BeastsSpellIcons, SpellIconTypes } from '../../../../types/enums/SpellIconEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const wildHeart: SkillInterface = {
  name: 'Wild Heart',
  icon: BeastsSpellIcons.wildHeart,
  iconSpellLore: SpellIconTypes.beasts,
  iconType: SkillIconTypes.spell,
  requiresSkill: 'wyssansWildform',
  boxed: true,
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: BeastsSpellIcons.wildHeart,
          iconSpellLore: SpellIconTypes.beasts,
          iconType: SkillIconTypes.spell,
          description: 'Passive ability: "Wild Heart"',
          goodEffect: true,
        },
      ],
    },
  },
  extraTooltip: {
    title: 'Wild Heart',
    subTitle: 'Lore attribute',
    type: 'Augment of the Winds',
    duration: 'Constant',
    target: 'Self',
    activeIf: 'Casting',
    effects: [
      {
        description: 'Wild Heart (29 seconds)',
        goodEffect: true,
      },
      {
        description: '+ Increase to power reserves',
        goodEffect: true,
      },
      {
        description: '+ Improved power recharge rate',
        goodEffect: true,
      },
    ],
  },
};

export default wildHeart;
