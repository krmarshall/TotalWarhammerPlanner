import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import ItemCell from './ItemCell';

const CharacterItems = () => {
  const { state } = useContext(AppContext);
  return (
    <div className="flex flex-col mx-4 min-w-[16.5rem] max-w-[30rem] shadow-lg border border-gray-500 rounded">
      <h2 className="text-center text-3xl mt-1 text-gray-200 text-shadow">Quest Items</h2>
      <div className="flex flex-row flex-wrap w-full pb-1 overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-600">
        {state.characterData?.items?.map((item) => {
          return <ItemCell key={item.name} item={item} />;
        })}
      </div>
    </div>
  );
};

export default CharacterItems;
