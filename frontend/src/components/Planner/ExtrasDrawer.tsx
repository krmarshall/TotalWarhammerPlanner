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

  let drawerClass = 'flex flex-row place-content-evenly';
  if (open) {
    drawerClass += ' h-44 mt-1.5 show';
  } else {
    drawerClass += ' h-0';
  }

  return (
    <>
      <button
        className="w-3/4 mx-auto h-6 bg-gray-400/70 hover:bg-gray-300/60 mt-1 rounded-xl hover-scale"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <p className="text-black text-center text-xl">{open ? '↓ Hide Extras ↓' : '↑ Show Extras ↑'}</p>
      </button>
      <div className={drawerClass} id="slide-out">
        {state.characterData?.items && state.characterData?.items.length > 0 && <CharacterItems />}
        {state.characterData?.backgroundSkills && state.characterData.backgroundSkills.length > 0 && (
          <BackgroundSkills />
        )}
        <BuildStorage />
      </div>
    </>
  );
};

export default ExtrasDrawer;
