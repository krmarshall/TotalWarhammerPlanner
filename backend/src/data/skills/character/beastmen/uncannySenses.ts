import { CharacterSkillIcons, MiscSkillIcons, SkillIconTypes } from '@projectEnums/SkillIconEnums';
import SkillInterface from '@projectInterfaces/SkillInterfaces';

const uncannySenses: SkillInterface = {
  name: 'Uncanny Senses',
  icon: CharacterSkillIcons.wardSave,
  iconType: SkillIconTypes.character,
  ranks: {
    rank1: {
      requiresLevel: 10,
      skillEffects: [
        {
          icon: MiscSkillIcons.resistanceMagic,
          iconType: SkillIconTypes.misc,
          description: 'Magic resistance: 10%',
          goodEffect: true,
        },
      ],
    },
  },
};

export default uncannySenses;
