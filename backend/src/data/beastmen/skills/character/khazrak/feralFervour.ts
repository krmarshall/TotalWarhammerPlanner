import { BattleSkillIcons, MiscSkillIcons, SkillIconTypes } from '../../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../../types/interfaces/SkillInterfaces';

const feralFervour: SkillInterface = {
  name: 'Feral Fervour',
  icon: MiscSkillIcons.strider,
  iconType: SkillIconTypes.misc,
  requiresXPoints: 2,
  inLastYSkills: 4,
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: MiscSkillIcons.stalk,
          iconType: SkillIconTypes.misc,
          description:
            'Attribute: Stalk for Gors, Bestigors, Chaos Warhounds, Razorgor Herd and Harpies units\n(Lords army)',
          goodEffect: true,
        },
        {
          icon: BattleSkillIcons.vigour,
          iconType: SkillIconTypes.battle,
          description: 'Vigour loss reduction: -33%\n(Lords army)',
          goodEffect: true,
        },
        {
          icon: MiscSkillIcons.strider,
          iconType: SkillIconTypes.misc,
          description: 'Attribute: Strider\n(Lords army)',
          goodEffect: true,
        },
      ],
    },
  },
};

export default feralFervour;
