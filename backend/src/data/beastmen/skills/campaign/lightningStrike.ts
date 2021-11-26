import SkillInterface from '../../../../types/interfaces/SkillInterfaces';
import lightningStrikeShared from '../../../z_shared/skills/lightningStrikeShared';

const lightningStrike: SkillInterface = {
  ...lightningStrikeShared,
  name: 'Lightning Strike',
  requiresSkill: 'unholyResilience',
};

export default lightningStrike;
