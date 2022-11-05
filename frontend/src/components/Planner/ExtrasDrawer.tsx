import { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { AppContext } from '../../contexts/AppContext';
import BuildStorage from './BuildStorage';
import CharacterItems from './CharacterItems';
import BackgroundSkills from './BackgroundSkills';
import TopBar from './TopBar';
import useBulkMediaQueries from '../../hooks/useBulkMediaQueries';
import FactionEffects from './FactionEffects';

interface PropInterface {
  shortViewToggle: boolean;
  setShortViewToggle: Dispatch<SetStateAction<boolean>>;
}

const ExtrasDrawer = ({ shortViewToggle, setShortViewToggle }: PropInterface) => {
  const { state } = useContext(AppContext);
  const { tallWindow, isShortWidth, isShortHeight } = useBulkMediaQueries();
  const [open, setOpen] = useState(false);

  const isShort = isShortWidth || isShortHeight ? true : false;

  let drawerClass = 'flex flex-row place-content-evenly slide-out';
  if (open && isShort && shortViewToggle) {
    drawerClass += ' show max-h-[48vh]';
  } else if (open) {
    drawerClass += ' mt-1.5 show max-h-[20vh]';
  } else if (!open && isShort) {
    drawerClass += ' max-h-[0vh] hidden';
  } else {
    drawerClass += ' max-h-[0vh]';
  }

  useEffect(() => {
    setOpen(false);
  }, [isShort]);

  useEffect(() => {
    if (!isShort) {
      setOpen(tallWindow);
    } else {
      setOpen(false);
    }
  }, []);

  return (
    <div className="flex flex-col">
      <button
        className="w-3/4 mx-auto h-6 bg-gray-400/70 hover:bg-gray-300/60 mt-1 rounded-xl hover-scale"
        onClick={() => {
          setOpen(!open);
          if (isShort) {
            setShortViewToggle(!shortViewToggle);
          }
        }}
      >
        <p className="text-black text-center text-xl">{open ? '↓ Hide Extras ↓' : '↑ Show Extras ↑'}</p>
      </button>
      {isShort && open && <TopBar isMobile={true} />}
      <div className={drawerClass}>
        {state.characterData?.items && state.characterData?.items.length > 0 && <CharacterItems />}
        {state.characterData?.backgroundSkills && state.characterData.backgroundSkills.length > 0 && (
          <BackgroundSkills />
        )}
        {state.characterData?.factionEffects !== undefined && (
          <FactionEffects factionEffect={state.characterData?.factionEffects} />
        )}
        {!isShort && <BuildStorage />}
      </div>
    </div>
  );
};

export default ExtrasDrawer;
