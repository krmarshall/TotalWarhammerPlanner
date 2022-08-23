import vanilla2Characters from './vanilla2Characters';

const vanilla3Characters = {
  ...vanilla2Characters,

  // Chieftain spelled properly in 3
  wh_dlc08_nor_norsca_lords: {
    nor_burplesmirk_spewpit: {
      name: 'Burplesmirk Spewpit???',
      spellLore: 'mixed',
    },
    nor_throgg: {
      name: 'Throgg',
    },
    nor_wulfrik: {
      name: 'Wulfrik the Wanderer',
    },
    nor_arzik: {
      name: 'Azrik the Maze Keeper',
    },
    nor_marauder_chieftain: {
      name: 'Marauder Chieftain',
    },
  },
  wh_dlc08_nor_norsca_heroes: {
    nor_kihar: {
      name: 'Kihar the Tormentor',
    },
    nor_killgore_slaymaim: {
      name: 'Killgore Slaymaim???',
    },
    nor_fimir_balefiend_fire: {
      name: 'Fimir Balefiend (Fire)',
      spellLore: 'fire',
    },
    nor_fimir_balefiend_shadow: {
      name: 'Fimir Balefiend (Shadows)',
      spellLore: 'shadows',
    },
    nor_shaman_sorcerer_death: {
      name: 'Shaman-Sorcerer (Death)',
      spellLore: 'death',
    },
    nor_shaman_sorcerer_fire: {
      name: 'Shaman-Sorcerer (Fire)',
      spellLore: 'fire',
    },
    nor_shaman_sorcerer_metal: {
      name: 'Shaman-Sorcerer (Metal)',
      spellLore: 'metal',
    },
    nor_skin_wolf_werekin: {
      name: 'Skin Wolf Werekin',
    },
  },

  wh_main_vmp_vampire_counts_lords: {
    vmp_heinrich: {
      name: 'Heinrich Kemmler',
      spellLore: 'vampires',
    },
    vmp_helman_ghorst: {
      name: 'Helman Ghorst',
      spellLore: 'vampires',
    },
    vmp_isabella_von_carstein: {
      name: 'Isabella von Carstein',
      spellLore: 'vampires',
    },
    vmp_mannfred: {
      name: 'Mannlet von Carstein',
      spellLore: 'vampires',
    },
    vmp_vlad_von_carstein: {
      name: 'Chad von Carstein',
      spellLore: 'vampires',
    },
    vmp_red_duke: {
      name: 'The Red Duke',
      spellLore: 'vampires',
    },
    vmp_bloodline_blood_dragon_lord: {
      name: 'Blood Dragon Vampire Lord',
      spellLore: 'vampires',
    },
    vmp_bloodline_lahmian_lord: {
      name: 'Lahmian Vampire Lord',
      spellLore: 'mixed',
    },
    vmp_bloodline_necrarch_lord: {
      name: 'Necrarch Vampire Lord',
      spellLore: 'mixed',
    },
    vmp_bloodline_strigoi_lord: {
      name: 'Strigoi Vampire Lord',
      spellLore: 'mixed',
    },
    vmp_bloodline_von_carstein_lord: {
      name: 'Von Carstein Vampire Lord',
      spellLore: 'mixed',
    },
    vmp_master_necromancer: {
      name: 'Master Necromancer',
      spellLore: 'vampires',
    },
    vmp_strigoi_ghoul_king: {
      name: 'Strigoi Ghoul King',
      spellLore: 'mixed',
    },
    vmp_lord: {
      name: 'Vampire Lord',
      spellLore: 'vampires',
    },
  },
  wh_main_vmp_vampire_counts_heroes: {
    vmp_isabella_von_carstein_hero: {
      name: 'Isabella von Carstein (Hero)',
      spellLore: 'vampires',
    },
    vmp_vlad_von_carstein_hero: {
      name: 'Chad von Carstein (Hero)',
      spellLore: 'vampires',
    },
    vmp_kevon_lloydstein: {
      name: 'Kevin von Lloydstein',
    },
    vmp_banshee: {
      name: 'Banshee',
    },
    vmp_necromancer: {
      name: 'Necromancer',
      spellLore: 'vampires',
    },
    vmp_vampire: {
      name: 'Vampire (Death)',
      spellLore: 'death',
    },
    vmp_vampire_shadow: {
      name: 'Vampire (Shadows)',
      spellLore: 'shadows',
    },
    vmp_wight_king: {
      name: 'Wight King',
    },
  },

  // // No Black Ark Blessed Dread
  // wh2_main_def_dark_elves_lords: {
  //   def_crone: {
  //     name: 'Crone Hellebron',
  //   },
  //   def_lokhir: {
  //     name: 'Lokhir Fellheart',
  //   },
  //   def_malus: {
  //     name: 'Malus Darkblade',
  //   },
  //   def_malekith: {
  //     name: 'Malekith',
  //     spellLore: 'dark',
  //   },
  //   def_morathi: {
  //     name: 'Morathi',
  //     spellLore: 'mixed',
  //   },
  //   def_rakarth: {
  //     name: 'Rakarth',
  //   },
  //   def_black_ark: {
  //     name: 'Black Ark',
  //   },
  //   def_dreadlord: {
  //     name: 'Dreadlord (Sword & Crossbow)',
  //   },
  //   def_dreadlord_fem: {
  //     name: 'Dreadlord (Sword & Shield)',
  //   },
  //   def_high_beastmaster: {
  //     name: 'High Beastmaster',
  //   },
  //   def_supreme_sorceress_beasts: {
  //     name: 'Supreme Sorceress (Beasts)',
  //     spellLore: 'beasts',
  //   },
  //   def_supreme_sorceress_dark: {
  //     name: 'Supreme Sorceress (Dark)',
  //     spellLore: 'dark',
  //   },
  //   def_supreme_sorceress_death: {
  //     name: 'Supreme Sorceress (Death)',
  //     spellLore: 'death',
  //   },
  //   def_supreme_sorceress_fire: {
  //     name: 'Supreme Sorceress (Fire)',
  //     spellLore: 'fire',
  //   },
  //   def_supreme_sorceress_shadow: {
  //     name: 'Supreme Sorceress (Shadows)',
  //     spellLore: 'shadows',
  //   },
  // },

  wh3_main_cth_cathay_lords: {
    cth_miao_ying: {
      name: 'Miao Ying',
      spellLore: 'mixed',
    },
    cth_zhao_ming: {
      name: 'Zhao Ming',
      spellLore: 'mixed',
    },
    cth_lord_caravan_master: {
      name: 'Caravan Master',
    },
    cth_dragon_blooded_shugengan_yang: {
      name: 'Dragon-Blooded Shugengan Lord (Yang)',
      spellLore: 'yang',
    },
    cth_dragon_blooded_shugengan_yin: {
      name: 'Dragon-Blooded Shugengan Lord (Yin)',
      spellLore: 'yin',
    },
    cth_lord_magistrate_yang: {
      name: 'Lord Magistrate (Yang)',
      spellLore: 'yang',
    },
    cth_lord_magistrate_yin: {
      name: 'Lord Magistrate (Yin)',
      spellLore: 'yin',
    },
  },
  wh3_main_cth_cathay_heroes: {
    cth_alchemist: {
      name: 'Alchemist',
      spellLore: 'metal',
    },
    cth_astromancer: {
      name: 'Astromancer',
      spellLore: 'heavens',
    },
  },
  // TO DO: Check what CoC lord/heroes are available to Daemon Prince, check for WoC version of Belakor?
  wh3_main_dae_daemons_lords: {
    dae_cha_be_lakor_0: {
      name: "Be'lakor",
      spellLore: 'shadows',
    },
    dae_daemon_prince: {
      name: 'Daemon Prince',
    },
    kho_herald_of_khorne: {
      name: 'Herald of Khorne',
    },
    nur_herald_of_nurgle_death: {
      name: 'Herald of Nurgle (Death)',
      spellLore: 'death',
    },
    nur_herald_of_nurgle_nurgle: {
      name: 'Herald of Nurgle (Nurgle)',
      spellLore: 'nurgle',
    },
    sla_herald_of_slaanesh_shadow: {
      name: 'Herald of Slaanesh (Shadow)',
      spellLore: 'shadows',
    },
    sla_herald_of_slaanesh_slaanesh: {
      name: 'Herald of Slaanesh (Slaanesh)',
      spellLore: 'slaanesh',
    },
    tze_herald_of_tzeentch_metal: {
      name: 'Herald of Tzeentch (Metal)',
      spellLore: 'metal',
    },
    tze_herald_of_tzeentch_tzeentch: {
      name: 'Herald of Tzeentch (Tzeentch)',
      spellLore: 'tzeentch',
    },
  },
  wh3_main_dae_daemons_heroes: {
    sla_alluress_shadow: {
      name: 'Alluress (Shadow)',
      spellLore: 'shadows',
    },
    sla_alluress_slaanesh: {
      name: 'Alluress (Slaanesh)',
      spellLore: 'slaanesh',
    },
    kho_bloodreaper: {
      name: 'Bloodreaper',
    },
    // Updated
    chs_exalted_hero_mkho: {
      name: 'Exalted Hero of Khorne',
    },
    tze_iridescent_horror_metal: {
      name: 'Iridescent Horror (Metal)',
      spellLore: 'metal',
    },
    tze_iridescent_horror_tzeentch: {
      name: 'Iridescent Horror (Tzeentch)',
      spellLore: 'tzeentch',
    },
    nur_plagueridden_death: {
      name: 'Plagueridden (Death)',
      spellLore: 'death',
    },
    nur_plagueridden_nurgle: {
      name: 'Plagueridden (Nurgle)',
      spellLore: 'nurgle',
    },
  },
  wh3_main_kho_khorne_lords: {
    kho_skarbrand: {
      name: 'Skarbrand the Exiled',
    },
    kho_exalted_bloodthirster: {
      name: 'Exalted Bloodthirster',
    },
    kho_herald_of_khorne: {
      name: 'Herald of Khorne',
    },
    // Updated
    chs_lord_mkho: {
      name: 'Chaos Lord of Khorne',
    },
  },
  wh3_main_kho_khorne_heroes: {
    kho_bloodreaper: {
      name: 'Bloodreaper',
    },
    kho_cultist: {
      name: 'Cultist of Khorne',
    },
    // Updated
    chs_exalted_hero_mkho: {
      name: 'Exalted Hero of Khorne',
    },
  },
  wh3_main_ksl_kislev_lords: {
    ksl_boris: {
      name: 'Boris Ursus',
    },
    ksl_kostaltyn: {
      name: 'Kostaltyn',
    },
    ksl_katarin: {
      name: 'Tzarina Katarin',
      spellLore: 'ice',
    },
    ksl_ataman: {
      name: 'Ataman',
    },
    ksl_boyar: {
      name: 'Boyar',
    },
    ksl_ice_witch_ice: {
      name: 'Ice Witch (Ice)',
      spellLore: 'ice',
    },
    ksl_ice_witch_tempest: {
      name: 'Ice Witch (Tempest)',
      spellLore: 'tempest',
    },
  },
  wh3_main_ksl_kislev_heroes: {
    ksl_frost_maiden_ice: {
      name: 'Frost Maiden (Ice)',
      spellLore: 'ice',
    },
    ksl_frost_maiden_tempest: {
      name: 'Frost Maiden (Tempest)',
      spellLore: 'tempest',
    },
    ksl_patriarch: {
      name: 'Patriarch',
    },
  },
  wh3_main_nur_nurgle_lords: {
    nur_kugath: {
      name: "Ku'gath Plaguefather",
      spellLore: 'nurgle',
    },
    nur_exalted_great_unclean_one_death: {
      name: 'Exalted Great Unclean One (Death)',
      spellLore: 'death',
    },
    nur_exalted_great_unclean_one_nurgle: {
      name: 'Exalted Great Unclean One (Nurgle)',
      spellLore: 'nurgle',
    },
    nur_herald_of_nurgle_death: {
      name: 'Herald of Nurgle (Death)',
      spellLore: 'death',
    },
    nur_herald_of_nurgle_nurgle: {
      name: 'Herald of Nurgle (Nurgle)',
      spellLore: 'nurgle',
    },
    // Updated
    chs_sorcerer_lord_death_mnur: {
      name: 'Chaos Sorcerer Lord (Death)',
      spellLore: 'death',
    },
    // Updated
    chs_sorcerer_lord_nurgle_mnur: {
      name: 'Chaos Sorcerer Lord (Nurgle)',
      spellLore: 'nurgle',
    },
  },
  wh3_main_nur_nurgle_heroes: {
    nur_cultist: {
      name: 'Cultist of Nurgle',
    },
    // Updated
    chs_exalted_hero_mnur: {
      name: 'Exalted Hero of Nurgle',
    },
    nur_plagueridden_death: {
      name: 'Plagueridden (Death)',
      spellLore: 'death',
    },
    nur_plagueridden_nurgle: {
      name: 'Plagueridden (Nurgle)',
      spellLore: 'nurgle',
    },
  },
  wh3_main_ogr_ogre_kingdoms_lords: {
    ogr_greasus_goldtooth: {
      name: 'Greasus Goldtooth',
    },
    ogr_skrag_the_slaughterer: {
      name: 'Skrag the Slaughterer',
      spellLore: 'greatMaw',
    },
    ogr_slaughtermaster_beasts: {
      name: 'Slaughtermaster (Beasts)',
      spellLore: 'beasts',
    },
    ogr_slaughtermaster_great_maw: {
      name: 'Slaughtermaster (Great Maw)',
      spellLore: 'greatMaw',
    },
    ogr_tyrant: {
      name: 'Tyrant',
    },
  },
  wh3_main_ogr_ogre_kingdoms_heroes: {
    ogr_butcher_beasts: {
      name: 'Butcher (Beasts)',
      spellLore: 'beasts',
    },
    ogr_butcher_great_maw: {
      name: 'Butcher (Great Maw)',
      spellLore: 'greatMaw',
    },
    ogr_firebelly: {
      name: 'Firebelly',
      spellLore: 'fire',
    },
    ogr_hunter: {
      name: 'Hunter',
    },
  },
  wh3_main_sla_slaanesh_lords: {
    sla_nkari: {
      name: "N'Kari",
      spellLore: 'slaanesh',
    },
    sla_exalted_keeper_of_secrets_shadow: {
      name: 'Exalted Keeper of Secrets (Shadow)',
      spellLore: 'shadows',
    },
    sla_exalted_keeper_of_secrets_slaanesh: {
      name: 'Exalted Keeper of Secrets (Slaanesh)',
      spellLore: 'slaanesh',
    },
    sla_herald_of_slaanesh_shadow: {
      name: 'Herald of Slaanesh (Shadow)',
      spellLore: 'shadows',
    },
    sla_herald_of_slaanesh_slaanesh: {
      name: 'Herald of Slaanesh (Slaanesh)',
      spellLore: 'slaanesh',
    },
    // Updated
    chs_lord_msla: {
      name: 'Chaos Lord of Slaanesh',
    },
  },
  wh3_main_sla_slaanesh_heroes: {
    sla_alluress_shadow: {
      name: 'Alluress (Shadow)',
      spellLore: 'shadows',
    },
    sla_alluress_slaanesh: {
      name: 'Alluress (Slaanesh)',
      spellLore: 'slaanesh',
    },
    sla_cultist: {
      name: 'Cultist of Slaanesh',
    },
    // Updated
    chs_sorcerer_shadows_msla: {
      name: 'Chaos Sorcerer (Shadows)',
      spellLore: 'shadows',
    },
    // Updated
    chs_sorcerer_slaanesh_msla: {
      name: 'Chaos Sorcerer (Slaanesh)',
      spellLore: 'slaanesh',
    },
  },
  wh3_main_tze_tzeentch_lords: {
    tze_kairos: {
      name: 'Kairos Fateweaver',
      spellLore: 'mixed',
    },
    tze_exalted_lord_of_change_metal: {
      name: 'Exalted Lord of Change (Metal)',
      spellLore: 'metal',
    },
    tze_exalted_lord_of_change_tzeentch: {
      name: 'Exalted Lord of Change (Tzeentch)',
      spellLore: 'tzeentch',
    },
    tze_herald_of_tzeentch_metal: {
      name: 'Herald of Tzeentch (Metal)',
      spellLore: 'metal',
    },
    tze_herald_of_tzeentch_tzeentch: {
      name: 'Herald of Tzeentch (Tzeentch)',
      spellLore: 'tzeentch',
    },
    // Updated
    chs_sorcerer_lord_metal_mtze: {
      name: 'Chaos Sorcerer Lord (Metal)',
      spellLore: 'metal',
    },
    // Updated
    chs_sorcerer_lord_tzeentch_mtze: {
      name: 'Chaos Sorcerer Lord (Tzeentch)',
      spellLore: 'tzeentch',
    },
  },
  wh3_main_tze_tzeentch_heroes: {
    tze_cultist: {
      name: 'Cultist of Tzeentch',
      spellLore: 'fire',
    },
    tze_iridescent_horror_metal: {
      name: 'Iridescent Horror (Metal)',
      spellLore: 'metal',
    },
    tze_iridescent_horror_tzeentch: {
      name: 'Iridescent Horror (Tzeentch)',
      spellLore: 'tzeentch',
    },
    // Updated
    chs_sorcerer_metal_mtze: {
      name: 'Chaos Sorcerer (Metal)',
      spellLore: 'metal',
    },
    // Updated
    chs_sorcerer_tzeentch_mtze: {
      name: 'Chaos Sorcerer (Tzeentch)',
      spellLore: 'tzeentch',
    },
  },

  wh_main_chs_chaos_lords: {
    chs_archaon: {
      name: 'Archaon the Everchosen',
      spellLore: 'mixed',
    },
    // Updated
    sla_azazel: {
      name: 'Azazel',
      spellLore: 'slaanesh',
    },
    // Guess
    dae_cha_be_lakor_0: {
      name: "Be'lakor",
      spellLore: 'shadows',
    },
    // Updated
    nur_festus: {
      name: 'Festus the Chinlord',
      spellLore: 'mixed',
    },
    chs_kholek: {
      name: 'Kholek Suneater',
    },
    chs_sigvald: {
      name: 'Prince Sigvald the Magnificent',
    },
    // Updated
    kho_valkia: {
      name: 'Valkia the Bloody',
    },
    // Updated
    tze_vilitch: {
      name: 'Vilitch the Curseling',
      spellLore: 'tzeentch',
    },
    chs_lord_of_change: {
      name: 'Sarthorael the Everwatcher',
      spellLore: 'metal',
    },
    chs_lord: {
      name: 'Chaos Lord',
    },
    // // Guess
    // chs_lord_of_khorne: {
    //   name: 'Chaos Lord of Khorne',
    // },
    // // Guess
    // chs_lord_of_slaanesh: {
    //   name: 'Chaos Lord of Slaanesh',
    // },
    chs_sorcerer_lord_death: {
      name: 'Chaos Sorcerer Lord (Death)',
      spellLore: 'death',
    },
    chs_sorcerer_lord_fire: {
      name: 'Chaos Sorcerer Lord (Fire)',
      spellLore: 'fire',
    },
    chs_sorcerer_lord_metal: {
      name: 'Chaos Sorcerer Lord (Metal)',
      spellLore: 'metal',
    },
    // // Guess
    // chs_sorcerer_lord_nurgle: {
    //   name: 'Chaos Sorcerer Lord (Nurgle)',
    //   spellLore: 'nurgle',
    // },
    chs_sorcerer_lord_shadow: {
      name: 'Chaos Sorcerer Lord (Shadows)',
      spellLore: 'shadows',
    },
    // // Guess
    // chs_sorcerer_lord_tzeentch: {
    //   name: 'Chaos Sorcerer Lord (Tzeentch)',
    //   spellLore: 'tzeentch',
    // },
  },

  wh_main_chs_chaos_heroes: {
    chs_exalted_hero: {
      name: 'Exalted Hero',
    },
    // Updated
    chs_exalted_hero_mkho: {
      name: 'Exalted Hero of Khorne',
    },
    // Updated
    chs_exalted_hero_mnur: {
      name: 'Exalted Hero of Nurgle',
    },
    chs_chaos_sorcerer_death: {
      name: 'Chaos Sorcerer (Death)',
      spellLore: 'death',
    },
    chs_chaos_sorcerer_fire: {
      name: 'Chaos Sorcerer (Fire)',
      spellLore: 'fire',
    },
    chs_chaos_sorcerer_metal: {
      name: 'Chaos Sorcerer (Metal)',
      spellLore: 'metal',
    },
    chs_sorcerer_shadow: {
      name: 'Chaos Sorcerer (Shadows)',
      spellLore: 'shadows',
    },
    // Updated
    chs_sorcerer_shadows_msla: {
      name: 'Chaos Sorcerer (Shadows)',
      spellLore: 'shadows',
    },
    // Updated
    chs_sorcerer_slaanesh_msla: {
      name: 'Chaos Sorcerer (Slaanesh)',
      spellLore: 'slaanesh',
    },
    // Updated
    chs_sorcerer_metal_mtze: {
      name: 'Chaos Sorcerer (Metal)',
      spellLore: 'metal',
    },
    // Updated
    chs_sorcerer_tzeentch_mtze: {
      name: 'Chaos Sorcerer (Tzeentch)',
      spellLore: 'tzeentch',
    },
  },
};

export default vanilla3Characters;
