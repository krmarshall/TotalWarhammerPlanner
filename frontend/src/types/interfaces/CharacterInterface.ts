interface StatEffectInterface {
  value: number;
  stat: string;
  how: string;
  description: string;
  icon: string;
  sort_order: number;
}

interface AttributeInterface {
  key: string;
  description: string;
  attribute_type: string;
}

interface PhaseInterface {
  duration: number;
  effect_type: string;
  recharge_time: number;
  is_hidden_in_ui: boolean;
  mana_max_depletion_mod?: number;
  fatigue_change_ratio?: number;
  mana_regen_mod?: number;
  stat_effects?: Array<StatEffectInterface>;
  attributes?: Array<AttributeInterface>;
}

interface AbilityInterface {
  effect: string;
  bonus_value_id: string;
  unit_ability: {
    key: string;
    icon_name: string;
    overpower_option: string;
    type: {
      key: string;
      icon_path: string;
      description: string;
    };
    is_hidden_in_ui: boolean;
    description: boolean;
    ui_effects?: Array<{
      key: string;
      sort_order: number;
      description: string;
    }>;
    active_time?: number;
    recharge_time?: number;
    wind_up_time?: number;
    passive: boolean;
    effect_range: number;
    affect_self: boolean;
    target_friends: boolean;
    target_enemies: boolean;
    target_ground: boolean;
    target_self: boolean;
    target_intercept_range: number;
    mana_cost?: number;
    miscast_chance?: number;
    num_uses?: number;
    phases?: Array<PhaseInterface>;
  };
}

interface SkillEffectInterface {
  key: string;
  icon: string;
  priority: number;
  is_positive_value_good: boolean;
  description: string;
  value: number;
  related_abilities?: Array<AbilityInterface>;
}

interface SkillLevelInterface {
  unlocked_at_rank?: number;
  blocks_character_skill_key?: Array<string>;
  effects?: Array<SkillEffectInterface>;
}

interface SkillInterface {
  key: string;
  image_path: string;
  is_background_skill: boolean;
  name: string;
  description: string;
  use_quest_for_prefix?: boolean;
  character_skill_key: string;
  tier: number;
  indent: number;
  points_on_creation: number;
  required_num_parents: number;
  parent_required?: Array<string>;
  parent_subset_required?: Array<string>;
  visible_in_ui: boolean;
  right_arrow?: boolean;
  boxed?: boolean;
  levels?: Array<SkillLevelInterface>;
}

interface ItemInterface {
  key: string;
  type?: string;
  effects?: Array<SkillEffectInterface>;
  name: string;
  description: string;
  image_path: string;
  unlocked_at_rank?: number;
  instant?: boolean;
}

interface CharacterInterface {
  key: string;
  skillTree: Array<Array<SkillInterface>>;
  items: Array<ItemInterface>;
  backgroundSkills: Array<SkillInterface>;
}

export type {
  CharacterInterface,
  ItemInterface,
  SkillInterface,
  SkillLevelInterface,
  SkillEffectInterface,
  AbilityInterface,
  PhaseInterface,
  AttributeInterface,
  StatEffectInterface,
};
