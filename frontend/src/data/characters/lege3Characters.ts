import { SpellLores } from '../../types/interfaces/GameInterface';

const lege3Characters = {
  bst_beastmen: {
    lords: {
      str_ragush: { name: 'Ragush of the Bloody Horn' },
    },
    heroes: {},
  },

  brt_bretonnia: {
    lords: {
      hkrul_dolmance: { name: 'Alphonse Dolmancé' },
    },
    heroes: {
      ludwig_von_uberdorf: { name: 'Ludwig von Uberdorf' },
    },
  },

  chd_chaos_dwarfs: {
    lords: {
      str_rykarth: { name: 'Rykarth the Unbreakable' },
    },
    heroes: {},
  },

  chs_chaos: {
    lords: {
      str_feytor: { name: 'Feytor the Tainted' },
      str_gutrot: { name: 'Gutrot Spume' },
      str_haargroth: { name: 'Haargroth the Blooded' },
      str_nastasya: { name: 'Nastasya Roskolnikov', spellLore: SpellLores.mixed },
      str_styrkaar: { name: 'Styrkaar of the Sortsvinaer' },
      str_crom: { name: 'Vardek Crom' },
      str_vandred: { name: 'Vandred the Majestic' },
      dust_gutrot_plaguefleet_captain: { name: 'Plaguefleet Captain', spellLore: SpellLores.mixed },

      hkrul_aelfric: { name: 'Aelfric' },
      hkrul_engra: { name: 'Engra Deathsword' },
    },
    heroes: {
      str_eogric: { name: 'Eogric the Vile' },
      kho_mardagg: { name: 'The Mardagg' },
      str_scyla: { name: 'Scyla Anfingrimm' },
      str_slambo: { name: 'SLAMBO' },
    },
  },

  cth_cathay: {
    lords: {},
    heroes: {
      str_nanye: { name: 'Nanye Bunyo' },
      str_xian: { name: 'Xian Feng' },
    },
  },

  dae_daemons: {
    lords: {
      str_slavin: { name: 'Slavin Kurnz' },
    },
    heroes: { kho_mardagg: { name: 'The Mardagg' } },
  },

  dwf_dwarfs: {
    lords: {
      str_alrik_ranulfsson: { name: 'Alrik Ranulfsson' },
      str_brokk_ironpick: { name: 'Brokk Ironpick' },
      str_byrrnoth_grundadrakk: { name: 'Byrrnoth Grundadrakk' },
      Helgar_longplaits: { name: 'Helgar Longplaits' },
      str_rorek_granitehand: { name: 'Rorek Granitehand' },
      str_sven_hasselfriesian: { name: 'Sven Hasselfriesian' },
    },
    heroes: {
      ludwig_von_uberdorf: { name: 'Ludwig von Uberdorf' },

      hkrul_rhobb: { name: 'Rhobb Grimly' },
      hkrul_shaz: { name: 'Shaz Ensun' },
      hkrul_thulgrim: { name: 'Thulgrim the Thief' },
    },
  },

  def_dark_elves: {
    lords: {
      str_fellheart: { name: 'Laithikar Fellheart' },
      str_hag_queen_malida: { name: 'Hag Queen Malida' },
    },
    heroes: {
      str_shadowblade: { name: 'Shadowblade' },
    },
  },

  emp_empire: {
    lords: {
      hkrul_erkstein: { name: 'Grand Marshal Erkstein' },
      hkrul_gunter: { name: 'Gunter Fredhoff' },
      str_lietpold: { name: 'Lietpold the Black' },
      dead_kes: { name: 'Stefan von Kessel' },
      str_thyrus: { name: 'Thyrus Gorman', spellLore: SpellLores.fire },
    },
    heroes: {
      hkrul_aldred: { name: 'Aldred von Carroburg' },
      kou_aurelion_ll: { name: 'Aurelion', spellLore: SpellLores.mixed },
      bassiano_dutra: { name: 'Bassiano Dutra', spellLore: SpellLores.death },
      str_chronos: { name: 'Chronos Goodheart' },
      str_halagrundsor: { name: 'Halagrundsor the Horrible' },
      ludwig_von_uberdorf: { name: 'Ludwig von Uberdorf' },
    },
  },

  grn_greenskins: {
    lords: {
      frob_gorbad_ironclaw: { name: 'Gorbad Ironclaw' },
      kou_frob_nobber: { name: 'Nobber Fangadoom', spellLore: SpellLores.lilWagh },
    },
    heroes: {},
  },

  hef_high_elves: {
    lords: {
      eldyra: { name: 'Eldyra' },
      galifreius: { name: 'Galifreius' },
      hef_calith_torinubar: { name: 'High Mage Torinubar', spellLore: SpellLores.high },
      hef_convoy: { name: 'Prince (Convoy)' },
    },
    heroes: {
      kou_aurelion_ll: { name: 'Aurelion', spellLore: SpellLores.mixed },
      kou_talarian: { name: 'Loremaster Talarian', spellLore: SpellLores.mixed },
    },
  },

  kho_khorne: {
    lords: {
      str_abrax: { name: 'Abrax the Bloody' },
      str_kaarn: { name: 'Kaarn the Vanquisher' },

      hkrul_slaurith: { name: 'Lord Slaurith' },
    },
    heroes: {
      kho_mardagg: { name: 'The Mardagg' },
      str_scyla: { name: 'Scyla Anfingrimm' },
      str_skulltaker: { name: 'Skulltaker' },
    },
  },

  ksl_kislev: {
    lords: {
      dead_ksl_dmitri_tzaryov: { name: 'Dmitry Tzaryov' },
    },
    heroes: {
      dead_grigori: { name: 'Grigori Medvezhiy' },
      str_ilja: { name: 'Ilja of Murova' },
      ludwig_von_uberdorf: { name: 'Ludwig von Uberdorf' },
      str_naryaska: { name: 'Naryaska Leysa, the Golden Knight' },
      dead_ice_mage: { name: 'Vladimir Stormbringer', spellLore: SpellLores.tempest },
    },
  },

  lzd_lizardmen: {
    lords: {
      zlatgar_ll: { name: 'Zlatgar' },
    },
    heroes: {},
  },

  nor_norsca: {
    lords: {
      hkrul_beorg: { name: 'Beorg Bearstruck' },
      hkrul_vroth: { name: 'Surtha Lenk' },
      hkrul_thorgar: { name: 'Thorgar the Blooded one' },
      hkrul_thorgar_daemon_prince: { name: 'Thorgar the Daemon Prince', spellLore: SpellLores.fire },
      hkrul_valbrand: { name: 'Valbrand Fireblade' },
      hkrul_volrik: { name: 'Volrik Clawhand' },
      rhox_volrik_chs_sorcerer_lord_tzeentch_mtze: {
        name: 'Chaos Sorcerer Lord of Tzeentch (Tzeentch)',
        spellLore: SpellLores.tzeentch,
      },
      rhox_valbrand_nor_marauder_chieftain_horde: { name: 'Marauder Chieftain' },
    },
    heroes: {
      str_dazharr: { name: 'Dazharr Doomaxe', spellLore: SpellLores.hashut },

      hkrul_oerl: { name: 'Oerl the Young' },
    },
  },

  nur_nurgle: {
    lords: {
      str_gutrot: { name: 'Gutrot Spume' },
      str_valnir: { name: 'Valnir the Reaper' },
    },
    heroes: {
      pk_plague_epidemius: { name: 'Epidemius' },
    },
  },

  ogr_ogre_kingdoms: {
    lords: {
      str_targog: { name: 'Targog Whalebeater' },
      str_vazgrat: { name: 'Vazgrat the Lucky' },
    },
    heroes: {
      str_braugh: { name: 'Braugh Slavelord' },
      str_brudd: { name: 'Brudd the Blackened' },
      str_kineater: { name: 'Drulg Kineater' },
      str_frostmaw: { name: 'Haurg Frostmaw', spellLore: SpellLores.ice },
      str_katerina: { name: 'Katerina de Hansebourg' },
    },
  },

  skv_skaven: {
    lords: {
      str_gnawdwell: { name: 'Lord Gnawdwell' },
      kd_kratch_doomclaw: { name: 'Kratch Doomclaw' },
      hcs_morskittar: { name: 'Lord Morskittar' },
    },
    heroes: {
      hcm_hackflay: { name: 'Ikk Hackflay' },
      str_natty: { name: 'Natty Buboe' },
      skv_ska_bloodtail: { name: 'Ska Bloodtail' },
      str_fylch: { name: 'Fylch Sharptail' },
    },
  },

  sla_slaanesh: {
    lords: {
      str_sssel: { name: 'Sss’el’ari the Golden, Lord of Paramountcy', spellLore: SpellLores.slaanesh },
    },
    heroes: {
      str_masque: { name: 'The Masque' },
    },
  },

  tmb_tomb_kings: {
    lords: {},
    heroes: {
      nyletoth: { name: 'Nyletoth the Charioteer' },
      str_serkhet: { name: 'Serkhet' },
    },
  },

  tze_tzeentch: {
    lords: {
      str_amon: { name: "Amon 'Chakai", spellLore: SpellLores.mixed },
    },
    heroes: {
      str_changeling: { name: 'Changeling', spellLore: SpellLores.tzeentch },
      str_scribes: { name: 'Blue Scribes', spellLore: SpellLores.mixed },
      str_xuqls: { name: "Xuq'ls" },
    },
  },

  vmp_vampire_counts: {
    lords: {
      str_rahtep: { name: 'Waldakir Rahtep', spellLore: SpellLores.mixed },

      hkrul_zach: { name: 'Zacharias the Everliving', spellLore: SpellLores.mixed },
    },
    heroes: {
      str_gothard: { name: 'Gothard the Undying Knight' },
      str_obadiah: { name: 'Obadiah Glothman', spellLore: SpellLores.vampires },
      str_ulrika: { name: 'Ulrika Magdova Straghov' },
    },
  },

  wef_wood_elves: {
    lords: {
      queen_marrisith: { name: 'Queen Marrisith' },
      oreon_ll: { name: 'Prince Oreon' },

      hkrul_sceolan: { name: 'Sceolan' },
      sceolan_wef_spellweaver_ice: { name: 'Spellweaver (Ice)', spellLore: SpellLores.ice },
    },
    heroes: {
      kou_skaw_lh: { name: 'Skaw the Falconer' },
      sceolan_wef_spellsinger_ice: { name: 'Spellsinger (Ice)', spellLore: SpellLores.ice },
    },
  },
};

export default lege3Characters;
