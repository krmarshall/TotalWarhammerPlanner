import { MountSkillIcons, SkillIconTypes } from '@projectEnums/SkillIconEnums';
import SkillInterface from '@projectInterfaces/SkillInterfaces';

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
