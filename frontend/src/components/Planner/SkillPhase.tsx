import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import { PhaseInterface } from '../../types/interfaces/CharacterInterface';
import SkillPhaseAttribute from './SkillPhaseAttribute';
import SkillPhaseEffect from './SkillPhaseEffect';

interface SkillPhaseProps {
  phase: PhaseInterface;
}

const SkillPhase = ({ phase }: SkillPhaseProps) => {
  const { state } = useContext(AppContext);
  const { selectedGame } = state;
  const type = phase.effect_type === 'positive' ? 'Buff' : 'Debuff';
  const imbueBoth = phase.imbue_magical && phase.imbue_ignition ? true : false;
  return (
    <div className="w-auto rounded-lg border border-gray-500 mb-2 p-2 shadow-lg">
      {phase.duration !== undefined && phase.duration > 0 && (
        <div className="flex flex-row">
          <h5 className="text-left w-24">Duration:</h5>
          <p className="my-auto ml-1">{phase.duration}s</p>
        </div>
      )}
      {phase.effect_type && (
        <div className="flex flex-row">
          <h5 className="text-left w-24">Effect Type:</h5>
          <p className="my-auto ml-1">{type}</p>
        </div>
      )}
      {phase.recharge_time !== undefined && phase.recharge_time > 0 && (
        <div className="flex flex-row">
          <h5 className="text-left w-24">Recharge Time:</h5>
          <p className="my-auto ml-1">{phase.recharge_time}</p>
        </div>
      )}
      {phase.fatigue_change_ratio !== undefined && (
        <div className="flex flex-row">
          <h5 className="text-left w-24">Fatigue:</h5>
          <p className="my-auto ml-1">{phase.fatigue_change_ratio * 100}%</p>
        </div>
      )}
      {phase.mana_regen_mod !== undefined && phase.mana_regen_mod > 0 && (
        <div className="flex flex-row">
          <h5 className="text-left w-24">Power Recharge:</h5>
          <p className="my-auto ml-1">
            {phase.mana_regen_mod > 0 ? '+' : '-'}
            {phase.mana_regen_mod * 100}%
          </p>
        </div>
      )}
      {phase.mana_max_depletion_mod !== undefined && phase.mana_max_depletion_mod > 0 && (
        <div className="flex flex-row">
          <h5 className="text-left w-24">Reserves:</h5>
          <p className="my-auto ml-1">
            {phase.mana_max_depletion_mod > 0 ? '+' : '-'}
            {phase.mana_max_depletion_mod} Per Second
          </p>
        </div>
      )}
      {phase.ability_recharge_change !== undefined && (
        <div className="flex flex-row">
          <h5 className="text-left w-24">Decrease Cooldowns:</h5>
          <p className="my-auto ml-1">{phase.ability_recharge_change}s</p>
        </div>
      )}
      {phase.resurrect !== undefined && phase.resurrect === true && (
        <div className="flex flex-row">
          <h5 className="text-left w-24">Resurrects:</h5>
          <p className="my-auto ml-1">Yes</p>
        </div>
      )}
      {phase.hp_change_frequency !== undefined && phase.hp_change_frequency !== 1 && (
        <div className="flex flex-row">
          <h5 className="text-left w-24">HP Change Freq:</h5>
          <p className="my-auto ml-1">{phase.hp_change_frequency}s</p>
        </div>
      )}
      {selectedGame === '2' && phase.heal_amount !== undefined && phase.heal_amount > 0 && (
        <div className="flex flex-row">
          <h5 className="text-left w-24">Heal:</h5>
          <p className="my-auto ml-1">{phase.heal_amount}</p>
        </div>
      )}
      {selectedGame === '3' && phase.heal_amount !== undefined && phase.heal_amount > 0 && (
        <div className="flex flex-row">
          <h5 className="text-left w-24">Heal:</h5>
          <p className="my-auto ml-1">{phase.heal_amount * 100}%</p>
        </div>
      )}
      {phase.barrier_heal_amount !== undefined && phase.barrier_heal_amount > 0 && (
        <div className="flex flex-row">
          <h5 className="text-left w-24">Barrier Heal:</h5>
          <p className="my-auto ml-1">{phase.barrier_heal_amount * 100}%</p>
        </div>
      )}
      {phase.damage_amount !== undefined && phase.damage_amount > 0 && (
        <div className="flex flex-row">
          <h5 className="text-left w-24">Damage:</h5>
          <p className="my-auto ml-1">{phase.damage_amount} Per Entity</p>
        </div>
      )}
      {phase.damage_chance !== undefined && phase.damage_chance > 0 && (
        <div className="flex flex-row">
          <h5 className="text-left w-24">Dmg Chance:</h5>
          <p className="my-auto ml-1">{phase.damage_chance * 100}% Per Entity</p>
        </div>
      )}
      {phase.max_damaged_entities !== undefined && phase.max_damaged_entities > 0 && (
        <div className="flex flex-row">
          <h5 className="text-left w-24">Max Entities:</h5>
          <p className="my-auto ml-1">{phase.max_damaged_entities}</p>
        </div>
      )}
      {imbueBoth && (
        <div className="flex flex-row">
          <h5 className="text-left w-24">Imbues:</h5>
          <img
            src="/imgs/vanilla3/skins/default/modifier_icon_magical.webp"
            className="h-5 w-5 my-auto"
            alt="flaming attack"
            width="24"
            height="24"
          />
          <img
            src="/imgs/vanilla3/skins/default/modifier_icon_flaming.webp"
            className="h-5 w-5 my-auto mr-1"
            alt="flaming attack"
            width="24"
            height="24"
          />
          <p className="my-auto ml-1">Magical and Flaming Attacks</p>
        </div>
      )}
      {!imbueBoth && phase.imbue_magical !== undefined && phase.imbue_magical === true && (
        <div className="flex flex-row">
          <h5 className="text-left w-24">Imbues:</h5>
          <img
            src="/imgs/vanilla3/skins/default/modifier_icon_magical.webp"
            className="h-5 w-5 my-auto mr-1"
            alt="flaming attack"
            width="24"
            height="24"
          />
          <p className="my-auto ml-1">Magical Attacks</p>
        </div>
      )}
      {!imbueBoth && phase.imbue_ignition !== undefined && phase.imbue_ignition === true && (
        <div className="flex flex-row">
          <h5 className="text-left w-24">Imbues:</h5>
          <img
            src="/imgs/vanilla3/skins/default/modifier_icon_flaming.webp"
            className="h-5 w-5 my-auto mr-1"
            alt="flaming attack"
            width="24"
            height="24"
          />
          <p className="my-auto ml-1">Flaming Attacks</p>
        </div>
      )}
      {phase.imbue_contact !== undefined && (
        <div className="text-left">
          <h5 className="w-24">Imbue Contact:</h5>
          <SkillPhase phase={phase.imbue_contact} />
        </div>
      )}
      {phase.replenish_ammo !== undefined && phase.replenish_ammo > 0 && (
        <div className="flex flex-row">
          <h5 className="text-left w-24">Replenish Ammo:</h5>
          <p className="my-auto ml-1">{phase.replenish_ammo}%</p>
        </div>
      )}
      {phase.cant_move && (
        <div className="flex flex-row">
          <h5 className="text-left w-24">Can&apos;t Move:</h5>
          <p className="my-auto ml-1">Yes</p>
        </div>
      )}
      {phase.stat_effects && (
        <div className="text-left">
          <h5 className="w-24">Stat Effects:</h5>
          {phase.stat_effects.map((effect, index) => {
            return <SkillPhaseEffect key={index} effect={effect} />;
          })}
        </div>
      )}
      {phase.attributes !== undefined && phase.attributes.length > 0 && (
        <div className="text-left">
          <h5 className="w-24">Attributes:</h5>
          {phase.attributes.map((attr, index) => {
            return <SkillPhaseAttribute key={index} attribute={attr} index={index} />;
          })}
        </div>
      )}
    </div>
  );
};

export default SkillPhase;
