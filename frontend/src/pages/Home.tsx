import FactionSelector from '../components/FactionSelector';

const Home = () => {
  return (
    <div>
      <h1 className="text-center text-2xl mb-2 text-gray-200">
        Select a Faction
      </h1>
      <FactionSelector />
    </div>
  );
};

export default Home;
