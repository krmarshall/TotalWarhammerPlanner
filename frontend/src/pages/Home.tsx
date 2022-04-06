import GameSelector from '../components/GameSelector';
import FactionSelector from '../components/FactionSelector';
// import CharacterSelector from '../components/CharacterSelector';

const Home = () => {
  return (
    <div className="grid auto-rows-min justify-items-stretch">
      <GameSelector />
      <FactionSelector />
      {/* <CharacterSelector /> */}
    </div>
  );
};

export default Home;
