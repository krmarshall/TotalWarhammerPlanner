import { CharacterSkillIcons, MiscSkillIcons, SkillIconTypes } from '@projectEnums/SkillIconEnums';
import SkillInterface from '@projectInterfaces/SkillInterfaces';

const missileResistance: SkillInterface = {
  name: 'Missile Resistance Generic',
  icon: CharacterSkillIcons.wardSave,
  iconType: SkillIconTypes.character,
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: MiscSkillIcons.resistanceMissile,
          iconType: SkillIconTypes.misc,
          description: 'Missile resistance: 10%',
          goodEffect: true,
        },
      ],
    },
  },
};

export default missileResistance;
