import { SpellLores } from '../../types/interfaces/GameInterface';

const scm3Characters = {
  dae_daemons_lords: {},
  dae_daemons_heroes: {
    kho_karnak: { name: 'Karanak' },
    str_rotblood_blightstorm_hero: { name: 'Greater Blightstormer', spellLore: SpellLores.death },
    str_rotblood_lifeleech_hero: { name: 'Greater Lifeleech', spellLore: SpellLores.nurgle },
    str_rotblood_eternal: { name: 'Rotblood Eternal' },
  },

  chs_chaos_lords: {
    merga: { name: 'Merga Ottweiler', spellLore: SpellLores.tzeentch },
  },
  chs_chaos_heroes: {
    kho_karnak: { name: 'Karanak' },
    magister: { name: 'Magister', spellLore: SpellLores.dark },
  },

  cth_cathay_lords: {},
  cth_cathay_heroes: {
    jade_officer: { name: 'Jade Officer' },
  },

  emp_empire_lords: {
    emp_sec_hans: { name: 'Hans Frankenwurter' },

    emp_helborg: { name: 'Kurt Helborg' },

    hun_cha_huntsmarshal_0: { name: 'Huntsman General' },
  },
  emp_empire_heroes: {
    emp_zintler: { name: 'Hans Zintler' },
    emp_schwartzhelm: { name: 'Ludwig Schwarzhelm' },
    emp_gold_wizard: { name: 'Alchemist (Gold Wizard)', spellLore: SpellLores.metal },
    emp_huntsmaster: { name: 'Hunt Master' },
  },

  grn_greenskins_lords: {
    frb_warboss_lord: { name: 'Dark Land Warboss' },
  },
  grn_greenskins_heroes: {},

  jbv_jade_vampires_lords: {
    jbv_hei_lianhua: { name: 'Maiden of the Black Lotus', spellLore: SpellLores.mixed },
    jbv_jade_blooded: { name: 'Jade-Blooded Master Warlock', spellLore: SpellLores.mixed },
  },
  jbv_jade_vampires_heroes: {
    jbv_channeler: { name: 'Channeler', spellLore: SpellLores.mixed },
    jbv_jiangjun: { name: 'Jiangjun Revenant' },
    jbv_nugui: { name: 'Nü Gui', spellLore: SpellLores.mixed },
  },

  kho_khorne_lords: {},
  kho_khorne_heroes: {
    kho_karnak: { name: 'Karanak' },
  },

  ksl_kislev_lords: {},
  ksl_kislev_heroes: {
    blade_master: { name: 'Blade Master' },
    ksl_ivan: { name: 'Ivan Radinov' },
  },

  nur_nurgle_lords: {
    str_bodvarr: { name: 'Bödvarr Ribspreader' },
    str_burblespue: { name: 'Burblespue Halescourge', spellLore: SpellLores.mixed },
    str_rotblood_blessed: { name: 'Blessed' },
    str_rotblood_caster_death: { name: 'Shaman Lord (Death)', spellLore: SpellLores.death },
    str_rotblood_caster_nurgle: { name: 'Shaman Lord (Nurgle)', spellLore: SpellLores.nurgle },
  },
  nur_nurgle_heroes: {
    str_rotblood_blightstorm_hero: { name: 'Greater Blightstormer', spellLore: SpellLores.death },
    str_rotblood_lifeleech_hero: { name: 'Greater Lifeleech', spellLore: SpellLores.nurgle },
    str_rotblood_eternal: { name: 'Rotblood Eternal' },
  },

  ogr_ogre_kingdoms_lords: {
    str_gnoblar_head: { name: 'Head Honcho' },
  },
  ogr_ogre_kingdoms_heroes: {
    str_gnoblar_honcho: { name: 'Honcho' },
  },

  skv_skaven_lords: {
    bc_nurglitch: { name: 'Arch Plague Lord Nurglitch', spellLore: SpellLores.skvPlague },
    str_skittice: { name: 'Grrzk Roteye' },
    str_pontifex_sitch: { name: 'Arch-Pontifex Sitch', spellLore: SpellLores.skvPlague },
    str_poxtooth: { name: 'Poxtooth, Befouler of Sotek', spellLore: SpellLores.skvPlague },
    bc_the_hidden: { name: 'The Hidden', spellLore: SpellLores.skvPlague },
    bc_plague_lord: { name: 'Plague Lord' },
    bc_plague_pontifex: { name: 'Plague Pontifex', spellLore: SpellLores.skvPlague },

    bc_skrimanx: { name: 'Archdeacon of Disease Lord Skrimanx' },
    bc_gritch: { name: 'Great Potentate of Pustules Lord Gritch' },
    bc_kreegrix: { name: 'The Ravener Lord Kreegrix' },
    bc_blistrox: { name: 'Spreader of the Word Lord Blistrox', spellLore: SpellLores.skvPlague },
    bc_grilok: { name: 'Pontifex of Plagues Lord Grilok', spellLore: SpellLores.skvPlague },
  },
  skv_skaven_heroes: {
    bc_festering_chantor: { name: 'Festering Chantor' },
    bc_stinking_thing: { name: 'Stinking Thing' },
  },
};

export default scm3Characters;
