import { useContext } from 'react';
import { useImage } from 'react-image';
import { AppContext } from '../../contexts/AppContext';
import { AttributeInterface } from '../../types/interfaces/CharacterInterface';

interface PropInterface {
  attribute: AttributeInterface;
  index: number;
}

const SkillPhaseAttribute = ({ attribute, index }: PropInterface) => {
  const { state } = useContext(AppContext);
  const { selectedMod } = state;
  const { src } = useImage({
    srcList: [
      `/imgs/${selectedMod}/campaign_ui/effect_bundles/attribute_${attribute.key}.webp`,
      `/imgs/${selectedMod}/battle_ui/ability_icons/${attribute.key}.webp`,
    ],
  });
  return (
    <div key={index} className="flex flex-row flex-nowrap">
      <img src={src} className="w-6 h-6" alt={`${attribute.key} icon`} width="32" height="32" />
      <p className="text-lg whitespace-pre-wrap ml-6">{attribute.description}</p>
    </div>
  );
};

export default SkillPhaseAttribute;
