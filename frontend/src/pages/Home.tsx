import ModSelector from '../components/CharacterSelect/ModSelector';
import FactionSelector from '../components/CharacterSelect/FactionSelector';
import CharacterSelector from '../components/CharacterSelect/CharacterSelector';
import GameToggle from '../components/CharacterSelect/GameToggle';

const Home = () => {
  return (
    <div className="h-[88vh] bg-gray-700 w-full border border-gray-500 rounded-md px-2 py-2 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-600">
      <div className="grid auto-rows-min justify-items-stretch">
        <GameToggle />
        <ModSelector />
        <FactionSelector />
        <CharacterSelector />
      </div>
    </div>
  );
};

export default Home;
