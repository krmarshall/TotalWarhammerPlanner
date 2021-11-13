interface SkillEffectInterface {
  icon: string;
  description: string;
  goodEffect: boolean;
}

interface SkillRankInterface {
  rank1: Array<SkillEffectInterface>;
  rank2?: Array<SkillEffectInterface>;
  rank3?: Array<SkillEffectInterface>;
}

interface ExtraTooltipInterface {
  title: string;
  subTitle: string;
  windsCost?: number;
  cooldown?: number;
  type?: string;
  duration?: string;
  target?: string;
  activeIf?: string;
  cannotUseIf?: string;
  cannotTargetIf?: string;
  projectileRange: string;
  effectRange?: number;
  effects?: Array<SkillEffectInterface>;
}

interface SkillInterface {
  name: string;
  icon: string;
  description?: string;
  ranks: SkillRankInterface;

  requiresSkill?: string;
  requiresLevel?: number;

  boxed?: boolean;
  requiresXPoints?: number;
  inLastYSkills?: number;

  blocksSkills?: Array<string>;

  extraTooltip?: ExtraTooltipInterface;
}

export default SkillInterface;
