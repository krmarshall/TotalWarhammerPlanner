import {
  AbilityInterface,
  AttributeInterface,
  CharacterInterface,
  EffectInterface,
  FactionEffectInterface,
  ItemInterface,
  PhaseInterface,
  SkillInterface,
  UnitStatsInterface,
} from '../types/interfaces/CharacterInterface';

interface HighlightArrayInterface {
  skillTree: Array<Array<boolean>>;
  items?: Array<boolean>;
  backgroundSkills?: Array<boolean>;
  factionEffects?: boolean;
  unitStats: { attributes?: Array<boolean>; abilities?: Array<boolean> };
}

const searchDataForKeyword = (characterData: CharacterInterface, searchStringArg: string) => {
  const searchString = searchStringArg.toLowerCase();
  const highlightArray: HighlightArrayInterface = { skillTree: [], unitStats: {} };

  characterData.skillTree.forEach((skillRow, yIndex) => {
    if (highlightArray.skillTree[yIndex] === undefined) highlightArray.skillTree[yIndex] = [];

    skillRow.forEach((skill) => {
      highlightArray.skillTree[yIndex][skill.tier] = searchSkillForKeyword(skill, searchString);
    });
  });

  characterData.items?.forEach((item, index) => {
    if (highlightArray.items === undefined) highlightArray.items = [];
    highlightArray.items[index] = searchItemForKeyword(item, searchString);
  });

  characterData.backgroundSkills?.forEach((backgroundSkill, index) => {
    if (highlightArray.backgroundSkills === undefined) highlightArray.backgroundSkills = [];
    highlightArray.backgroundSkills[index] = searchSkillForKeyword(backgroundSkill, searchString);
  });

  if (characterData.factionEffects !== undefined) {
    highlightArray.factionEffects = searchFactionEffectForKeyword(characterData.factionEffects, searchString);
  }

  highlightArray.unitStats = searchUnitStatsForKeyword(characterData.unitStats, searchString);

  return highlightArray;
};

const searchSkillForKeyword = (skill: SkillInterface, searchString: string): boolean => {
  if (skill.localised_name.toLowerCase().includes(searchString)) {
    return true;
  }
  if (skill.localised_description.toLowerCase().includes(searchString)) {
    return true;
  }
  for (const skillLevel of skill.levels ?? []) {
    for (const effect of skillLevel.effects ?? []) {
      if (searchEffectForKeyword(effect, searchString)) {
        return true;
      }
    }
  }
  return false;
};

const searchItemForKeyword = (item: ItemInterface, searchString: string): boolean => {
  if (item.onscreen_name.toLowerCase().includes(searchString)) {
    return true;
  }
  if (item.colour_text.toLowerCase().includes(searchString)) {
    return true;
  }
  for (const effect of item.effects ?? []) {
    if (searchEffectForKeyword(effect, searchString)) {
      return true;
    }
  }
  return false;
};

const searchFactionEffectForKeyword = (factionEffect: FactionEffectInterface, searchString: string): boolean => {
  if (factionEffect.localised_title.toLowerCase().includes(searchString)) {
    return true;
  }
  if (factionEffect.localised_description.toLowerCase().includes(searchString)) {
    return true;
  }
  for (const effect of factionEffect.effects) {
    if (searchEffectForKeyword(effect, searchString)) {
      return true;
    }
  }
  return false;
};

const searchUnitStatsForKeyword = (unitStats: UnitStatsInterface, searchString: string) => {
  const returnObj: { attributes?: Array<boolean>; abilities?: Array<boolean> } = {};
  unitStats.abilities?.forEach((ability, index) => {
    if (returnObj.abilities === undefined) returnObj.abilities = [];
    returnObj.abilities[index] = searchAbilityForKeyword(ability, searchString);
  });
  unitStats.attributes?.forEach((attribute, index) => {
    if (returnObj.attributes === undefined) returnObj.attributes = [];
    returnObj.attributes[index] = searchAttributeForKeyword(attribute, searchString);
  });

  return returnObj;
};

const searchEffectForKeyword = (effect: EffectInterface | undefined, searchString: string): boolean => {
  if (effect === undefined) {
    return false;
  }

  if (effect.description.toLowerCase().includes(searchString)) {
    return true;
  }
  for (const ability of effect.related_abilities ?? []) {
    if (searchAbilityForKeyword(ability, searchString)) {
      return true;
    }
  }
  for (const attribute of effect.related_attributes ?? []) {
    if (searchAttributeForKeyword(attribute, searchString)) {
      return true;
    }
  }
  for (const phase of effect.related_phases ?? []) {
    if (searchPhaseForKeyword(phase, searchString)) {
      return true;
    }
  }
  return false;
};

const searchAbilityForKeyword = (ability: AbilityInterface | undefined, searchString: string): boolean => {
  if (ability === undefined) {
    return false;
  }
  const unitAbility = ability.unit_ability;
  if (unitAbility.onscreen_name.toLowerCase().includes(searchString)) {
    return true;
  }
  if (unitAbility.type.onscreen_name.toLowerCase().includes(searchString)) {
    return true;
  }
  if (unitAbility.ui_effects !== undefined) {
    for (const uiEffect of unitAbility.ui_effects) {
      if (uiEffect.localised_text.toLowerCase().includes(searchString)) {
        return true;
      }
    }
  }
  for (const phase of unitAbility.phases ?? []) {
    if (searchPhaseForKeyword(phase, searchString)) {
      return true;
    }
  }
  if (searchPhaseForKeyword(unitAbility.vortex?.contact_effect, searchString)) {
    return true;
  }
  if (searchPhaseForKeyword(unitAbility.activated_projectile?.contact_stat_effect, searchString)) {
    return true;
  }
  if (searchPhaseForKeyword(unitAbility.activated_projectile?.explosion_type?.contact_phase_effect, searchString)) {
    return true;
  }
  if (searchPhaseForKeyword(unitAbility.activated_projectile?.spawned_vortex?.contact_effect, searchString)) {
    return true;
  }
  if (searchPhaseForKeyword(unitAbility.bombardment?.projectile_type?.contact_stat_effect, searchString)) {
    return true;
  }
  if (
    searchPhaseForKeyword(unitAbility.bombardment?.projectile_type?.explosion_type?.contact_phase_effect, searchString)
  ) {
    return true;
  }
  if (searchPhaseForKeyword(unitAbility.bombardment?.projectile_type?.spawned_vortex?.contact_effect, searchString)) {
    return true;
  }
  return false;
};

const searchAttributeForKeyword = (attribute: AttributeInterface | undefined, searchString: string): boolean => {
  if (attribute === undefined) {
    return false;
  }
  if (attribute.description.toLowerCase().includes(searchString)) {
    return true;
  }
  if (attribute.bullet_text.toLowerCase().includes(searchString)) {
    return true;
  }
  return false;
};

const searchPhaseForKeyword = (phase: PhaseInterface | undefined, searchString: string): boolean => {
  if (phase === undefined) {
    return false;
  }
  if (phase.onscreen_name?.toLowerCase().includes(searchString)) {
    return true;
  }
  if (searchPhaseForKeyword(phase.imbue_contact, searchString)) {
    return true;
  }
  for (const statEffect of phase.stat_effects ?? []) {
    if (statEffect.description.toLowerCase().includes(searchString)) {
      return true;
    }
  }
  for (const attribute of phase.attributes ?? []) {
    if (searchAttributeForKeyword(attribute, searchString)) {
      return true;
    }
  }
  return false;
};

export { searchDataForKeyword };
export type { HighlightArrayInterface };
