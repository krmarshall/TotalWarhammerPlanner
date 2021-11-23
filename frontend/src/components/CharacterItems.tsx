import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import ItemCell from './ItemCell';

const CharacterItems = () => {
  const { state } = useContext(AppContext);
  return (
    <div className="flex flex-row my-2 h-full">
      <div className="flex flex-col justify-center">
        <h2 className="text-center text-3xl m-2 text-gray-200">Items: </h2>
      </div>
      {state.characterData?.items.map((item) => {
        return <ItemCell key={item.name} item={item} />;
      })}
    </div>
  );
};

export default CharacterItems;
