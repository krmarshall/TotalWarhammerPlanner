import GameSelector from '../components/CharacterSelect/GameSelector';
import FactionSelector from '../components/CharacterSelect/FactionSelector';
import CharacterSelector from '../components/CharacterSelect/CharacterSelector';

const Home = () => {
  return (
    <div className="grid auto-rows-min justify-items-stretch">
      <GameSelector />
      <FactionSelector />
      <CharacterSelector />
    </div>
  );
};

export default Home;
