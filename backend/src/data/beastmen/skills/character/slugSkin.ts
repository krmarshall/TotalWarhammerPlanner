import { BattleSkillIcons, MiscSkillIcons, SkillIconTypes } from '../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

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
