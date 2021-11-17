import { CampaignSkillIcons, CharacterSkillIcons, MiscSkillIcons, SkillIconTypes } from '@projectEnums/SkillIconEnums';
import SkillInterface from '@projectInterfaces/SkillInterfaces';

const theDarkMail: SkillInterface = {
  name: 'The Dark Mail',
  icon: CharacterSkillIcons.armourItem,
  iconType: SkillIconTypes.character,
  ranks: {
    rank1: {
      requiresLevel: 10,
      skillEffects: [
        {
          icon: CharacterSkillIcons.armour,
          iconType: SkillIconTypes.character,
          description: 'Armour: +10',
          goodEffect: true,
        },
        {
          icon: MiscSkillIcons.resistanceMagic,
          iconType: SkillIconTypes.misc,
          description: 'Magic resistance: 20%',
          goodEffect: true,
        },
        {
          icon: CampaignSkillIcons.agent,
          iconType: SkillIconTypes.campaign,
          description: 'Enemy Hero action success chance: -10%',
          goodEffect: true,
        },
        {
          icon: MiscSkillIcons.itemPassiveArmour,
          iconType: SkillIconTypes.misc,
          description: 'Passive ability: "The Dark Mail"',
          goodEffect: true,
        },
      ],
    },
  },
  extraTooltip: {
    title: 'The Dark Mail',
    subTitle: 'Item',
    type: 'Augment',
    duration: 'Constant',
    target: 'Self',
    activeIf: 'In melee',
    effects: [
      {
        icon: MiscSkillIcons.resistanceWard,
        iconType: SkillIconTypes.misc,
        description: '+20% Damage Resistance',
        goodEffect: true,
      },
    ]
  }
};

export default theDarkMail;
