import { Fragment } from 'react';
import { AbilityInterface } from '../types/interfaces/CharacterInterface';
import cooldownImg from '../imgs/other/icon_cooldown_26.webp';
import windsImg from '../imgs/other/winds_ui_replenish_battle_ph.webp';
import chargesImg from '../imgs/other/icon_uses.webp';
import SkillEffect from './SkillEffect';

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
  return (
    <Fragment>
      <div className="flex flex-row ml-4">
        <h3 className="flex-grow text-left text-xl">{unitAbility.description}</h3>
        {unitAbility.num_uses !== undefined && unitAbility.num_uses > 0 && (
          <div className="flex flex-row">
            <img className="w-6 h-6" src={chargesImg} alt="charges icon" width="24" height="24" />
            <div className="ml-1 flex flex-col justify-center">
              <p className="text-center">{unitAbility.num_uses}</p>
            </div>
          </div>
        )}
        {unitAbility.mana_cost !== undefined && unitAbility.mana_cost > 0 && (
          <div className="flex flex-row">
            <img className="w-6 h-6" src={windsImg} alt="winds icon" width="24" height="24" />
            <div className="ml-1 flex flex-col justify-center">
              <p className="text-center">{unitAbility.mana_cost}</p>
            </div>
          </div>
        )}
        {unitAbility.recharge_time !== undefined && unitAbility.recharge_time > 0 && (
          <div className="flex flex-row">
            <img className="w-6 h-6" src={cooldownImg} alt="cooldown icon" width="24" height="24" />
            <div className="ml-1 flex flex-col justify-center">
              <p className="text-center">{unitAbility.recharge_time}</p>
            </div>
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
          <p>{unitAbility.active_time}</p>
        </div>
      )}
      {doesTarget && (
        <div className="flex flex-row">
          <h5 className="text-left w-20">Targets:</h5>
          <p>{target}</p>
        </div>
      )}
      {unitAbility.target_intercept_range && (
        <div className="flex flex-row">
          <h5 className="text-left w-20">Cast Range:</h5>
          <p>{unitAbility.target_intercept_range}</p>
        </div>
      )}
      {/* {ability.effectRange && (
        <div className="flex flex-row">
          <h5 className="text-left w-20">Effect range:</h5>
          <p>{ability.effectRange}</p>
        </div>
      )} */}
      {unitAbility.ui_effects && (
        <div className="text-left">
          <h5 className="w-20">Effects:</h5>
          {unitAbility.ui_effects.map((skillEffect, index) => {
            const positive = skillEffect.description.includes('➕');
            let effectClassName = 'text-lg whitespace-pre-wrap ml-6 ';
            effectClassName += positive ? 'text-green-400' : 'text-red-400';
            return (
              <p key={index} className={effectClassName}>
                {skillEffect.description}
              </p>
            );
          })}
        </div>
      )}
      {/* {unitAbility.phases && (
        <div className="flex flex-row">
          <h5 className="text-left w-20">Effects:</h5>
          <div>
            {ability.effects.map((skillEffect, index) => {
              return <SkillEffect key={index} skillEffect={skillEffect} />;
            })}
          </div>
        </div>
      )} */}
    </Fragment>
  );
};

export default SkillAbilityTooltip;
