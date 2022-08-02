import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import BuildStorage from './BuildStorage';
import CharacterItems from './CharacterItems';
import BackgroundSkills from './BackgroundSkills';

const ExtrasDrawer = () => {
  const { state } = useContext(AppContext);
  return (
    <div className="h-[17.5vh] flex flex-row place-content-evenly mt-4">
      {state.characterData?.items && state.characterData?.items.length > 0 && <CharacterItems />}
      {state.characterData?.backgroundSkills && state.characterData.backgroundSkills.length > 0 && <BackgroundSkills />}
      <BuildStorage />
    </div>
  );
};

export default ExtrasDrawer;
