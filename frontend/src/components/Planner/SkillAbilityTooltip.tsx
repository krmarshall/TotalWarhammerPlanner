import { AbilityInterface } from '../../types/interfaces/CharacterInterface';
import cooldownImg from '../../imgs/other/icon_cooldown_26.webp';
import windsImg from '../../imgs/other/winds_ui_replenish_battle_ph.webp';
import chargesImg from '../../imgs/other/icon_uses.webp';
import SkillPhase from './SkillPhase';
import ReactImage from '../ReactImage';
import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import SkillAbilityVortex from './SkillAbilityVortex';
import SkillAbilityProjectile from './SkillAbilityProjectile';
import SkillAbilityBombardment from './SkillAbilityBombardment';

interface SkillAbilityTooltipPropInterface {
  ability: AbilityInterface;
}

const SkillAbilityTooltip = ({ ability }: SkillAbilityTooltipPropInterface) => {
  const { state } = useContext(AppContext);
  const { selectedMod, selectedGame } = state;

  const unitAbility = ability.unit_ability;

  let target = '';
  target += unitAbility.target_enemies ? 'Enemies ' : '';
  target += unitAbility.target_friends ? 'Allies ' : '';
  target += unitAbility.target_ground ? 'Ground ' : '';
  target += unitAbility.target_self ? 'Self ' : '';
  let doesTarget = false;
  if (
    unitAbility.target_enemies ||
    unitAbility.target_friends ||
    unitAbility.target_ground ||
    unitAbility.target_self
  ) {
    doesTarget = true;
  }

  let hasPhases = false;
  unitAbility.phases?.forEach((phase) => {
    if (
      phase.stat_effects ||
      (phase.attributes !== undefined && phase.attributes.length > 0) ||
      phase.mana_max_depletion_mod ||
      phase.fatigue_change_ratio ||
      phase.mana_regen_mod ||
      phase.ability_recharge_change ||
      phase.heal_amount ||
      phase.barrier_heal_amount ||
      phase.damage_amount ||
      phase.imbue_magical ||
      phase.imbue_ignition ||
      phase.replenish_ammo ||
      phase.cant_move ||
      phase.imbue_contact
    ) {
      hasPhases = true;
    }
  });

  const vanillaGamePath = selectedGame === '2' ? 'vanilla2' : 'vanilla3';

  const abilityImagePath = unitAbility.icon_name + '.webp';
  const abilitySrcList = [
    // Some WH3 spells have incorrect icons on the character skill, but correct icons on the related ability
    `/imgs/${selectedMod}/battle_ui/ability_icons/${abilityImagePath}`,
    `/imgs/${vanillaGamePath}/battle_ui/ability_icons/${abilityImagePath}`,
    // WH2 has pretty much all the skill icons in campaign_ui, WH3 has many of the spells/abilities under battle_ui
    `/imgs/${selectedMod}/campaign_ui/skills/${abilityImagePath}`,
    `/imgs/${vanillaGamePath}/campaign_ui/skills/${abilityImagePath}`,
    // Some SFO ability icons have _active in the imagePath, but not on the actual image name /shrug
    `/imgs/${selectedMod}/campaign_ui/skills/${abilityImagePath.replace('_active', '')}`,
    `/imgs/${vanillaGamePath}/campaign_ui/skills/0_placeholder_skill.webp`,
  ];

  const typeImagePath = unitAbility.type.icon_path.replace('.png', '.webp');
  const typeSrcList = [
    `/imgs/${selectedMod}/battle_ui/ability_icons/${typeImagePath}`,
    `/imgs/${vanillaGamePath}/battle_ui/ability_icons/${typeImagePath}`,
    `/imgs/${vanillaGamePath}/campaign_ui/skills/0_placeholder_skill.webp`,
  ];
  return (
    <div className="flex-grow h-fit max-w-[30vw] ml-2 p-2 rounded border border-gray-400 shadow-lg text-lg text-gray-50 bg-gray-600">
      <div className="flex flex-row ml-2">
        <ReactImage
          srcList={abilitySrcList}
          className="w-8 h-8 m-0 mr-2 p-0"
          alt={unitAbility.description}
          w="48"
          h="48"
        />
        <h3 className="text-left whitespace-nowrap text-2xl pr-6 mr-auto">{unitAbility.description}</h3>
        {unitAbility.num_uses !== undefined && unitAbility.num_uses > 0 && (
          <div className="flex flex-row mr-3">
            <img className="w-6 h-6" src={chargesImg} alt="charges icon" width="24" height="24" />
            <p className="ml-1 text-center">{unitAbility.num_uses}</p>
          </div>
        )}
        {unitAbility.mana_cost !== undefined && unitAbility.mana_cost > 0 && (
          <div className="flex flex-row mr-3">
            <img className="w-6 h-6" src={windsImg} alt="winds icon" width="24" height="24" />
            <p className="ml-1 text-center">{unitAbility.mana_cost}</p>
          </div>
        )}
        {unitAbility.recharge_time !== undefined && unitAbility.recharge_time > 0 && (
          <div className="flex flex-row mr-3">
            <img className="w-6 h-6" src={cooldownImg} alt="cooldown icon" width="24" height="24" />
            <p className="ml-1 text-center">{unitAbility.recharge_time}s</p>
          </div>
        )}
      </div>
      {unitAbility.type.description && (
        <div className="flex flex-row">
          <h5 className="text-left w-24">Type:</h5>
          <ReactImage srcList={typeSrcList} alt="type icon" w="24" h="24" className="w-5 h-5 my-auto mr-1" />
          <p className="my-auto ml-1">{unitAbility.type.description}</p>
        </div>
      )}
      {unitAbility.active_time !== undefined && unitAbility.active_time > 0 && (
        <div className="flex flex-row">
          <h5 className="text-left w-24">Duration:</h5>
          <p className="my-auto ml-1">{unitAbility.active_time}s</p>
        </div>
      )}
      {unitAbility.wind_up_time !== undefined && unitAbility.wind_up_time > 0 && (
        <div className="flex flex-row">
          <h5 className="text-left w-24">Wind Up:</h5>
          <p className="my-auto ml-1">{unitAbility.wind_up_time}s</p>
        </div>
      )}
      {unitAbility.shared_recharge_time !== undefined && unitAbility.shared_recharge_time > 0 && (
        <div className="flex flex-row mr-3">
          <h5 className="text-left w-24">Shared CD:</h5>
          <img className="w-5 h-5 my-auto" src={cooldownImg} alt="cooldown icon" width="24" height="24" />
          <p className="ml-1 text-center my-auto">{unitAbility.shared_recharge_time}s</p>
        </div>
      )}
      {doesTarget && (
        <div className="flex flex-row">
          <h5 className="text-left w-24">Targets:</h5>
          <p className="my-auto ml-1">{target}</p>
        </div>
      )}
      {unitAbility.enabled_if !== undefined && unitAbility.enabled_if.length > 0 && (
        <div className="flex flex-row">
          <h5 className="text-left w-24">Enabled If:</h5>
          <p className="my-auto ml-1">
            {unitAbility.enabled_if.map((string, index) => {
              let returnString = string;
              if (unitAbility.enabled_if !== undefined && unitAbility.enabled_if.length - 1 > index) {
                returnString += ', ';
              }
              return returnString;
            })}
          </p>
        </div>
      )}
      {unitAbility.target_if !== undefined && unitAbility.target_if.length > 0 && (
        <div className="flex flex-row">
          <h5 className="text-left w-24">Target If:</h5>
          <p className="my-auto ml-1">
            {unitAbility.target_if.map((string, index) => {
              let returnString = string;
              if (unitAbility.target_if !== undefined && unitAbility.target_if.length - 1 > index) {
                returnString += ', ';
              }
              return returnString;
            })}
          </p>
        </div>
      )}
      {unitAbility.num_effected_friendly_units !== undefined && unitAbility.num_effected_friendly_units > 0 && (
        <div className="flex flex-row">
          <h5 className="text-left w-24">Target Cap:</h5>
          <p className="my-auto ml-1">{unitAbility.num_effected_friendly_units}</p>
        </div>
      )}
      {unitAbility.num_effected_enemy_units !== undefined && unitAbility.num_effected_enemy_units > 0 && (
        <div className="flex flex-row">
          <h5 className="text-left w-24">Target Cap:</h5>
          <p className="my-auto ml-1">{unitAbility.num_effected_enemy_units}</p>
        </div>
      )}
      {unitAbility.target_intercept_range !== undefined && unitAbility.target_intercept_range > 0 && (
        <div className="flex flex-row">
          <h5 className="text-left w-24">Cast Range:</h5>
          <p className="my-auto ml-1">{unitAbility.target_intercept_range}</p>
        </div>
      )}
      {unitAbility.effect_range !== undefined && unitAbility.effect_range > 0 && (
        <div className="flex flex-row">
          <h5 className="text-left w-24">Effect range:</h5>
          <p className="my-auto ml-1">{unitAbility.effect_range}</p>
        </div>
      )}
      {unitAbility.min_range !== undefined && unitAbility.min_range > 0 && (
        <div className="flex flex-row">
          <h5 className="text-left w-24">Min Range:</h5>
          <p className="my-auto ml-1">{unitAbility.min_range}</p>
        </div>
      )}
      {unitAbility.ui_effects && (
        <div className="text-left">
          <h5 className="w-24">Effects:</h5>
          {unitAbility.ui_effects.map((skillEffect, index) => {
            return (
              <p key={index} className="text-lg whitespace-pre-wrap ml-6 text-yellow-200">
                {skillEffect.description}
              </p>
            );
          })}
        </div>
      )}
      {hasPhases && (
        <div className="text-left">
          <h5 className="w-24">Phases:</h5>
          <div className="w-auto ml-6">
            {unitAbility?.phases?.map((phase, index) => {
              return <SkillPhase key={index} phase={phase} />;
            })}
          </div>
        </div>
      )}
      {unitAbility.vortex !== undefined && (
        <div className="text-left">
          <h5 className="w-24">Vortex:</h5>
          <div className="w-auto ml-6">
            <SkillAbilityVortex vortex={unitAbility.vortex} />
          </div>
        </div>
      )}
      {unitAbility.activated_projectile !== undefined && (
        <div className="text-left">
          <h5 className="w-24">Projectile:</h5>
          <div className="w-auto ml-6">
            <SkillAbilityProjectile projectile={unitAbility.activated_projectile} />
          </div>
        </div>
      )}
      {unitAbility.bombardment !== undefined && (
        <div className="text-left">
          <h5 className="w-24">Bombardment:</h5>
          <div className="w-auto ml-6">
            <SkillAbilityBombardment bombardment={unitAbility.bombardment} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillAbilityTooltip;
