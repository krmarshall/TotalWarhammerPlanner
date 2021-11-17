import { MountSkills, SkillTypes } from '../../../../types/enums/SkillEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const tuskgorChariot: SkillInterface = {
  name: 'Tuskgor Chariot',
  icon: MountSkills.tuskgorChariot,
  iconType: SkillTypes.mount,
  ranks: {
    rank1: {
      requiresLevel: 8,
      skillEffects: [
        {
          icon: MountSkills.tuskgorChariot,
          iconType: SkillTypes.mount,
          description: 'Mount: Tuskgor Chariot',
          goodEffect: true,
        },
      ],
    },
  },
};

export default tuskgorChariot;
