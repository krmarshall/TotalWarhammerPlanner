import { CharacterSkills, MiscSkills, SkillTypes } from '../../../../types/enums/SkillEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const shadowHide: SkillInterface = {
  name: 'Shadow Hide',
  icon: CharacterSkills.wardSave,
  iconType: SkillTypes.character,
  ranks: {
    rank1: {
      requiresLevel: 10,
      skillEffects: [
        {
          icon: MiscSkills.resistanceMissile,
          iconType: SkillTypes.misc,
          description: 'Missile resistance: 10%',
          goodEffect: true,
        },
      ],
    },
  },
};

export default shadowHide;
