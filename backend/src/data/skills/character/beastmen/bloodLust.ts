import { AbilitySkills, MiscSkills, SkillTypes } from '@projectEnums/SkillIconEnums';
import SkillInterface from '@projectInterfaces/SkillInterfaces';

const bloodLust: SkillInterface = {
  name: 'Blood Lust',
  icon: AbilitySkills.bloodLust,
  iconType: SkillTypes.abilities,
  ranks: {
    rank1: {
      requiresLevel: 8,
      skillEffects: [
        {
          icon: AbilitySkills.bloodLust,
          iconType: SkillTypes.abilities,
          description: 'Ability: "Blood Lust"',
          goodEffect: true,
        },
      ],
    },
  },
  extraTooltip: {
    title: 'Blood Lust',
    subTitle: 'Character ability',
    type: 'Augment',
    duration: '33 seconds',
    target: 'Self, Ally \n 100m',
    cooldown: 60,
    effects: [
      {
        icon: MiscSkills.modifierArmourPiercing,
        iconType: SkillTypes.misc,
        description: 'Armour-Piercing Weapon Damage',
        goodEffect: true,
      },
    ],
  },
};

export default bloodLust;
