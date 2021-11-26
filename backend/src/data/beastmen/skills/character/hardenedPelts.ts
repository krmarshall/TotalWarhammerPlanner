import { BattleSkillIcons, SkillIconTypes } from '../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const hardenedPelts: SkillInterface = {
  name: 'Hardened Pelts',
  icon: BattleSkillIcons.armour,
  iconType: SkillIconTypes.battle,
  requiresSkill: 'dreadsAndCharms',
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: BattleSkillIcons.armour,
          iconType: SkillIconTypes.battle,
          description:
            'Armour: +15 for Chaos Warhounds, Harpies, Razorgor Herd, Chaos Spawn, Giant, Jabberslythe, Ghorgon, Cygor, and Manticore units\n(all units in army)',
          goodEffect: true,
        },
      ],
    },
  },
};

export default hardenedPelts;
