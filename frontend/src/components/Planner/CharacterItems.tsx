import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import ItemCell from './ItemCell';

const CharacterItems = () => {
  const { state } = useContext(AppContext);
  return (
    <div className="flex flex-col w-[25vw] shadow-lg border border-gray-500 rounded">
      <h2 className="text-center text-3xl m-2 text-gray-200 text-shadow">Quest Items</h2>
      <div className="flex flex-col w-full place-items-center overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-600">
        {state.characterData?.items?.map((item) => {
          return <ItemCell key={item.name} item={item} />;
        })}
      </div>
    </div>
  );
};

export default CharacterItems;
