interface SkillEffectInterface {
  icon: string;
  description: string;
}

interface SkillRankInterface {
  skillEffects: Array<SkillEffectInterface>;
}

interface SkillInterface {
  name: string;
  icon: string;
  description: string;
  ranks: Array<SkillRankInterface>;

  requiresXPoints?: number;
  inLastYSkills?: number;

  requiresLevel?: number;
  blocksSkills?: Array<SkillInterface>;
}

export default SkillInterface;
