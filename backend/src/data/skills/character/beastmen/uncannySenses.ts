import { CharacterSkills, MiscSkills, SkillTypes } from '../../../../types/enums/SkillEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const uncannySenses: SkillInterface = {
  name: 'Uncanny Senses',
  icon: CharacterSkills.wardSave,
  iconType: SkillTypes.character,
  ranks: {
    rank1: {
      requiresLevel: 10,
      skillEffects: [
        {
          icon: MiscSkills.resistanceMagic,
          iconType: SkillTypes.misc,
          description: 'Magic resistance: 10%',
          goodEffect: true,
        },
      ],
    },
  },
};

export default uncannySenses;
