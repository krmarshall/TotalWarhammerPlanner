import { CharacterSkillIcons, MiscSkillIcons, SkillIconTypes } from '../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../types/interfaces/SkillInterfaces';

const magicResistance: SkillInterface = {
  name: 'Missile Resistance Generic',
  icon: CharacterSkillIcons.wardSave,
  iconType: SkillIconTypes.character,
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: MiscSkillIcons.resistanceMagic,
          iconType: SkillIconTypes.misc,
          description: 'Magic resistance: 10%',
          goodEffect: true,
        },
      ],
    },
  },
};

export default magicResistance;
