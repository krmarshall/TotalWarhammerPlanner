import ReactImage from '../ReactImage';
import placeholderImg from '../../imgs/other/0placeholderInvis.webp';
import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';

interface CharacterCellProps {
  charKey: string;
  char?: {
    name: string;
    spellLore?: string;
  };
  charImage?: string;
  spellLore?: {
    image: string;
    shadow: string;
  };
  handleCharacterSelect: CallableFunction;
}

const CharacterCell = ({ charKey, char, charImage, spellLore, handleCharacterSelect }: CharacterCellProps) => {
  const { state } = useContext(AppContext);
  const { selectedMod, selectedFaction } = state;
  return (
    <li className="m-1 rounded-lg border shadow-lg shadow-gray-800/60 border-gray-500 hover:bg-gray-600 hover-scale">
      <a
        href={`/planner/${selectedMod}/${selectedFaction}/${charKey}`}
        className="w-full h-full p-1 flex flex-col justify-around"
        onClick={(event) => handleCharacterSelect(event, charKey)}
        draggable={false}
      >
        <h2 className="w-36 text-center text-2xl text-shadow text-gray-200 mb-2">{char?.name}</h2>
        <div className="flex flex-row justify-center relative">
          <ReactImage
            srcList={[charImage as string, placeholderImg]}
            className="w-32 mb-1 drop-shadow-[0.1rem_0.1rem_0.5rem_rgba(0,0,0,0.7)]"
            alt={`${char?.name} icon`}
            w="96"
            h="96"
          />
          {spellLore && (
            <img
              style={{ filter: spellLore.shadow }}
              className={`w-12 h-12 absolute bottom-0 mb-2 ml-0.5`}
              draggable={false}
              src={spellLore.image}
              alt={`${char?.spellLore} icon`}
            />
          )}
        </div>
      </a>
    </li>
  );
};

export default CharacterCell;
