import { useContext, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { AppContext } from '../../contexts/AppContext';
import BuildStorage from './BuildStorage';
import CharacterItems from './CharacterItems';
import BackgroundSkills from './BackgroundSkills';

const ExtrasDrawer = () => {
  const { state } = useContext(AppContext);
  const tallWindow = useMediaQuery({ minHeight: 920 });
  const [open, setOpen] = useState(tallWindow);
  return (
    <>
      <button
        className="w-full bg-gray-400 hover:bg-gray-300 mt-1 rounded-xl"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <p className="text-black text-center text-xl">{open ? '↓ Hide Extras ↓' : '↑ Show Extras ↑'}</p>
      </button>
      {open && (
        <div className="flex flex-row h-44 mt-1 place-content-evenly">
          {state.characterData?.items && state.characterData?.items.length > 0 && <CharacterItems />}
          {state.characterData?.backgroundSkills && state.characterData.backgroundSkills.length > 0 && (
            <BackgroundSkills />
          )}
          <BuildStorage />
        </div>
      )}
    </>
  );
};

export default ExtrasDrawer;
