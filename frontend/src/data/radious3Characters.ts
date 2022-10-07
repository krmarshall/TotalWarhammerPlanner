import { SpellLores } from '../types/interfaces/GameInterface';
import vanilla3Characters from './vanilla3Characters';

const radious3Characters = {
  ...vanilla3Characters,

  wh2_dlc09_tmb_tomb_kings_lords: {
    ...vanilla3Characters.wh2_dlc09_tmb_tomb_kings_lords,
    tmb_liche_high_priest_death: { name: 'Liche High Priest (Death)', spellLore: SpellLores.death },
    tmb_liche_high_priest_light: { name: 'Liche High Priest (Light)', spellLore: SpellLores.light },
    tmb_liche_high_priest_nehekhara: { name: 'Liche High Priest (Nehekhara)', spellLore: SpellLores.nehekhara },
  },

  wh2_dlc11_cst_vampire_coast_lords: {
    ...vanilla3Characters.wh2_dlc11_cst_vampire_coast_lords,
    vpr_herald_of_mathlann: { name: 'Champion of Mathlann', spellLore: SpellLores.mixed },
    vpr_strigoi: { name: 'Strigoi Mourngul Lord', spellLore: SpellLores.mixed },
  },

  wh2_main_hef_high_elves_lords: {
    ...vanilla3Characters.wh2_main_hef_high_elves_lords,
    hef_anointed_general: { name: 'Anointed of Asuryan' },
  },

  wh_dlc03_bst_beastmen_lords: {
    ...vanilla3Characters.wh_dlc03_bst_beastmen_lords,
    bst_shaggoth: { name: 'Shaggoth' },
    bst_exalted_shaman_nurgle: { name: 'Exalted Shaman (Nurgle)', spellLore: SpellLores.nurgle },
    bst_exalted_shaman_slaanesh: { name: 'Exalted Shaman (Slaanesh)', spellLore: SpellLores.slaanesh },
    bst_exalted_shaman_tzeentch: { name: 'Exalted Shaman (Tzeentch)', spellLore: SpellLores.tzeentch },
  },

  wh_dlc05_wef_wood_elves_lords: {
    ...vanilla3Characters.wh_dlc05_wef_wood_elves_lords,
    wef_wood_seer_death: { name: 'Wood Seer (Death)', spellLore: SpellLores.death },
    wef_wood_seer_heavens: { name: 'Wood Seer (Heavens)', spellLore: SpellLores.heavens },
    wef_wood_seer_light: { name: 'Wood Seer (Light)', spellLore: SpellLores.light },
  },

  wh_dlc08_nor_norsca_lords: {
    ...vanilla3Characters.wh_dlc08_nor_norsca_lords,
    nor_fimir_general: { name: 'Fimir Noble' },
    nor_shaman_beasts: { name: 'Shaman Warleader (Beasts)', spellLore: SpellLores.beasts },
    nor_shaman_death: { name: 'Shaman Warleader (Death)', spellLore: SpellLores.death },
    nor_shaman_fire: { name: 'Shaman Warleader (Fire)', spellLore: SpellLores.fire },
    nor_shaman_metal: { name: 'Shaman Warleader (Metal)', spellLore: SpellLores.metal },
    nor_shaman_shadows: { name: 'Shaman Warleader (Shadows)', spellLore: SpellLores.shadows },
  },

  wh_main_brt_bretonnia_lords: {
    ...vanilla3Characters.wh_main_brt_bretonnia_lords,
    brt_hermit_knight: { name: 'Hermit Knight' },
  },

  wh_main_chs_chaos_lords: {
    ...vanilla3Characters.wh_main_chs_chaos_lords,
    kho_wrathcaller: { name: 'Wrathcaller' },
  },

  wh_main_dwf_dwarfs_lords: {
    ...vanilla3Characters.wh_main_dwf_dwarfs_lords,
    dwf_guildmaster_general: { name: 'Guildmaster' },
  },

  wh_main_grn_greenskins_lords: {
    ...vanilla3Characters.wh_main_grn_greenskins_lords,
    grn_savage_ork_warlord: { name: 'Savage Ork Warboss' },
  },

  wh3_main_ksl_kislev_lords: {
    ...vanilla3Characters.wh3_main_ksl_kislev_lords,
    ksl_admiral: { name: 'Lord of the Admiralty' },
  },

  wh3_main_cth_cathay_lords: {
    ...vanilla3Characters.wh3_main_cth_cathay_lords,
    cth_celestial_champion: { name: 'Celestial Champion' },
  },

  wh3_main_ogr_ogre_kingdoms_lords: {
    ...vanilla3Characters.wh3_main_ogr_ogre_kingdoms_lords,
    ogr_slaughtermaster_death: { name: 'Slaughtermaster (Death)', spellLore: SpellLores.death },
    ogr_slaughtermaster_heavens: { name: 'Slaughtermaster (Heavens)', spellLore: SpellLores.heavens },
  },

  wh3_main_kho_khorne_lords: {
    ...vanilla3Characters.wh3_main_kho_khorne_lords,
    kho_wrathcaller: { name: 'Wrathcaller' },
  },

  wh3_main_tze_tzeentch_lords: {
    ...vanilla3Characters.wh3_main_tze_tzeentch_lords,
    tze_renegade_sorcerer_dark: { name: 'Renegade Sorcerer (Dark)', spellLore: SpellLores.dark },
    tze_renegade_sorcerer_death: { name: 'Renegade Sorcerer (Death)', spellLore: SpellLores.death },
    tze_renegade_sorcerer_shadows: { name: 'Renegade Sorcerer (Shadows)', spellLore: SpellLores.shadows },
  },

  wh3_main_sla_slaanesh_lords: {
    ...vanilla3Characters.wh3_main_sla_slaanesh_lords,
    sla_flawless_king: { name: 'Flawless King' },
  },
};

export default radious3Characters;
