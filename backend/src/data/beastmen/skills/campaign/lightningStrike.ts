import SkillInterface from '../../../../types/interfaces/SkillInterfaces';
import lightningStrikeGeneric from '../../../z_shared/skills/lightningStikeGeneric';

const lightningStrike: SkillInterface = {
  ...lightningStrikeGeneric,
  requiresSkill: 'unholyResilience',
};

export default lightningStrike;
