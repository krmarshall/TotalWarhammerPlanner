interface CharacterCellProps {
  key: string;
  char?: {
    name: string;
    spellLore: string;
  };
  charImage?: string;
  spellLore?: {
    image: string;
    shadow: string;
  };
  handleCharacterSelect: CallableFunction;
}

const CharacterCell = ({ key, char, charImage, spellLore, handleCharacterSelect }: CharacterCellProps) => {
  return (
    <li
      key={key}
      className="flex flex-col justify-around m-1 p-1 rounded-lg border shadow-lg shadow-gray-800/60 border-gray-500 hover:bg-gray-600"
      onClick={() => handleCharacterSelect(key)}
    >
      <h2 className="w-36 text-center text-xl text-gray-200 mb-2">{char?.name}</h2>
      <div className="flex flex-row justify-center relative">
        <img
          className="w-32 mb-1 drop-shadow-[0.1rem_0.1rem_0.5rem_rgba(0,0,0,0.7)]"
          draggable={false}
          src={charImage}
          alt={`${char?.name} icon`}
          height="96"
          width="96"
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
    </li>
  );
};

export default CharacterCell;
