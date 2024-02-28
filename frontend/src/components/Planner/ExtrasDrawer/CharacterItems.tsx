import { useContext } from 'react';
import { AppContext } from '../../../contexts/AppContext';
import BaseCell from '../BaseCell';

const CharacterItems = () => {
  const { state } = useContext(AppContext);
  const { selectedMod, highlightArray } = state;
  return (
    <div className="flex flex-col mt-1.5 mx-1 min-w-[14.5rem] max-w-[35rem] shadow-lg border border-gray-500 rounded">
      <h2 className="text-center text-3xl mt-1 text-gray-200 text-shadow">Quest Items</h2>
      <div className="flex flex-row flex-wrap w-full h-full pb-1 overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-600">
        {state.characterData?.items?.map((item, index) => {
          return (
            <div key={item.key} className={highlightArray?.items?.[index] ? 'rounded searchOutline m-auto' : 'm-auto'}>
              <BaseCell
                item={item}
                srcList={[
                  `/imgs/vanilla3/${item.ui_icon}.webp`,
                  `/imgs/${selectedMod}/${item.ui_icon}.webp`,
                  `/imgs/vanilla3/campaign_ui/skills/0_placeholder_skill.webp`,
                ]}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CharacterItems;
