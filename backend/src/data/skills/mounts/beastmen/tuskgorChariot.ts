import { MountSkills, SkillTypes } from '@projectEnums/SkillIconEnums';
import SkillInterface from '@projectInterfaces/SkillInterfaces';

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
