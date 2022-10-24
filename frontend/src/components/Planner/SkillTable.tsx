import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import useBulkMediaQueries from '../../hooks/useBulkMediaQueries';
import SkillRow from './SkillRow';

interface PropInterface {
  faction: string | undefined;
  shortViewToggle: boolean;
}

const SkillTable = ({ faction, shortViewToggle }: PropInterface) => {
  const { state, dispatch } = useContext(AppContext);
  const { isShortWidth, isShortHeight } = useBulkMediaQueries();

  const isShort = isShortWidth || isShortHeight ? true : false;

  const horizontalScroll = (event: React.WheelEvent) => {
    const container = document.getElementById('horScrollContainer');
    const containerScrollPosition = container?.scrollLeft !== undefined ? container?.scrollLeft : 0;
    container?.scrollTo({
      left: containerScrollPosition + event.deltaY,
    });
  };

  let containerClass =
    'overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-600 rounded-xl bg-left-top bg-local bg-no-repeat bg-cover' +
    getBgUrl(faction);

  if (isShort && shortViewToggle) {
    containerClass += ' h-0';
  } else {
    containerClass += ' grow max-h-[88vh] min-h-[50vh]';
  }
  return (
    <div
      className={containerClass}
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

export default SkillTable;
