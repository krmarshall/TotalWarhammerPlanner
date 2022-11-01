import ModSelector from '../components/CharacterSelect/ModSelector';
import FactionSelector from '../components/CharacterSelect/FactionSelector';
import CharacterSelector from '../components/CharacterSelect/CharacterSelector';
import GameToggle from '../components/CharacterSelect/GameToggle';
import { useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AppContext, AppContextActions } from '../contexts/AppContext';
import { useMediaQuery } from 'react-responsive';

const Home = () => {
  const { dispatch } = useContext(AppContext);
  const { mod, faction } = useParams();

  const isTabletOrMobileWidth = useMediaQuery({ maxWidth: 1365 });
  const isMobileWidth = useMediaQuery({ maxWidth: 1023 });

  useEffect(() => {
    if (mod !== undefined && faction !== undefined) {
      const game = mod?.includes('2') ? '2' : '3';
      dispatch({
        type: AppContextActions.changeGameModFaction,
        payload: { selectedGame: game, selectedMod: mod, selectedFaction: faction },
      });
    }
  }, []);

  let modContainerWidth;
  if (isMobileWidth) {
    modContainerWidth = 'w-[100%] mt-2';
  } else if (isTabletOrMobileWidth) {
    modContainerWidth = 'w-[100%] mt-16';
  } else {
    modContainerWidth = 'w-[35%] mt-10';
  }
  const factionContainerWidth = isTabletOrMobileWidth ? 'w-[100%]' : 'w-[65%] mt-10';
  const gameToggleDisplay = isMobileWidth ? '' : 'absolute';

  return (
    <div className="grow mt-1 bg-gray-700 w-full border border-gray-500 rounded-md px-2 py-2 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-600">
      <div className="flex flex-row flex-wrap place-content-center">
        <GameToggle display={gameToggleDisplay} />
        <ModSelector containerWidth={modContainerWidth} />
        <FactionSelector containerWidth={factionContainerWidth} />
        <CharacterSelector />
      </div>
    </div>
  );
};

export default Home;
