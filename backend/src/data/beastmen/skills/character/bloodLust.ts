import { AbilitySkillIcons, MiscSkillIcons, SkillIconTypes } from '@projectEnums/SkillIconEnums';
import SkillInterface from '@projectInterfaces/SkillInterfaces';

const bloodLust: SkillInterface = {
  name: 'Blood Lust',
  icon: AbilitySkillIcons.bloodLust,
  iconType: SkillIconTypes.abilities,
  ranks: {
    rank1: {
      requiresLevel: 8,
      skillEffects: [
        {
          icon: AbilitySkillIcons.bloodLust,
          iconType: SkillIconTypes.abilities,
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
        icon: MiscSkillIcons.modifierArmourPiercing,
        iconType: SkillIconTypes.misc,
        description: 'Armour-Piercing Weapon Damage',
        goodEffect: true,
      },
    ],
  },
};

export default bloodLust;
