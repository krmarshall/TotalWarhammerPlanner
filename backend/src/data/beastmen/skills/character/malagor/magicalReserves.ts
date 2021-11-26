import { CharacterSkillIcons, MiscSkillIcons, SkillIconTypes } from '../../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../../types/interfaces/SkillInterfaces';

const magicalReserves: SkillInterface = {
  name: 'Magical Reserves',
  icon: CharacterSkillIcons.magic,
  iconType: SkillIconTypes.character,
  rightArrow: true,
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: MiscSkillIcons.winds,
          iconType: SkillIconTypes.misc,
          description: 'Winds of Magic power reserve: +15',
          goodEffect: true,
        },
      ],
    },
  },
};

export default magicalReserves;
