import { AttributeInterface } from '../../../types/interfaces/CharacterInterface';

interface PropInterface {
  attribute: AttributeInterface;
}

const AttributeTooltip = ({ attribute }: PropInterface) => {
  return (
    <div className="w-fit max-w-[24rem] mb-2 rounded-lg border border-gray-400 p-2 shadow-lg bg-gray-600 text-gray-50">
      <div className="flex flex-row flex-nowrap">
        <img
          src={`/imgs/${attribute.icon}.webp`}
          alt={`${attribute.key} icon`}
          width="24"
          height="24"
          className="w-8 h-8 my-auto mx-1"
        />
        <h5 className="text-2xl ml-1">{attribute.description}</h5>
      </div>
      <p className="text-lg text-left whitespace-pre-wrap">{attribute.bullet_text}</p>
    </div>
  );
};

export default AttributeTooltip;
