import { Suspense, useContext } from 'react';
import { useImage } from 'react-image';
import { AppContext } from '../../contexts/AppContext';
import { StatEffectInterface } from '../../types/interfaces/CharacterInterface';

interface PropInterface {
  effect: StatEffectInterface;
}

const SkillPhaseEffect = ({ effect }: PropInterface) => {
  const { state } = useContext(AppContext);
  const { selectedMod, selectedGame } = state;

  const vanillaGamePath = selectedGame === '2' ? 'vanilla2' : 'vanilla3';
  const imagePath = effect?.icon?.replace('.png', '.webp');
  const { src } = useImage({
    srcList: [`/imgs/${selectedMod}/skins/default/${imagePath}`, `/imgs/${vanillaGamePath}/skins/default/${imagePath}`],
  });
  return (
    <div className="flex flex-row flex-nowrap">
      <Suspense fallback={<div className="w-6 h-6"></div>}>
        <img src={src} className="w-6 h-6" alt={`${effect.stat} icon`} width="32" height="32" />
      </Suspense>

      <p className="text-lg whitespace-pre-wrap ml-6">{effect.description}</p>
    </div>
  );
};

export default SkillPhaseEffect;
