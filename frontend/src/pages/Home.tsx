import ModSelector from '../components/CharacterSelect/ModSelector';
import FactionSelector from '../components/CharacterSelect/FactionSelector';
import CharacterSelector from '../components/CharacterSelect/CharacterSelector';
import { useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AppContext, AppContextActions } from '../contexts/AppContext';
import { useMediaQuery } from 'react-responsive';
import gameData from '../data/gameData';
import CompilationFilter from '../components/CharacterSelect/CompilationFilter';
import { CompGroupsInterface } from '../types/interfaces/GameInterface';

const Home = () => {
  const { state, dispatch } = useContext(AppContext);
  const { selectedMod } = state;
  const { mod, faction } = useParams();

  const isTabletOrMobileWidth = useMediaQuery({ maxWidth: 1365 });
  const isMobileWidth = useMediaQuery({ maxWidth: 1023 });

  useEffect(() => {
    if (mod !== undefined && faction !== undefined) {
      dispatch({
        type: AppContextActions.changeModFaction,
        payload: { selectedMod: mod, selectedFaction: faction },
      });
    }

    document.title = 'Total Warhammer Planner';
  }, []);

  useEffect(() => {
    if (state.characterData !== null) {
      dispatch({ type: AppContextActions.changeCharacterData, payload: { characterData: null } });
      dispatch({ type: AppContextActions.changeCharacterBuild, payload: { characterBuild: null } });
    }
  }, []);

  let modContainerWidth;
  if (isMobileWidth) {
    modContainerWidth = 'w-[100%] mt-3';
  } else if (isTabletOrMobileWidth) {
    modContainerWidth = 'w-[100%] mt-3';
  } else {
    modContainerWidth = 'w-[45%] mt-3';
  }
  const factionContainerWidth = isTabletOrMobileWidth ? 'w-[100%]' : 'w-[55%] mt-3';

  return (
    <div className="grow mt-1 bg-gray-700 w-full border border-gray-500 rounded-md px-3 pb-2 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-600">
      <div className="flex flex-row flex-wrap place-content-center">
        <ModSelector containerWidth={modContainerWidth} />
        <div
          className={
            'flex flex-col flex-nowrap max-h-[33rem] overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-60 ' +
            factionContainerWidth
          }
        >
          {gameData[selectedMod].compilationGroups !== undefined && (
            <CompilationFilter compGroups={gameData[selectedMod].compilationGroups as CompGroupsInterface} />
          )}
          <FactionSelector />
        </div>

        <CharacterSelector />
      </div>
    </div>
  );
};

export default Home;
