import { CampaignSkillIcons, MiscSkillIcons, SkillIconTypes } from '../../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../../types/interfaces/SkillInterfaces';

const manslayer: SkillInterface = {
  name: 'Manslayer',
  icon: MiscSkillIcons.causesTerror,
  iconType: SkillIconTypes.misc,
  requiresSkill: 'bestialCunning',
  boxed: true,
  rightArrow: true,
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: CampaignSkillIcons.item,
          iconType: SkillIconTypes.campaign,
          description: 'Magic item dorp chance: +15%',
          goodEffect: true,
        },
        {
          icon: CampaignSkillIcons.item,
          iconType: SkillIconTypes.campaign,
          description: 'Post battle chance of stealing a magic item: +15%',
          goodEffect: true,
        },
        {
          icon: MiscSkillIcons.causesFear,
          iconType: SkillIconTypes.misc,
          description: 'Attribute: Causes Fear when fighting against Men\n(Lords army)',
          goodEffect: true,
        },
        {
          icon: MiscSkillIcons.causesTerror,
          iconType: SkillIconTypes.misc,
          description: 'Attribute: Causes Terror when fighting against Men',
          goodEffect: true,
        },
      ],
    },
  },
};

export default manslayer;
