import { Fragment, useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/api';
import { AppContext, AppContextActions } from '../contexts/AppContext';
import { createCharacterBuildFromArray, createEmptyCharacterBuild } from '../utils/sharedFunctions';
import { convertCodeToBuild } from '../utils/urlFunctions';
import { CharacterInterface } from '../types/interfaces/CharacterInterface';
import SkillRow from '../components/Planner/SkillRow';
import LoadingSpinner from '../components/LoadingSpinner';
import ExtrasDrawer from '../components/Planner/ExtrasDrawer';
import TopBar from '../components/Planner/TopBar';
import CharacterPortrait from '../components/Planner/CharacterPortrait';

const Planner = () => {
  const { state, dispatch } = useContext(AppContext);
  const { characterBuild } = state;
  const { mod, faction, character, code } = useParams();

  const [urlLoaded, setUrlLoaded] = useState(false);
  const [effectiveRank, setEffectiveRank] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    if (state.characterData === null) {
      const game = mod?.includes('2') ? '2' : '3';
      dispatch({
        type: AppContextActions.changeGameModFaction,
        payload: { selectedGame: game, selectedMod: mod, selectedFaction: faction },
      });

      api
        .getCharacterSkillTree(mod as string, faction as string, character as string)
        .then((response: CharacterInterface) => {
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
        .catch(() => {
          toast.error('Error retrieving character data from server.');
          dispatch({ type: AppContextActions.changeCharacterData, payload: { characterData: null } });
          navigate('/404');
        });
    }
  }, [state.characterData]);

  useEffect(() => {
    if (!code || !state.characterData || urlLoaded) {
      return;
    }
    const importBuild = convertCodeToBuild(code);
    const newCharacterBuild = createCharacterBuildFromArray(
      importBuild,
      state.characterData,
      mod as string,
      faction as string,
      character as string
    );
    dispatch({ type: AppContextActions.changeCharacterBuild, payload: { characterBuild: newCharacterBuild } });
    setUrlLoaded(true);
  }, [code, state.characterData]);

  useEffect(() => {
    if (
      typeof characterBuild?.rank === 'number' &&
      typeof characterBuild?.startingSkillPoints === 'number' &&
      typeof characterBuild?.autoUnlockSkillPoints === 'number'
    ) {
      setEffectiveRank(
        characterBuild?.rank - characterBuild?.startingSkillPoints - characterBuild?.autoUnlockSkillPoints
      );
    }
  }, [characterBuild?.rank, characterBuild?.startingSkillPoints, characterBuild?.autoUnlockSkillPoints]);

  const horizontalScroll = (event: React.WheelEvent) => {
    const container = document.getElementById('horScrollContainer');
    const containerScrollPosition = container?.scrollLeft !== undefined ? container?.scrollLeft : 0;
    container?.scrollTo({
      left: containerScrollPosition + event.deltaY,
    });
  };

  return (
    <div className="h-[88vh] flex flex-col bg-gray-700 w-full border border-gray-500 rounded-md px-2 py-2 overflow-y-hidden overflow-x-hidden">
      {state.characterData === null ? (
        <LoadingSpinner loadingText="Loading Character Data..." />
      ) : (
        <Fragment>
          <TopBar effectiveRank={effectiveRank} />
          <CharacterPortrait />
          <div
            className={
              ' grow max-h-[73vh] min-h-[52vh] overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-600 rounded-xl bg-left-top bg-local bg-no-repeat bg-cover' +
              getBgUrl(faction)
            }
            id="horScrollContainer"
            onWheel={(event) => {
              horizontalScroll(event);
            }}
          >
            <table className="table-fixed">
              <thead></thead>
              <tbody className="flex flex-col flex-nowrap">
                {state.characterData?.skillTree?.map((skillRow, index) => {
                  return <SkillRow key={index} skillRow={skillRow} yIndex={index} />;
                })}
              </tbody>
            </table>
          </div>

          <ExtrasDrawer />
        </Fragment>
      )}
    </div>
  );
};

// Really verbose way of doing this, but tailwind needs the whole class present to generate it
const getBgUrl = (selectedFaction: string | undefined) => {
  let returnUrl = ' bg-[url(/imgs/other/bgs/default/bg.webp)]';
  switch (selectedFaction) {
    case 'brt_bretonnia':
      returnUrl = ' bg-[url(/imgs/other/bgs/brt_bretonnia/bg.webp)]';
      break;
    case 'bst_beastmen':
      returnUrl = ' bg-[url(/imgs/other/bgs/bst_beastmen/bg.webp)]';
      break;
    case 'chs_chaos':
      returnUrl = ' bg-[url(/imgs/other/bgs/chs_chaos/bg.webp)]';
      break;
    case 'cst_vampire_coast':
      returnUrl = ' bg-[url(/imgs/other/bgs/cst_vampire_coast/bg.webp)]';
      break;
    case 'cth_cathay':
      returnUrl = ' bg-[url(/imgs/other/bgs/cth_cathay/bg.webp)]';
      break;
    case 'dae_daemons':
      returnUrl = ' bg-[url(/imgs/other/bgs/dae_daemons/bg.webp)]';
      break;
    case 'def_dark_elves':
      returnUrl = ' bg-[url(/imgs/other/bgs/def_dark_elves/bg.webp)]';
      break;
    case 'grn_greenskins':
      returnUrl = ' bg-[url(/imgs/other/bgs/grn_greenskins/bg.webp)]';
      break;
    case 'kho_khorne':
      returnUrl = ' bg-[url(/imgs/other/bgs/kho_khorne/bg.webp)]';
      break;
    case 'ksl_kislev':
      returnUrl = ' bg-[url(/imgs/other/bgs/ksl_kislev/bg.webp)]';
      break;
    case 'lzd_lizardmen':
      returnUrl = ' bg-[url(/imgs/other/bgs/lzd_lizardmen/bg.webp)]';
      break;
    case 'nur_nurgle':
      returnUrl = ' bg-[url(/imgs/other/bgs/nur_nurgle/bg.webp)]';
      break;
    case 'ogr_ogre_kingdoms':
      returnUrl = ' bg-[url(/imgs/other/bgs/ogr_ogre_kingdoms/bg.webp)]';
      break;
    case 'skv_skaven':
      returnUrl = ' bg-[url(/imgs/other/bgs/skv_skaven/bg.webp)]';
      break;
    case 'sla_slaanesh':
      returnUrl = ' bg-[url(/imgs/other/bgs/sla_slaanesh/bg.webp)]';
      break;
    case 'tmb_tomb_kings':
      returnUrl = ' bg-[url(/imgs/other/bgs/tmb_tomb_kings/bg.webp)]';
      break;
    case 'tze_tzeentch':
      returnUrl = ' bg-[url(/imgs/other/bgs/tze_tzeentch/bg.webp)]';
      break;
    case 'vmp_vampire_counts':
      returnUrl = ' bg-[url(/imgs/other/bgs/vmp_vampire_counts/bg.webp)]';
      break;
    default:
      returnUrl = ' bg-[url(/imgs/other/bgs/default/bg.webp)]';
      break;
  }
  return returnUrl;
};

export default Planner;
