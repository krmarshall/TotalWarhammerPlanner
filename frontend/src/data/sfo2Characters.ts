import { SpellLores } from '../types/interfaces/GameInterface';
import vanilla2Characters from './vanilla2Characters';

const sfo2Characters = {
  ...vanilla2Characters,

  wh2_dlc09_tmb_tomb_kings_lords: {
    ...vanilla2Characters.wh2_dlc09_tmb_tomb_kings_lords,
    tmb_cha_arch_liche: {
      name: 'Liche High Priest',
      spellLore: SpellLores.mixed,
    },
  },
  wh2_main_def_dark_elves_heroes: {
    ...vanilla2Characters.wh2_main_def_dark_elves_heroes,
    def_fleetmaster: {
      name: 'Black Ark Reaver',
    },
  },
  wh2_main_skv_skaven_lords: {
    ...vanilla2Characters.wh2_main_skv_skaven_lords,
    skv_cha_rik: {
      name: 'Rikcruk Sliceblade???',
    },
  },
  wh2_main_skv_skaven_heroes: {
    ...vanilla2Characters.wh2_main_skv_skaven_heroes,
    skv_cha_bloodtail: {
      name: 'Fangleader',
    },
  },
  wh_dlc05_wef_wood_elves_heroes: {
    ...vanilla2Characters.wh_dlc05_wef_wood_elves_heroes,
    wef_cha_shadowdancer: {
      name: 'Shadowdancer',
    },
  },
  wh_dlc08_nor_norsca_lords: {
    ...vanilla2Characters.wh_dlc08_nor_norsca_lords,
    nor_cha_hunter: {
      name: 'Marauder Pathfinder',
    },
    nor_cha_fimir: {
      name: 'Fimir Meargh',
      spellLore: SpellLores.mixed,
    },
  },
  wh_main_brt_bretonnia_heroes: {
    ...vanilla2Characters.wh_main_brt_bretonnia_heroes,
    brt_cha_lost: {
      name: 'Son of Bretonnia',
      spellLore: SpellLores.mixed,
    },
  },
  wh_main_chs_chaos_heroes: {
    ...vanilla2Characters.wh_main_chs_chaos_heroes,
    chs_cha_bloodthirster: {
      name: 'Bloodthirster???',
    },
  },
  wh_main_dwf_dwarfs_heroes: {
    ...vanilla2Characters.wh_main_dwf_dwarfs_heroes,
    dwf_cha_slayer: {
      name: 'Daemon Slayer',
    },
  },
  wh_main_emp_empire_lords: {
    ...vanilla2Characters.wh_main_emp_empire_lords,
    emp_cha_grandmaster: {
      name: 'Grand Master',
    },
  },
  wh_main_grn_greenskins_lords: {
    ...vanilla2Characters.wh_main_grn_greenskins_lords,
    grn_cha_savageboss: {
      name: 'Savage Orc Warboss',
      spellLore: SpellLores.bigWagh,
    },
  },
};

export default sfo2Characters;
