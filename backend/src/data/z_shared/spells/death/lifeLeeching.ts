import { SkillIconTypes } from '../../../../types/enums/SkillIconEnums';
import { DeathSpellIcons, SpellIconTypes } from '../../../../types/enums/SpellIconEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const lifeLeeching: SkillInterface = {
  name: 'Life-Leeching',
  icon: DeathSpellIcons.lifeLeech,
  iconSpellLore: SpellIconTypes.death,
  iconType: SkillIconTypes.spell,
  requiresSkill: 'spiritLeech',
  boxed: true,
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: DeathSpellIcons.lifeLeech,
          iconSpellLore: SpellIconTypes.death,
          iconType: SkillIconTypes.spell,
          description: 'Passive ability: "Life-Leeching"',
          goodEffect: true,
        },
      ],
    },
  },
  extraTooltip: {
    title: 'Life-Leeching',
    subTitle: 'Lore attribute',
    type: 'Augment of the Winds',
    duration: 'Constant',
    target: 'Self',
    activeIf: 'Casting',
    effects: [
      {
        description: 'Life Leeching (25 seconds)',
        goodEffect: true,
      },
      {
        description: '+ Improved power recharge rate',
        goodEffect: true,
      },
    ],
  },
};

export default lifeLeeching;
