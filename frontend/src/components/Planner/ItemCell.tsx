import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import { ItemInterface } from '../../types/interfaces/CharacterInterface';
import SkillEffect from './SkillEffect';

interface SkillCellPropsInterface {
  item: ItemInterface;
}

const ItemCell = ({ item }: SkillCellPropsInterface) => {
  const { state } = useContext(AppContext);
  const { selectedGame } = state;
  const imagePath = item.image_path.replace('.png', '.webp');
  return (
    <td className="flex flex-row w-max m-1 -ml-2 px-3 py-1 rounded-lg hover:bg-gray-600 select-none">
      <div className="flex flex-row has-tooltip">
        <img
          src={`/imgs/${selectedGame}/campaign_ui/skills/${imagePath}`}
          className="w-16 h-16"
          draggable={false}
          alt="itemIcon"
          width="64"
          height="64"
        />
        <div className="flex flex-col justify-center m-auto">
          <h2 className="w-32 text-center text-xl text-gray-200">{item.name}</h2>
        </div>
        <span className="tooltip text-center max-w-lg">
          <div className="p-2 rounded border border-gray-400 shadow-lg text-gray-50 bg-gray-600">
            <h3 className="text-gray-50 text-2xl">{item?.name}</h3>
            {item?.description.trim() && (
              <h4 className="text-gray-50 opacity-70 text-lg">&quot;{item?.description.trim()}&quot;</h4>
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
        </span>
      </div>
    </td>
  );
};

export default ItemCell;
