import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../contexts/AppContext';
import { AbilityInterface, ItemInterface } from '../../types/interfaces/CharacterInterface';
import ReactImage from '../ReactImage';
import SkillAbilityTooltip from './SkillAbilityTooltip';
import SkillEffect from './SkillEffect';
import TooltipWrapper from './TooltipWrapper';
import ctrlImg from '../../imgs/other/ctrlKey.webp';

interface SkillCellPropsInterface {
  item: ItemInterface;
}

const ItemCell = ({ item }: SkillCellPropsInterface) => {
  const { state } = useContext(AppContext);
  const { selectedMod, selectedGame } = state;
  const [ctrCounter, setCtrCounter] = useState(0);

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === 'Control') {
        if (ctrCounter + 1 < relatedAbilities.length) {
          setCtrCounter(ctrCounter + 1);
        } else {
          setCtrCounter(0);
        }
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [ctrCounter]);

  const relatedAbilities: Array<AbilityInterface> = [];
  const relatedAbilitiesKeys: Array<string> = [];
  item?.effects?.forEach((effect) => {
    if (effect.related_abilities) {
      effect.related_abilities.forEach((ability) => {
        let keyCheck = ability.unit_ability.key;
        if (keyCheck.endsWith('_upgraded')) {
          keyCheck = keyCheck.replace(/_upgraded$/, '');
        }
        if (!relatedAbilitiesKeys.includes(keyCheck)) {
          relatedAbilities.push(ability);
          relatedAbilitiesKeys.push(keyCheck);
        }
      });
    }
  });

  const fontSize = item.name.length < 28 ? 'text-xl' : 'text-base';

  const vanillaGamePath = selectedGame === '2' ? 'vanilla2' : 'vanilla3';
  const imagePath = item.image_path.replace('.png', '.webp');
  return (
    <TooltipWrapper
      tooltip={
        <span className="text-center flex flex-row w-max">
          <div className="flex flex-col">
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
            {relatedAbilities.length > 1 && (
              <div className="h-fit w-fit m-2 mx-auto p-2 rounded border border-gray-400 shadow-lg text-xl text-gray-50 bg-gray-600">
                <p>
                  Showing ability {ctrCounter + 1}/{relatedAbilities.length}
                </p>
                <p>
                  Press <img src={ctrlImg} alt="ctrl key" className="w-8 h-8 inline m-auto" width="80" height="80" /> to
                  cycle the displayed ability
                </p>
              </div>
            )}
          </div>

          {relatedAbilities.length !== 0 &&
            relatedAbilities.map((ability, index) => {
              if (index !== ctrCounter) {
                return;
              }
              return <SkillAbilityTooltip key={index} ability={ability} />;
            })}
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
