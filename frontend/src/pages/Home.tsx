import ModSelector from '../components/CharacterSelect/ModSelector';
import FactionSelector from '../components/CharacterSelect/FactionSelector';
import CharacterSelector from '../components/CharacterSelect/CharacterSelector';

const Home = () => {
  return (
    <div className="grid auto-rows-min justify-items-stretch">
      <ModSelector />
      <FactionSelector />
      <CharacterSelector />
    </div>
  );
};

export default Home;
