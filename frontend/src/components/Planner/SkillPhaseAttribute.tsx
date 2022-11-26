import { AttributeInterface } from '../../types/interfaces/CharacterInterface';
import ReactImage from '../ReactImage';

interface PropInterface {
  attribute: AttributeInterface;
  index: number;
}

const SkillPhaseAttribute = ({ attribute, index }: PropInterface) => {
  return (
    <div key={index} className="flex flex-row flex-nowrap">
      <ReactImage
        srcList={[`/imgs/${attribute.icon}.webp`, `/imgs/vanilla3/campaign_ui/skills/0_placeholder_skill.webp`]}
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
