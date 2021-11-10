import { useState } from 'react';
import CharacterSelector from '../components/CharacterSelector';
import FactionSelector from '../components/FactionSelector';

const Home = () => {
  const [selectedFaction, setSelectedFaction] = useState('beastmen');
  return (
    <div className="grid auto-rows-min justify-items-stretch">
      <FactionSelector selectedFaction={selectedFaction} setSelectedFaction={setSelectedFaction} />

      <CharacterSelector selectedFaction={selectedFaction} />
    </div>
  );
};

export default Home;
