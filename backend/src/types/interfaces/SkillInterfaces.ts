// Each skill rank can have multiple effects, such as increasing the melee defence of units, as well as their leadership.
interface SkillEffectInterface {
  icon: string;
  iconType: string;
  description: string;
  goodEffect: boolean;
}

interface SkillRankInterface {
  requiresLevel?: number;
  skillEffects: Array<SkillEffectInterface>;
}

// Each skill can have up to 3 ranks that each have different skill effects.
interface SkillRanksInterface {
  rank1: SkillRankInterface;
  rank2?: SkillRankInterface;
  rank3?: SkillRankInterface;
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
  effectRange?: string;
  effects?: Array<SkillEffectInterface>;
}

// Besides the above skill ranks and tooltips, each skill also has restrictions for when it can be selected.
interface SkillInterface {
  // General Skill Info
  name: string;
  icon: string;
  iconType: string;
  iconSpellLore?: string;
  description?: string;
  ranks: SkillRanksInterface;

  // Selection Conditions
  requiresSkill?: string;
  requiresXPoints?: number;
  inLastYSkills?: number;
  blocksSkills?: Array<string>;

  // Extra Info and Styling Details
  extraTooltip?: ExtraTooltipInterface;

  boxed?: boolean;
  rightArrow?: boolean;
}

export default SkillInterface;
export type { SkillRankInterface, SkillEffectInterface };
