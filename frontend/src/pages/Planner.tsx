import { Fragment, useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/api';
import { AppContext, AppContextActions } from '../contexts/AppContext';
import { createCharacterBuildFromArray, createEmptyCharacterBuild } from '../utils/sharedFunctions';
import { convertCodeToBuild } from '../utils/urlFunctions';
import LoadingSpinner from '../components/LoadingSpinner';
import ExtrasDrawer from '../components/Planner/ExtrasDrawer';
import TopBar from '../components/Planner/TopBar';
import CharacterPortrait from '../components/Planner/CharacterPortrait';
import SkillTable from '../components/Planner/SkillTable';
import useBulkMediaQueries from '../hooks/useBulkMediaQueries';
import gameData from '../data/gameData';
import UnitStats from '../components/Planner/UnitStats';
import FactionVariantSelect from '../components/Planner/FactionVariantSelect';
import StatsDrawer from '../components/Planner/StatsDrawer';

const Planner = () => {
  const { state, dispatch } = useContext(AppContext);
  const { characterData } = state;
  const { mod, faction, character, code } = useParams();
  const { isMobileWidth, isMobileHeight, isShortWidth, isShortHeight } = useBulkMediaQueries();

  const [urlLoaded, setUrlLoaded] = useState(false);
  const [mobileTab, setMobileTab] = useState('skills');

  const isMobile = isMobileWidth || isMobileHeight ? true : false;
  const isShort = isShortWidth || isShortHeight ? true : false;

  const navigate = useNavigate();

  const lordName = gameData[mod as string].characters[faction as string]?.lords?.[character as string]?.name;
  const heroName = gameData[mod as string].characters[faction as string]?.heroes?.[character as string]?.name;
  const characterName = lordName === undefined ? heroName : lordName;

  useEffect(() => {
    if (characterData === null) {
      dispatch({
        type: AppContextActions.changeModFaction,
        payload: { selectedMod: mod, selectedFaction: faction },
      });

      const hasBuild = code !== undefined ? true : false;
      api
        .getCharacterSkillTree(mod as string, faction as string, character as string, hasBuild)
        .then((response) => {
          dispatch({ type: AppContextActions.changeCharacterData, payload: { characterData: response } });
          const emptyCharacterBuild = createEmptyCharacterBuild(
            response,
            mod as string,
            faction as string,
            character as string
          );
          if (!code) {
            dispatch({
              type: AppContextActions.changeCharacterBuild,
              payload: { characterBuild: emptyCharacterBuild },
            });
          }
        })
        .catch((err) => {
          toast.error(`${err}`, { id: 'err api call' });
          dispatch({ type: AppContextActions.changeCharacterData, payload: { characterData: null } });
          navigate('/404');
        });
    }
  }, [characterData]);

  useEffect(() => {
    if (!code || !characterData || urlLoaded) {
      return;
    }
    if (characterData.altFactionNodeSets !== undefined) {
      const emptyCharacterBuild = createEmptyCharacterBuild(
        characterData,
        mod as string,
        faction as string,
        character as string
      );
      dispatch({
        type: AppContextActions.changeCharacterBuild,
        payload: { characterBuild: emptyCharacterBuild },
      });
      toast.error(`Build codes for characters with faction variants are not currently supported. Sorry!`, {
        id: 'load build code for faction variant',
        duration: 10000,
      });
      return;
    }
    const importBuild = convertCodeToBuild(code);
    const newCharacterBuild = createCharacterBuildFromArray(
      importBuild,
      characterData,
      mod as string,
      faction as string,
      character as string
    );
    dispatch({ type: AppContextActions.changeCharacterBuild, payload: { characterBuild: newCharacterBuild } });
    setUrlLoaded(true);
  }, [code, characterData]);

  useEffect(() => {
    document.title = `TWP - ${characterName}`;
  }, []);

  const mobileTabButtonClass =
    'rounded-lg rounded-b-none py-1 px-3 my-auto text-slate-50 text-xl shadow-md shadow-gray-900 hover-scale';
  const mobileTabButtonColorsSelected = ' bg-gray-500 hover:bg-gray-400';
  const mobileTabButtonColorsDeselected = ' bg-gray-600 hover:bg-gray-500';
  return (
    <div className="grow mt-1 flex flex-col bg-gray-700 w-full border border-gray-500 rounded-md px-2 py-2 overflow-y-hidden overflow-x-hidden">
      {characterData === null ? (
        <LoadingSpinner loadingText="Loading Character Data..." />
      ) : (
        <>
          {/* {!isShort && <TopBar isMobile={isMobile} />}

          {!isMobile && <CharacterPortrait />}

          <div className={tableStatsContainer}>
            <SkillTable faction={faction} />
          </div>

          {!isThin && <ExtrasDrawer shortViewToggle={shortViewToggle} setShortViewToggle={setShortViewToggle} />} */}

          {!isShort ? (
            <>
              <TopBar isMobile={isMobile} />
              {!isMobile && <CharacterPortrait />}
              <div className="flex flex-row flex-nowrap grow max-h-[88vh] min-h-[50vh]">
                <StatsDrawer />

                <SkillTable faction={faction} />
              </div>
              <ExtrasDrawer />
            </>
          ) : (
            <>
              <div className="">
                <button
                  className={
                    mobileTabButtonClass +
                    (mobileTab === 'skills' ? mobileTabButtonColorsSelected : mobileTabButtonColorsDeselected)
                  }
                  onClick={() => setMobileTab('skills')}
                >
                  Skills
                </button>
                <button
                  className={
                    mobileTabButtonClass +
                    (mobileTab === 'stats' ? mobileTabButtonColorsSelected : mobileTabButtonColorsDeselected)
                  }
                  onClick={() => {
                    setMobileTab('stats');
                    dispatch({ type: AppContextActions.changeStatsDrawerOpen, payload: { statsDrawerOpen: true } });
                  }}
                >
                  Stats
                </button>
                <button
                  className={
                    mobileTabButtonClass +
                    (mobileTab === 'extras' ? mobileTabButtonColorsSelected : mobileTabButtonColorsDeselected)
                  }
                  onClick={() => {
                    setMobileTab('extras');
                    dispatch({ type: AppContextActions.changeExtrasDrawerOpen, payload: { extrasDrawerOpen: true } });
                  }}
                >
                  Extras
                </button>
              </div>
              <div className="flex flex-row flex-nowrap grow max-h-[88%]">
                {mobileTab === 'skills' && <SkillTable faction={faction} />}
                {mobileTab === 'stats' && <StatsDrawer />}
                {mobileTab === 'extras' && <ExtrasDrawer />}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Planner;
