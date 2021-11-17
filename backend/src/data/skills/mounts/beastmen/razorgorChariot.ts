import { MountSkills, SkillTypes } from '../../../../types/enums/SkillEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const razorgorChariot: SkillInterface = {
  name: 'Razorgor Chariot',
  icon: MountSkills.razorgorChariot,
  iconType: SkillTypes.mount,
  ranks: {
    rank1: {
      requiresLevel: 12,
      skillEffects: [
        {
          icon: MountSkills.razorgorChariot,
          iconType: SkillTypes.mount,
          description: 'Mount: Razorgor Chariot',
          goodEffect: true,
        },
      ],
    },
  },
};

export default razorgorChariot;
