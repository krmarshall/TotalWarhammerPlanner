import { SkillIconTypes } from '../../../../../types/enums/SkillIconEnums';
import { BeastsSpellIcons, SpellIconTypes } from '../../../../../types/enums/SpellIconEnums';
import SkillInterface from '../../../../../types/interfaces/SkillInterfaces';

const mantleOfCrows: SkillInterface = {
  name: 'Mantle of Crows',
  icon: BeastsSpellIcons.flockOfDoom,
  iconSpellLore: SpellIconTypes.beasts,
  iconType: SkillIconTypes.spell,
  requiresXPoints: 2,
  inLastYSkills: 4,
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: BeastsSpellIcons.flockOfDoom,
          iconSpellLore: SpellIconTypes.beasts,
          iconType: SkillIconTypes.spell,
          description: 'Ability: "Unending Flock of Doom',
          goodEffect: true,
        },
      ],
    },
  },
  extraTooltip: {
    title: 'Unending Flock of Doom',
    subTitle: 'Lord ability',
    type: 'Direct Damage (Area)\nOnly acts on targets when in area',
    duration: 'Constant',
    target: 'Around self\nAffects enemies in range',
    activeIf: 'In melee',
    effectRange: '40m',
    effects: [
      {
        description: '+ Strong vs 120 men unit or above',
        goodEffect: true,
      },
      {
        description: '+ Causes damage to combatants',
        goodEffect: true,
      },
    ],
  },
};

export default mantleOfCrows;
