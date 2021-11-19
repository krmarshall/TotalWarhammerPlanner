import { MountSkillIcons, SkillIconTypes } from '../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const razorgorChariot: SkillInterface = {
  name: 'Razorgor Chariot',
  icon: MountSkillIcons.razorgorChariot,
  iconType: SkillIconTypes.mount,
  ranks: {
    rank1: {
      requiresLevel: 12,
      skillEffects: [
        {
          icon: MountSkillIcons.razorgorChariot,
          iconType: SkillIconTypes.mount,
          description: 'Mount: Razorgor Chariot',
          goodEffect: true,
        },
      ],
    },
  },
};

export default razorgorChariot;
