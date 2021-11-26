import { AbilitySkillIcons, CharacterSkillIcons, SkillIconTypes } from '../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../types/interfaces/SkillInterfaces';

const greaterArcaneConduitShared: SkillInterface = {
  name: 'Greater Arcane Conduit Shared',
  icon: AbilitySkillIcons.greaterArcaneConduit,
  iconType: SkillIconTypes.abilities,
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: CharacterSkillIcons.generalAbility,
          iconType: SkillIconTypes.character,
          description: 'Passive ability: "Greater Arcane Conduit"',
          goodEffect: true,
        },
      ],
    },
  },
  extraTooltip: {
    title: 'Greater Arcane Conduit',
    subTitle: 'Character ability',
    type: 'Augment of the Winds',
    duration: 'Constant',
    target: 'Self',
    effects: [
      {
        description: '+ Great increase to power reserves',
        goodEffect: true,
      },
      {
        description: '+ Improved power recharge rate',
        goodEffect: true,
      },
    ],
  },
};

export default greaterArcaneConduitShared;
