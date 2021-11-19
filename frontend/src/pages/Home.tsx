import CharacterSelector from '../components/CharacterSelector';
import FactionSelector from '../components/FactionSelector';

const Home = () => {
  return (
    <div className="grid auto-rows-min justify-items-stretch">
      <FactionSelector />

      <CharacterSelector />
    </div>
  );
};

export default Home;
