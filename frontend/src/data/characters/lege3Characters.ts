import { SpellLores } from '../../types/interfaces/GameInterface';

const lege3Characters = {
  bst_beastmen: {
    lords: {
      str_ragush: { name: 'Ragush of the Bloody Horn' },
    },
    heroes: {},
  },

  brt_bretonnia: {
    lords: {},
    heroes: {
      ludwig_von_uberdorf: { name: 'Ludwig von Uberdorf' },
    },
  },

  dae_daemons: {
    lords: {
      str_slavin: { name: 'Slavin Kurnz' },
    },
    heroes: {},
  },

  dwf_dwarfs: {
    lords: {
      Helgar_longplaits: { name: 'Helgar Longplaits' },
    },
    heroes: {
      ludwig_von_uberdorf: { name: 'Ludwig von Uberdorf' },
    },
  },

  chs_chaos: {
    lords: {
      str_feytor: { name: 'Feytor the Tainted' },
      str_haargroth: { name: 'Haargroth the Blooded' },
      str_nastasya: { name: 'Nastasya Roskolnikov', spellLore: SpellLores.mixed },
      str_styrkaar: { name: 'Styrkaar of the Sortsvinaer' },
      str_crom: { name: 'Vardek Crom' },
      str_vandred: { name: 'Vandred the Majestic' },
    },
    heroes: {
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

  def_dark_elves: {
    lords: {
      str_fellheart: { name: 'Laithikar Fellheart' },
    },
    heroes: {
      str_shadowblade: { name: 'Shadowblade' },
    },
  },

  emp_empire: {
    lords: {
      hkrul_erkstein: { name: 'Grand Marshal Erkstein' },
      dead_kes: { name: 'Stefan von Kessel' },
      str_thyrus: { name: 'Thyrus Gorman', spellLore: SpellLores.fire },
    },
    heroes: {
      hkrul_aldred: { name: 'Aldred von Carroburg' },
      kou_aurelion_ll: { name: 'Aurelion', spellLore: SpellLores.mixed },
      bassiano_dutra: { name: 'Bassiano Dutra', spellLore: SpellLores.death },
      str_halagrundsor: { name: 'Halagrundsor the Horrible' },
      ludwig_von_uberdorf: { name: 'Ludwig von Uberdorf' },
    },
  },

  hef_high_elves: {
    lords: {},
    heroes: {
      kou_aurelion_ll: { name: 'Aurelion', spellLore: SpellLores.mixed },
    },
  },

  kho_khorne: {
    lords: {
      str_abrax: { name: 'Abrax the Bloody' },
    },
    heroes: {
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

  nur_nurgle: {
    lords: {
      str_valnir: { name: 'Valnir the Reaper' },
    },
    heroes: {
      pk_plague_epidemius: { name: 'Epidemius' },
    },
  },

  ogr_ogre_kingdoms: {
    lords: {},
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
      kd_kratch_doomclaw: { name: 'Kratch Doomclaw' },
      hcs_morskittar: { name: 'Lord Morskittar' },
    },
    heroes: {
      hcm_hackflay: { name: 'Ikk Hackflay' },
      skv_ska_bloodtail: { name: 'Ska Bloodtail' },
      str_fylch: { name: 'Fylch Sharptail' },
    },
  },

  sla_slaanesh: {
    lords: {},
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
    lords: {},
    heroes: {
      str_ulrika: { name: 'Ulrika Magdova Straghov' },
    },
  },

  wef_wood_elves: {
    lords: {
      queen_marrisith: { name: 'Queen Marrisith' },
      oreon_ll: { name: 'Oreon' },
    },
    heroes: {},
  },
};

export default lege3Characters;
