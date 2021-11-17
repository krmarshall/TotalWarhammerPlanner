import { MountSkillIcons, SkillIconTypes } from '@projectEnums/SkillIconEnums';
import SkillInterface from '@projectInterfaces/SkillInterfaces';

const tuskgorChariot: SkillInterface = {
  name: 'Tuskgor Chariot',
  icon: MountSkillIcons.tuskgorChariot,
  iconType: SkillIconTypes.mount,
  ranks: {
    rank1: {
      requiresLevel: 8,
      skillEffects: [
        {
          icon: MountSkillIcons.tuskgorChariot,
          iconType: SkillIconTypes.mount,
          description: 'Mount: Tuskgor Chariot',
          goodEffect: true,
        },
      ],
    },
  },
};

export default tuskgorChariot;
