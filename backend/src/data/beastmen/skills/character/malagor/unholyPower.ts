import { CharacterSkillIcons, MiscSkillIcons } from '../../../../../types/enums/SkillIconEnums';
import { SkillIconTypes } from '../../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../../types/interfaces/SkillInterfaces';

const unholyPower: SkillInterface = {
  name: 'Unholy Power',
  icon: CharacterSkillIcons.magic,
  iconType: SkillIconTypes.character,
  boxed: true,
  requiresSkill: 'somethingWickedThisWayComes',
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: MiscSkillIcons.winds,
          iconType: SkillIconTypes.misc,
          description: 'Winds of Magic power reserve: +20',
          goodEffect: true,
        },
        {
          icon: MiscSkillIcons.winds,
          iconType: SkillIconTypes.misc,
          description: 'Winds of Magic starting amount: +20',
          goodEffect: true,
        },
      ],
    },
  },
};

export default unholyPower;
