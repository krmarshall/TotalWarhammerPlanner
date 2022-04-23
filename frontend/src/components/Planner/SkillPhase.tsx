import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import { PhaseInterface } from '../../types/interfaces/CharacterInterface';
import SkillPhaseAttribute from './SkillPhaseAttribute';

interface SkillPhaseProps {
  phase: PhaseInterface;
}

const SkillPhase = ({ phase }: SkillPhaseProps) => {
  const { state } = useContext(AppContext);
  const { selectedGame } = state;

  const type = phase.effect_type === 'positive' ? 'Buff' : 'Debuff';
  return (
    <div className="rounded-lg border border-gray-500 mb-2 p-2 shadow-lg">
      {phase.duration !== undefined && phase.duration > 0 && (
        <div className="flex flex-row">
          <h5 className="text-left w-20">Duration:</h5>
          <p>{phase.duration}</p>
        </div>
      )}
      {phase.effect_type && (
        <div className="flex flex-row">
          <h5 className="text-left w-20">Effect Type:</h5>
          <p>{type}</p>
        </div>
      )}
      {phase.recharge_time !== undefined && phase.recharge_time > 0 && (
        <div className="flex flex-row">
          <h5 className="text-left w-20">Recharge Time:</h5>
          <p>{phase.recharge_time}</p>
        </div>
      )}
      {phase.mana_max_depletion_mod !== undefined && phase.mana_max_depletion_mod > 0 && (
        <div className="flex flex-row">
          <h5 className="text-left w-20">Mana Max Depletion:</h5>
          <p>{phase.mana_max_depletion_mod}</p>
        </div>
      )}
      {phase.fatigue_change_ratio !== undefined && phase.fatigue_change_ratio > 0 && (
        <div className="flex flex-row">
          <h5 className="text-left w-20">Fatigue Change Ratio:</h5>
          <p>{phase.fatigue_change_ratio}</p>
        </div>
      )}
      {phase.mana_regen_mod !== undefined && phase.mana_regen_mod > 0 && (
        <div className="flex flex-row">
          <h5 className="text-left w-20">Mana Regen Mod:</h5>
          <p>{phase.mana_regen_mod}</p>
        </div>
      )}
      {phase.stat_effects && (
        <div className="text-left">
          <h5 className="w-20">Stat Effects:</h5>
          {phase.stat_effects.map((effect, index) => {
            const imagePath = effect?.icon?.replace('.png', '.webp');
            return (
              <div key={index} className="flex flex-row flex-nowrap">
                <img
                  src={`/imgs/${selectedGame}/skins/default/${imagePath}`}
                  className="w-6 h-6"
                  alt={`${effect.stat} icon`}
                  width="32"
                  height="32"
                />
                <p className="text-lg whitespace-pre-wrap ml-6">{effect.description}</p>
              </div>
            );
          })}
        </div>
      )}
      {phase.attributes !== undefined && phase.attributes.length > 0 && (
        <div className="text-left">
          <h5 className="w-20">Attributes:</h5>
          {phase.attributes.map((attr, index) => {
            return <SkillPhaseAttribute key={index} attribute={attr} index={index} />;
          })}
        </div>
      )}
    </div>
  );
};

export default SkillPhase;
