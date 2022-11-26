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
  icon: string;
}

interface PhaseInterface {
  duration: number;
  effect_type: string;
  recharge_time?: number;
  is_hidden_in_ui: boolean;
  mana_max_depletion_mod?: number;
  fatigue_change_ratio?: number;
  mana_regen_mod?: number;
  ability_recharge_change?: number;
  resurrect?: boolean;
  hp_change_frequency?: number;
  heal_amount?: number;
  barrier_heal_amount?: number;
  damage_amount?: number;
  damage_chance?: number;
  max_damaged_entities?: number;
  imbue_magical?: boolean;
  imbue_ignition?: boolean;
  imbue_contact?: PhaseInterface;
  cant_move?: boolean;
  replenish_ammo?: number;
  stat_effects?: Array<StatEffectInterface>;
  attributes?: Array<AttributeInterface>;
}

interface VortexInterface {
  vortex_key: string;
  duration: number;
  damage: number;
  damage_ap: number;
  goal_radius: number;
  movement_speed: number;
  is_magical?: boolean;
  is_flaming?: boolean;
  delay: number;
  num_vortexes?: number;
  delay_between_vortexes?: number;
  affects_allies: boolean;
  contact_effect?: PhaseInterface;
}

interface ProjectileExplosionInterface {
  key: string;
  detonation_radius: number;
  detonation_damage: number;
  detonation_damage_ap: number;
  is_magical?: boolean;
  is_flaming?: boolean;
  affects_allies: boolean;
  contact_phase_effect?: PhaseInterface;
}

interface ProjectileInterface {
  key: string;
  projectile_number?: number;
  damage: number;
  ap_damage: number;
  bonus_v_infantry?: number;
  bonus_v_large?: number;
  shockwave_radius: number;
  burst_size?: number;
  is_magical?: boolean;
  is_flaming?: boolean;
  shots_per_volley?: number;
  can_damage_allies?: boolean;
  contact_stat_effect?: PhaseInterface;
  explosion_type?: ProjectileExplosionInterface;
}

interface ProjectileBombardmentInterface {
  bombardment_key: string;
  num_projectiles?: number;
  start_time: number;
  arrival_window: number;
  radius_spread: number;
  projectile_type: ProjectileInterface;
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
    description: string;
    ui_effects?: Array<{
      key: string;
      sort_order: number;
      description: string;
    }>;
    active_time?: number;
    recharge_time?: number;
    shared_recharge_time?: number;
    wind_up_time?: number;
    effect_range: number;
    min_range?: number;
    target_friends: boolean;
    target_enemies: boolean;
    target_ground: boolean;
    target_self: boolean;
    enabled_if?: Array<string>;
    target_if?: Array<string>;
    num_effected_friendly_units?: number;
    num_effected_enemy_units?: number;
    target_intercept_range: number;
    mana_cost?: number;
    miscast_chance?: number;
    num_uses?: number;
    phases?: Array<PhaseInterface>;
    vortex?: VortexInterface;
    activated_projectile?: ProjectileInterface;
    bombardment?: ProjectileBombardmentInterface;
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
  auto_unlock_at_rank?: number;
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

interface FactionEffectInterface {
  key: string;
  ui_icon: string;
  title: string;
  description: string;
  effects: Array<SkillEffectInterface>;
}

interface CharacterInterface {
  key: string;
  skillTree: Array<Array<SkillInterface>>;
  items?: Array<ItemInterface>;
  backgroundSkills?: Array<SkillInterface>;
  factionEffects?: FactionEffectInterface;
}

export type {
  CharacterInterface,
  FactionEffectInterface,
  ItemInterface,
  SkillInterface,
  SkillLevelInterface,
  SkillEffectInterface,
  VortexInterface,
  ProjectileExplosionInterface,
  ProjectileInterface,
  ProjectileBombardmentInterface,
  AbilityInterface,
  PhaseInterface,
  AttributeInterface,
  StatEffectInterface,
};
