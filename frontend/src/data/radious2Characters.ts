import { SpellLores } from '../types/interfaces/GameInterface';
import vanilla2Characters from './vanilla2Characters';

const radious2Characters = {
  ...vanilla2Characters,

  tmb_tomb_kings_lords: {
    ...vanilla2Characters.tmb_tomb_kings_lords,
    tmb_liche_high_priest_death: { name: 'Liche High Priest (Death)', spellLore: SpellLores.death },
    tmb_liche_high_priest_light: { name: 'Liche High Priest (Light)', spellLore: SpellLores.light },
    tmb_liche_high_priest_nehekhara: { name: 'Liche High Priest (Nehekhara)', spellLore: SpellLores.nehekhara },
  },

  cst_vampire_coast_lords: {
    ...vanilla2Characters.cst_vampire_coast_lords,
    vpr_herald_of_mathlann: { name: 'Champion of Mathlann', spellLore: SpellLores.mixed },
    vpr_strigoi: { name: 'Strigoi Mourngul Lord', spellLore: SpellLores.mixed },
  },

  hef_high_elves_lords: {
    ...vanilla2Characters.hef_high_elves_lords,
    hef_anointed_general: { name: 'Anointed of Asuryan' },
  },

  bst_beastmen_lords: {
    ...vanilla2Characters.bst_beastmen_lords,
    bst_shaggoth: { name: 'Shaggoth' },
    bst_exalted_shaman_dark: { name: 'Exalted Shaman (Dark)', spellLore: SpellLores.dark },
    bst_exalted_shaman_fire: { name: 'Exalted Shaman (Fire)', spellLore: SpellLores.fire },
  },

  wef_wood_elves_lords: {
    ...vanilla2Characters.wef_wood_elves_lords,
    wef_wood_seer_death: { name: 'Wood Seer (Death)', spellLore: SpellLores.death },
    wef_wood_seer_heavens: { name: 'Wood Seer (Heavens)', spellLore: SpellLores.heavens },
    wef_wood_seer_light: { name: 'Wood Seer (Light)', spellLore: SpellLores.light },
  },

  nor_norsca_lords: {
    ...vanilla2Characters.nor_norsca_lords,
    nor_fimir_general: { name: 'Fimir Noble' },
    nor_shaman_beasts: { name: 'Shaman Warleader (Beasts)', spellLore: SpellLores.beasts },
    nor_shaman_death: { name: 'Shaman Warleader (Death)', spellLore: SpellLores.death },
    nor_shaman_fire: { name: 'Shaman Warleader (Fire)', spellLore: SpellLores.fire },
    nor_shaman_metal: { name: 'Shaman Warleader (Metal)', spellLore: SpellLores.metal },
    nor_shaman_shadows: { name: 'Shaman Warleader (Shadows)', spellLore: SpellLores.shadows },
  },

  brt_bretonnia_lords: {
    ...vanilla2Characters.brt_bretonnia_lords,
    brt_hermit_knight: { name: 'Hermit Knight' },
  },

  chs_chaos_lords: {
    ...vanilla2Characters.chs_chaos_lords,
    chs_shaggoth: { name: 'Elder Shaggoth' },
  },

  dwf_dwarfs_lords: {
    ...vanilla2Characters.dwf_dwarfs_lords,
    dwf_guildmaster_general: { name: 'Guildmaster' },
  },

  grn_greenskins_lords: {
    ...vanilla2Characters.grn_greenskins_lords,
    grn_savage_ork_warlord: { name: 'Savage Ork Warboss' },
  },
};

export default radious2Characters;
