import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import { AbilityInterface, ItemInterface } from '../../types/interfaces/CharacterInterface';
import ReactImage from '../ReactImage';
import SkillAbilityTooltip from './SkillAbilityTooltip';
import SkillEffect from './SkillEffect';
import TooltipWrapper from './TooltipWrapper';

interface SkillCellPropsInterface {
  item: ItemInterface;
}

const ItemCell = ({ item }: SkillCellPropsInterface) => {
  const { state } = useContext(AppContext);
  const { selectedMod, selectedGame } = state;

  const relatedAbilities: Array<AbilityInterface> = [];
  item.effects?.forEach((effect) => {
    if (effect.related_abilities) {
      relatedAbilities.push(...effect.related_abilities);
    }
  });

  const fontSize = item.name.length < 28 ? 'text-xl' : 'text-base';

  const vanillaGamePath = selectedGame === '2' ? 'vanilla2' : 'vanilla3';
  const imagePath = item.image_path.replace('.png', '.webp');
  return (
    <TooltipWrapper
      tooltip={
        <span className="text-center flex flex-row w-max">
          <div className="h-fit min-w-[15vw] p-2 rounded border border-gray-400 shadow-lg text-gray-50 bg-gray-600">
            <h3 className="text-gray-50 text-2xl">{item?.name}</h3>
            {item?.description.trim() && (
              <h4 className="text-gray-50 opacity-70 text-lg max-w-fit">&quot;{item?.description.trim()}&quot;</h4>
            )}
            {item?.unlocked_at_rank && (
              <p className="text-yellow-400 text-lg">Available at rank {item?.unlocked_at_rank}</p>
            )}
            <div>
              {item.effects?.map((itemEffect, index) => {
                return <SkillEffect key={index} skillEffect={itemEffect} />;
              })}
            </div>
          </div>
          {relatedAbilities.length !== 0 && <SkillAbilityTooltip ability={relatedAbilities[0]} />}
        </span>
      }
    >
      <div className="flex flex-row w-max m-auto rounded-lg drop-shadow-lg hover-scale bg-no-repeat bg-cover bg-[url(/imgs/other/skills_tab_frame.webp)] hover:bg-[url(/imgs/other/skills_tab_frame_hover.webp)]">
        <ReactImage
          srcList={[
            `/imgs/${selectedMod}/campaign_ui/skills/${imagePath}`,
            `/imgs/${vanillaGamePath}/campaign_ui/skills/${imagePath}`,
          ]}
          className="w-[4.5rem] h-[4.5rem] drop-shadow-lg my-auto"
          alt="itemIcon"
          w="64"
          h="64"
        />

        <div className="flex flex-col justify-center">
          <h2 className={`w-[8.5rem] text-center text-gray-200 text-shadow z-10 ${fontSize}`}>{item.name}</h2>
        </div>
        <div className="invisible w-4 pl-0.5">spacer</div>
      </div>
    </TooltipWrapper>
  );
};

export default ItemCell;
