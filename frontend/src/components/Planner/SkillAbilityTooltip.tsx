import { Fragment } from 'react';
import { AbilityInterface } from '../../types/interfaces/CharacterInterface';
import cooldownImg from '../../imgs/other/icon_cooldown_26.webp';
import windsImg from '../../imgs/other/winds_ui_replenish_battle_ph.webp';
import chargesImg from '../../imgs/other/icon_uses.webp';
import SkillPhase from './SkillPhase';

interface SkillAbilityTooltipPropInterface {
  ability: AbilityInterface;
}

const SkillAbilityTooltip = ({ ability }: SkillAbilityTooltipPropInterface) => {
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
    if (phase.stat_effects || (phase.attributes !== undefined && phase.attributes.length > 0)) {
      hasPhases = true;
    }
  });
  return (
    <div className="flex-grow h-fit min-w-[15vw] ml-2 p-2 rounded border border-gray-400 shadow-lg text-lg text-gray-50 bg-gray-600">
      <div className="flex flex-row ml-2">
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
          <h5 className="text-left w-20">Type:</h5>
          <p>{unitAbility.type.description}</p>
        </div>
      )}
      {unitAbility.active_time !== undefined && unitAbility.active_time > 0 && (
        <div className="flex flex-row">
          <h5 className="text-left w-20">Duration:</h5>
          <p>{unitAbility.active_time}s</p>
        </div>
      )}
      {unitAbility.wind_up_time !== undefined && unitAbility.wind_up_time > 0 && (
        <div className="flex flex-row">
          <h5 className="text-left w-20">Wind Up:</h5>
          <p>{unitAbility.wind_up_time}s</p>
        </div>
      )}
      {doesTarget && (
        <div className="flex flex-row">
          <h5 className="text-left w-20">Targets:</h5>
          <p>{target}</p>
        </div>
      )}
      {unitAbility.target_intercept_range !== undefined && unitAbility.target_intercept_range > 0 && (
        <div className="flex flex-row">
          <h5 className="text-left w-20">Cast Range:</h5>
          <p>{unitAbility.target_intercept_range}</p>
        </div>
      )}
      {unitAbility.effect_range !== undefined && unitAbility.effect_range > 0 && (
        <div className="flex flex-row">
          <h5 className="text-left w-20">Effect range:</h5>
          <p>{unitAbility.effect_range}</p>
        </div>
      )}
      {unitAbility.ui_effects && (
        <div className="text-left">
          <h5 className="w-20">Effects:</h5>
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
        <div className="flex flex-row">
          <h5 className="text-left w-20">Phases:</h5>
          <div>
            {unitAbility?.phases?.map((phase, index) => {
              let render = false;
              if (phase.stat_effects || (phase.attributes !== undefined && phase.attributes.length > 0)) {
                render = true;
              }
              if (render) {
                return <SkillPhase key={index} phase={phase} />;
              } else {
                return <Fragment></Fragment>;
              }
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillAbilityTooltip;
