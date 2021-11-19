import SkillInterface from '@projectInterfaces/SkillInterfaces';
import lightningStrikeGeneric from 'src/data/z_shared/skills/lightningStikeGeneric';

const lightningStrike: SkillInterface = {
  ...lightningStrikeGeneric,
  requiresSkill: 'unholyResilience',
};

export default lightningStrike;
