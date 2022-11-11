import { SkillEffectInterface } from './CharacterInterface';

interface NodeLinkInterface {
  parent_key: string;
  child_key: string;
  parent_link_position: string;
  child_link_position: string;
  visible?: boolean;
}

interface TechSkillInterface {
  key: string;
  icon_name: string;
  name: string;
  description: string;
  required_buildings?: Array<string>;
  effects: Array<SkillEffectInterface>;
}

interface TechNodeInterface {
  key: string;
  tier: number;
  indent: number;
  research_points_required: number;
  cost_per_round?: number;
  optional_ui_group?: string;
  required_parents?: number;
  technology: TechSkillInterface;
}

interface TechSetInterface {
  key: string;
  faction_key: string;
  culture: string;
  tree: Array<Array<TechNodeInterface>>;
  node_links: Array<NodeLinkInterface>;
}

export type { TechSetInterface, TechNodeInterface, NodeLinkInterface };
