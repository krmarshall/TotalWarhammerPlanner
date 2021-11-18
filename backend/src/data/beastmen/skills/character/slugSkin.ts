import { BattleSkillIcons, MiscSkillIcons, SkillIconTypes } from '@projectEnums/SkillIconEnums';
import SkillInterface from '@projectInterfaces/SkillInterfaces';

const slugSkin: SkillInterface = {
  name: 'Slug-Skin',
  icon: BattleSkillIcons.wardSave,
  iconType: SkillIconTypes.battle,
  requiresSkill: 'runeOfTheTrueBeast',
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: MiscSkillIcons.resistanceMissile,
          iconType: SkillIconTypes.misc,
          description: 'Missile resistance: 10% \n (Lords army)',
          goodEffect: true,
        },
      ],
    },
  },
};

export default slugSkin;
