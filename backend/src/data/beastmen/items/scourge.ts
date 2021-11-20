import {
  AbilitySkillIcons,
  CampaignSkillIcons,
  CharacterSkillIcons,
  MiscSkillIcons,
  SkillIconTypes,
} from '../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../types/interfaces/SkillInterfaces';

const scourge: SkillInterface = {
  name: 'Scourge',
  icon: CharacterSkillIcons.weaponItem,
  iconType: SkillIconTypes.character,
  ranks: {
    rank1: {
      requiresLevel: 5,
      skillEffects: [
        {
          icon: CharacterSkillIcons.attack,
          iconType: SkillIconTypes.character,
          description: 'Melee attack: +10',
          goodEffect: true,
        },
        {
          icon: CharacterSkillIcons.damage,
          iconType: SkillIconTypes.character,
          description: 'Weapon Strength: +10%',
          goodEffect: true,
        },
        {
          icon: MiscSkillIcons.discouraged,
          iconType: SkillIconTypes.misc,
          description: 'Attacks cause "Discouraged" effect, reducing leadership',
          goodEffect: true,
        },
        {
          icon: CampaignSkillIcons.chaosCorruption,
          iconType: SkillIconTypes.campaign,
          description: 'Chaos corruption: +5\n(local province)',
          goodEffect: true,
        },
        {
          icon: CampaignSkillIcons.income,
          iconType: SkillIconTypes.campaign,
          description: 'Income from post-battle loot: +10%',
          goodEffect: true,
        },
        {
          icon: AbilitySkillIcons.scourge,
          iconType: SkillIconTypes.abilities,
          description: 'Ability: "Scourge"',
          goodEffect: true,
        },
      ],
    },
  },
  extraTooltip: {
    title: 'Scourge',
    subTitle: 'Weapon',
    cooldown: 120,
    type: 'Augment',
    duration: '35 seconds',
    target: 'Self',
    effects: [
      {
        icon: MiscSkillIcons.modifierArmourPiercing,
        iconType: SkillIconTypes.misc,
        description: '+25% Armour-Piercing Weapon Damage',
        goodEffect: true,
      },
      {
        icon: CharacterSkillIcons.damage,
        iconType: SkillIconTypes.character,
        description: '+50% Splash Attack Power',
        goodEffect: true,
      },
      {
        icon: CharacterSkillIcons.bonusVsInfantry,
        iconType: SkillIconTypes.character,
        description: '+32 Bonus vs Infantry',
        goodEffect: true,
      },
      {
        icon: CharacterSkillIcons.baseDamage,
        iconType: SkillIconTypes.character,
        description: '+25% Base Weapon Damage',
        goodEffect: true,
      },
    ],
  },
};

export default scourge;
