import { MountSkillIcons, SkillIconTypes } from '../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

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
