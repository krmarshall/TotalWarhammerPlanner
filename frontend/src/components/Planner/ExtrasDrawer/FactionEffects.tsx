import { FactionEffectInterface } from '../../../types/interfaces/CharacterInterface';
import BaseCell from '../BaseCell';

interface PropInterface {
  factionEffect: FactionEffectInterface;
}

const FactionEffects = ({ factionEffect }: PropInterface) => {
  const srcList = [
    `/imgs/${factionEffect.ui_icon.replace('.png', '')}.webp`,
    `/imgs/vanilla3/campaign_ui/skills/0_placeholder_skill.webp`,
  ];
  return (
    <div className="flex flex-col mx-1 mt-1.5 min-w-[14.5rem] max-w-[35rem] shadow-lg border border-gray-500 rounded">
      <h2 className="text-center text-3xl mt-1 text-gray-200 text-shadow">Faction Effects</h2>
      <div className="w-full mx-auto">
        <BaseCell factionEffect={factionEffect} thisSkillsCurrentPoints={0} previewSkillPoints={0} srcList={srcList} />
      </div>
    </div>
  );
};

export default FactionEffects;
