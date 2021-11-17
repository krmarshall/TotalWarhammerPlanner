// Each skill rank can have multiple effects, such as increasing the melee defence of units, as well as their leadership.
interface SkillEffectInterface {
  icon: string;
  iconType: string;
  description: string;
  goodEffect: boolean;
}

// Each skill can have up to 3 ranks that each have different skill effects.
interface SkillRankInterface {
  rank1: {
    requiresLevel?: number;
    skillEffects: Array<SkillEffectInterface>;
  };
  rank2?: {
    requiresLevel?: number;
    skillEffects: Array<SkillEffectInterface>;
  };
  rank3?: {
    requiresLevel?: number;
    skillEffects: Array<SkillEffectInterface>;
  };
}

// Some skills such as spells and abilities have an extra tooltip that provide a bunch of information about what that spell/ability does.
interface ExtraTooltipInterface {
  title?: string;
  subTitle?: string;
  windsCost?: number;
  cooldown?: number;
  type?: string;
  duration?: string;
  target?: string;
  activeIf?: string;
  cannotUseIf?: string;
  cannotTargetIf?: string;
  projectileRange?: string;
  effectRange?: number;
  effects?: Array<SkillEffectInterface>;
}

// Besides the above skill ranks and tooltips, each skill also has restrictions for when it can be selected.
interface SkillInterface {
  name: string;
  icon: string;
  iconType: string;
  iconSpellLore?: string;
  description?: string;
  ranks: SkillRankInterface;

  requiresSkill?: string;

  boxed?: boolean;
  requiresXPoints?: number;
  inLastYSkills?: number;

  blocksSkills?: Array<string>;

  extraTooltip?: ExtraTooltipInterface;
}

export default SkillInterface;
