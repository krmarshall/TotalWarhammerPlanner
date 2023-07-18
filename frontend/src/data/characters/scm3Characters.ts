import { SpellLores } from '../../types/interfaces/GameInterface';

const scm3Characters = {
  dae_daemons: {
    lords: {},
    heroes: {
      kho_karnak: { name: 'Karanak' },
    },
  },

  chs_chaos: {
    lords: {
      merga: { name: 'Merga Ottweiler', spellLore: SpellLores.tzeentch },
    },
    heroes: {
      kho_karnak: { name: 'Karanak' },
      magister: { name: 'Magister', spellLore: SpellLores.dark },
    },
  },

  cth_cathay: {
    lords: { cth_yinyin: { name: 'Yin-Yin, the Sea Dragon', spellLore: SpellLores.mixed } },
    heroes: {
      jade_officer: { name: 'Jade Officer' },
    },
  },

  dwf_dwarfs: {
    lords: {},
    heroes: {
      hkrul_guzunda: { name: 'Guzunda Wallrattler' },
    },
  },

  emp_empire: {
    lords: {
      emp_sec_hans: { name: 'Hans Frankenwurter' },

      emp_helborg: { name: 'Kurt Helborg' },

      hun_cha_huntsmarshal_0: { name: 'Huntsman General' },

      hkrul_egmond: { name: 'Egmond den Euwe', spellLore: SpellLores.mixed },
      hkrul_jk: { name: 'Jaan van de Kuypers' },
      hkrul_hendrik: { name: 'Simon Goudenkruin' },
      mar_caravan_master: { name: 'Merchant Lord' },
    },
    heroes: {
      emp_sister_bertha: { name: 'Bertha Bestraufrung' },
      emp_zintler: { name: 'Hans Zintler' },
      emp_schwartzhelm: { name: 'Ludwig Schwarzhelm' },
      emp_gold_wizard: { name: 'Alchemist (Gold Wizard)', spellLore: SpellLores.metal },
      emp_huntsmaster: { name: 'Hunt Master' },

      hkrul_crispijn: { name: 'Crispijn van Haagen' },
      hkrul_cross: { name: 'Captain Daefvid Maicross' },
      hkrul_guzunda: { name: 'Guzunda Wallrattler' },
      hkrul_lisette: { name: 'Lisette Leerer' },
      hkrul_pg: { name: 'Pieter de Groot' },
      hkrul_solkan: { name: 'Sword of Solkan' },
    },
  },

  grn_greenskins: {
    lords: {
      str_garbag: { name: 'Garbag', spellLore: SpellLores.lilWagh },
      frb_warboss_lord: { name: 'Dark Land Warboss' },
    },
    heroes: {
      str_garbag_spite: { name: 'Spite' },
    },
  },

  jbv_jade_vampires: {
    lords: {
      jbv_hei_lianhua: { name: 'Maiden of the Black Lotus', spellLore: SpellLores.mixed },
      jbv_witch_lord: { name: 'Ancestor Witch', spellLore: SpellLores.mixed },
      jbv_jade_blooded: { name: 'Jade-Blooded Master Warlock', spellLore: SpellLores.mixed },
      jbv_jade_blooded_a: { name: 'Jade-Blooded Master Warlock', spellLore: SpellLores.vampires },
      jbv_matron: { name: 'Jade-Blooded Matron', spellLore: SpellLores.mixed },
    },
    heroes: {
      jbv_channeler: { name: 'Channeler', spellLore: SpellLores.mixed },
      jbv_courtesan: { name: 'Jade-Blooded Courtesan' },
      jbv_jiangjun: { name: 'Jiangjun Revenant' },
      jbv_nugui: { name: 'Nü Gui' },
    },
  },

  kho_khorne: {
    lords: {},
    heroes: {
      kho_karnak: { name: 'Karanak' },
    },
  },

  ksl_kislev: {
    lords: {},
    heroes: {
      ksl_ivan: { name: 'Ivan Radinov' },
      blade_master: { name: 'Blade Master' },
      ksl_shaman_amber: { name: 'Shaman (Beasts)', spellLore: SpellLores.beasts },
      ksl_shaman_jade: { name: 'Shaman (Life)', spellLore: SpellLores.life },
    },
  },

  ogr_ogre_kingdoms: {
    lords: {
      str_gnoblar_head: { name: 'Head Honcho' },
    },
    heroes: {
      str_gnoblar_honcho: { name: 'Honcho' },
    },
  },

  skv_skaven: {
    lords: {
      str_crooktail_viciss: { name: 'Wastelord Viciss Baukis' },

      str_treecherik_gristl: { name: 'Gristl Twitchslice' },

      str_tenscratch: { name: 'Blight Tenscratch' },
      str_verms_swarmleader: { name: 'Swarmleader' },

      clan_vrrtkin_lord_trikstab: { name: 'Trikstab Gribnode' },

      bc_nurglitch: { name: 'Arch Plague Lord Nurglitch', spellLore: SpellLores.skvPlague },
      str_skittice: { name: 'Grrzk Roteye' },
      str_pontifex_sitch: { name: 'Arch-Pontifex Sitch', spellLore: SpellLores.skvPlague },
      str_poxtooth: { name: 'Poxtooth, Befouler of Sotek', spellLore: SpellLores.skvPlague },
      str_gangrous_szik: { name: 'Szik Vilepot' },
      bc_the_hidden: { name: 'The Hidden', spellLore: SpellLores.skvPlague },
      bc_plague_lord: { name: 'Plague Lord' },
      bc_plague_pontifex: { name: 'Plague Pontifex', spellLore: SpellLores.skvPlague },

      bc_skrimanx: { name: 'Archdeacon of Disease Lord Skrimanx' },
      bc_gritch: { name: 'Great Potentate of Pustules Lord Gritch' },
      bc_kreegrix: { name: 'The Ravener Lord Kreegrix' },
      bc_blistrox: { name: 'Spreader of the Word Lord Blistrox', spellLore: SpellLores.skvPlague },
      bc_grilok: { name: 'Pontifex of Plagues Lord Grilok', spellLore: SpellLores.skvPlague },
    },
    heroes: {
      str_verms_swarmcaller: { name: 'Swarmcaller' },

      clan_vrrtkin_masterglobe: { name: 'Vrrtkin Master Globadier', spellLore: SpellLores.mixed },

      bc_festering_chantor: { name: 'Festering Chantor' },
      bc_stinking_thing: { name: 'Stinking Thing' },
    },
  },

  vmp_vampire_counts: {
    lords: {
      hkrul_mundvard: { name: 'Mundvard the Cruel', spellLore: SpellLores.mixed },
      jian_xiu_necro: { name: 'Yuwei Ha Feng', spellLore: SpellLores.mixed },
      jade_shugegnan: { name: 'Jade-Blooded Shugengan', spellLore: SpellLores.yin },
    },
    heroes: {
      hkrul_alicia: { name: 'Alicia von Unterwald', spellLore: SpellLores.shadows },
      astrolicher_theak: { name: 'Dusk Wight', spellLore: SpellLores.mixed },
    },
  },

  str_rotblood: {
    lords: {
      str_bodvarr: { name: 'Bödvarr Ribspreader' },
      str_burblespue: { name: 'Burblespue Halescourge', spellLore: SpellLores.mixed },
      str_rotblood_blessed: { name: 'Blessed' },
      str_rotblood_caster_death: { name: 'Shaman Lord (Death)', spellLore: SpellLores.death },
      str_rotblood_caster_nurgle: { name: 'Shaman Lord (Nurgle)', spellLore: SpellLores.nurgle },
    },
    heroes: {
      str_rotblood_blightstorm_hero: { name: 'Greater Blightstormer', spellLore: SpellLores.death },
      str_rotblood_lifeleech_hero: { name: 'Greater Lifeleech', spellLore: SpellLores.nurgle },
      str_rotblood_eternal: { name: 'Rotblood Eternal' },
    },
  },
};

export default scm3Characters;
