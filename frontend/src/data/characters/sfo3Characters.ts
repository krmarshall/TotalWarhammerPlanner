import { SpellLores } from '../../types/interfaces/GameInterface';
import vanilla3Characters from './vanilla3Characters';

const sfo3Characters = {
  ...vanilla3Characters,

  tmb_tomb_kings_lords: {
    ...vanilla3Characters.tmb_tomb_kings_lords,
    tmb_cha_arch_liche: {
      name: 'Liche High Priest',
      spellLore: SpellLores.mixed,
    },
  },
  def_dark_elves_heroes: {
    ...vanilla3Characters.def_dark_elves_heroes,
    def_fleetmaster: {
      name: 'Black Ark Reaver',
    },
  },
  skv_skaven_lords: {
    ...vanilla3Characters.skv_skaven_lords,
    skv_cha_rik: {
      name: 'Rikcruk Sliceblade???',
    },
  },
  skv_skaven_heroes: {
    ...vanilla3Characters.skv_skaven_heroes,
    skv_cha_bloodtail: {
      name: 'Fangleader',
    },
  },
  wef_wood_elves_heroes: {
    ...vanilla3Characters.wef_wood_elves_heroes,
    wef_cha_shadowdancer: {
      name: 'Shadowdancer',
    },
  },
  nor_norsca_lords: {
    ...vanilla3Characters.nor_norsca_lords,
    nor_cha_hunter: {
      name: 'Marauder Pathfinder',
    },
    nor_cha_fimir: {
      name: 'Fimir Meargh',
      spellLore: SpellLores.mixed,
    },
  },
  brt_bretonnia_heroes: {
    ...vanilla3Characters.brt_bretonnia_heroes,
    brt_cha_lost: {
      name: 'Son of Bretonnia',
      spellLore: SpellLores.mixed,
    },
  },
  dwf_dwarfs_heroes: {
    ...vanilla3Characters.dwf_dwarfs_heroes,
    dwf_cha_slayer: {
      name: 'Daemon Slayer',
    },
  },
  emp_empire_lords: {
    ...vanilla3Characters.emp_empire_lords,
    emp_cha_grandmaster: {
      name: 'Grand Master',
    },
  },
  grn_greenskins_lords: {
    ...vanilla3Characters.grn_greenskins_lords,
    grn_cha_savageboss: {
      name: 'Savage Orc Warboss',
      spellLore: SpellLores.bigWagh,
    },
  },
};

export default sfo3Characters;
