import { AbilitySkillIcons, CharacterSkillIcons, MiscSkillIcons, SkillIconTypes } from '@projectEnums/SkillIconEnums';
import SkillInterface from '@projectInterfaces/SkillInterfaces';

const deadlyOnslaught: SkillInterface = {
  name: 'Deadly Onslaught',
  icon: AbilitySkillIcons.deadlyOnslaught,
  iconType: SkillIconTypes.abilities,
  requiresXPoints: 4,
  inLastYSkills: 4,
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: AbilitySkillIcons.deadlyOnslaught,
          iconType: SkillIconTypes.abilities,
          description: 'Ability: "Deadly Onslaught"',
          goodEffect: true,
        },
      ],
    },
  },
  extraTooltip: {
    title: 'Deadly Onslaught',
    subTitle: 'Character Ability',
    cooldown: 90,
    type: 'Augment',
    duration: '31 seconds',
    target: 'Self',
    effects: [
      {
        icon: MiscSkillIcons.modifierArmourPiercing,
        iconType: SkillIconTypes.misc,
        description: '+25% Armour-Piercing Weapon Damage',
        goodEffect: true,
      },
      {
        icon: CharacterSkillIcons.baseDamage,
        iconType: SkillIconTypes.character,
        description: '+25% Base Weapon Damage',
        goodEffect: true,
      },
      {
        icon: CharacterSkillIcons.charge,
        iconType: SkillIconTypes.character,
        description: '+40% Charge Bonus',
        goodEffect: true,
      },
    ],
  },
};

export default deadlyOnslaught;
