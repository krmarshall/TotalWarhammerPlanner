import { CharacterSkillIcons, MiscSkillIcons, SkillIconTypes } from '../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const uncannySenses: SkillInterface = {
  name: 'Uncanny Senses',
  icon: CharacterSkillIcons.wardSave,
  iconType: SkillIconTypes.character,
  ranks: {
    rank1: {
      requiresLevel: 10,
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

export default uncannySenses;
