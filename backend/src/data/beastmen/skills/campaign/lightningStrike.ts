import SkillInterface from '../../../../types/interfaces/SkillInterfaces';
import lightningStrikeGeneric from '../../../z_shared/skills/lightningStikeGeneric';

const lightningStrike: SkillInterface = {
  ...lightningStrikeGeneric,
  name: 'Lightning Strike',
  requiresSkill: 'unholyResilience',
};

export default lightningStrike;
