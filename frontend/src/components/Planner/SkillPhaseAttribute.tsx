import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import { AttributeInterface } from '../../types/interfaces/CharacterInterface';
import ReactImage from '../ReactImage';

interface PropInterface {
  attribute: AttributeInterface;
  index: number;
}

const SkillPhaseAttribute = ({ attribute, index }: PropInterface) => {
  const { state } = useContext(AppContext);
  const { selectedMod, selectedGame } = state;

  const vanillaGamePath = selectedGame === '2' ? 'vanilla2' : 'vanilla3';
  return (
    <div key={index} className="flex flex-row flex-nowrap">
      <ReactImage
        srcList={[
          `/imgs/${selectedMod}/campaign_ui/effect_bundles/attribute_${attribute.key}.webp`,
          `/imgs/${vanillaGamePath}/campaign_ui/effect_bundles/attribute_${attribute.key}.webp`,
          `/imgs/${selectedMod}/battle_ui/ability_icons/${attribute.key}.webp`,
          `/imgs/${vanillaGamePath}/battle_ui/ability_icons/${attribute.key}.webp`,
        ]}
        className="w-6 h-6"
        alt={`${attribute.key} icon`}
        w="24"
        h="24"
      />

      <p className="text-lg whitespace-pre-wrap ml-6">{attribute.description}</p>
    </div>
  );
};

export default SkillPhaseAttribute;
