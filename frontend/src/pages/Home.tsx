import { useState } from 'react';
import CharacterSelector from '../components/CharacterSelector';
import FactionSelector from '../components/FactionSelector';

const Home = () => {
  const [selectedFaction, setSelectedFaction] = useState('beastmen');
  return (
    <div>
      <h1 className="text-center text-2xl mb-2 text-gray-200">Factions</h1>
      <FactionSelector selectedFaction={selectedFaction} setSelectedFaction={setSelectedFaction} />

      <CharacterSelector selectedFaction={selectedFaction} />
    </div>
  );
};

export default Home;
