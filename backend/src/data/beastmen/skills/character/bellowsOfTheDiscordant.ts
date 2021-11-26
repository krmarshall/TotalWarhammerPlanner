import { BattleSkillIcons, SkillIconTypes } from '../../../../types/enums/SkillIconEnums';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const bellowsOfTheDiscordant: SkillInterface = {
  name: 'Bellows of the Discordant',
  icon: BattleSkillIcons.damage,
  iconType: SkillIconTypes.battle,
  requiresSkill: 'dualWielder',
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: BattleSkillIcons.damage,
          iconType: SkillIconTypes.battle,
          description:
            'Weapon Strength: +15% for Chaos Warhounds, Harpies, Razorgor Herd, Chaos Spawn, Giant, Jabberslythe, Ghorgon, Cygor, and Manticore units\n(all units in army)',
          goodEffect: true,
        },
      ],
    },
  },
};

export default bellowsOfTheDiscordant;
