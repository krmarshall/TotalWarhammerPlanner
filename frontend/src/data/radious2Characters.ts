import vanilla2Characters from './vanilla2Characters';

const radious2Characters = {
  ...vanilla2Characters,

  wh2_dlc09_tmb_tomb_kings_lords: {
    ...vanilla2Characters.wh2_dlc09_tmb_tomb_kings_lords,
    tmb_liche_high_priest_death: { name: 'Liche High Priest (Death)', spellLore: 'death' },
    tmb_liche_high_priest_light: { name: 'Liche High Priest (Light)', spellLore: 'light' },
    tmb_liche_high_priest_nehekhara: { name: 'Liche High Priest (Nehekhara)', spellLore: 'nehekhara' },
  },

  wh2_dlc11_cst_vampire_coast_lords: {
    ...vanilla2Characters.wh2_dlc11_cst_vampire_coast_lords,
    vpr_herald_of_mathlann: { name: 'Champion of Mathlann', spellLore: 'mixed' },
    vpr_strigoi: { name: 'Strigoi Mourngul Lord', spellLore: 'mixed' },
  },

  wh2_main_hef_high_elves_lords: {
    ...vanilla2Characters.wh2_main_hef_high_elves_lords,
    hef_anointed_general: { name: 'Anointed of Asuryan' },
  },

  wh_dlc03_bst_beastmen_lords: {
    ...vanilla2Characters.wh_dlc03_bst_beastmen_lords,
    bst_shaggoth: { name: 'Shaggoth' },
    bst_exalted_shaman_dark: { name: 'Exalted Shaman (Dark)', spellLore: 'dark' },
    bst_exalted_shaman_fire: { name: 'Exalted Shaman (Fire)', spellLore: 'fire' },
  },

  wh_dlc05_wef_wood_elves_lords: {
    ...vanilla2Characters.wh_dlc05_wef_wood_elves_lords,
    wef_wood_seer_death: { name: 'Wood Seer (Death)', spellLore: 'death' },
    wef_wood_seer_heavens: { name: 'Wood Seer (Heavens)', spellLore: 'heavens' },
    wef_wood_seer_light: { name: 'Wood Seer (Light)', spellLore: 'light' },
  },

  wh_dlc08_nor_norsca_lords: {
    ...vanilla2Characters.wh_dlc08_nor_norsca_lords,
    nor_fimir_general: { name: 'Fimir Noble' },
    nor_shaman_beasts: { name: 'Shaman Warleader (Beasts)', spellLore: 'beasts' },
    nor_shaman_death: { name: 'Shaman Warleader (Death)', spellLore: 'death' },
    nor_shaman_fire: { name: 'Shaman Warleader (Fire)', spellLore: 'fire' },
    nor_shaman_metal: { name: 'Shaman Warleader (Metal)', spellLore: 'metal' },
    nor_shaman_shadows: { name: 'Shaman Warleader (Shadows)', spellLore: 'shadows' },
  },

  wh_main_brt_bretonnia_lords: {
    ...vanilla2Characters.wh_main_brt_bretonnia_lords,
    brt_hermit_knight: { name: 'Hermit Knight' },
  },

  wh_main_chs_chaos_lords: {
    ...vanilla2Characters.wh_main_chs_chaos_lords,
    chs_shaggoth: { name: 'Elder Shaggoth' },
  },

  wh_main_dwf_dwarfs_lords: {
    ...vanilla2Characters.wh_main_dwf_dwarfs_lords,
    dwf_guildmaster_general: { name: 'Guildmaster' },
  },

  wh_main_grn_greenskins_lords: {
    ...vanilla2Characters.wh_main_grn_greenskins_lords,
    grn_savage_ork_warlord: { name: 'Savage Ork Warboss' },
  },
};

export default radious2Characters;
