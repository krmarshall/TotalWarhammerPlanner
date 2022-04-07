import vanilla2Characters from './vanilla2Characters';

const vanilla3Characters = {
  ...vanilla2Characters,

  wh_dlc08_nor_norsca_lords: {
    nor_arzik: {
      name: 'Azrik the Maze Keeper',
    },
    nor_marauder_chieftain: {
      name: 'Marauder Chieftain',
    },
    nor_throgg: {
      name: 'Throgg',
    },
    nor_wulfrik: {
      name: 'Wulfrik the Wanderer',
    },
  },

  wh2_main_def_dark_elves_lords: {
    def_crone: {
      name: 'Crone Hellebron',
    },
    def_supreme_sorceress_beasts: {
      name: 'Supreme Sorceress (Beasts)',
      spellLore: 'beasts',
    },
    def_supreme_sorceress_dark: {
      name: 'Supreme Sorceress (Dark)',
      spellLore: 'dark',
    },
    def_supreme_sorceress_death: {
      name: 'Supreme Sorceress (Death)',
      spellLore: 'death',
    },
    def_supreme_sorceress_fire: {
      name: 'Supreme Sorceress (Fire)',
      spellLore: 'fire',
    },
    def_supreme_sorceress_shadow: {
      name: 'Supreme Sorceress (Shadows)',
      spellLore: 'shadows',
    },
    def_lokhir: {
      name: 'Lokhir Fellheart',
    },
    def_high_beastmaster: {
      name: 'High Beastmaster',
    },
    def_malus: {
      name: 'Malus Darkblade',
    },
    def_black_ark: {
      name: 'Black Ark',
    },
    def_dreadlord: {
      name: 'Dreadlord (Sword & Crossbow)',
    },
    def_dreadlord_fem: {
      name: 'Dreadlord (Sword & Shield)',
    },
    def_malekith: {
      name: 'Malekith',
    },
    def_morathi: {
      name: 'Morathi',
    },
    def_rakarth: {
      name: 'Rakarth',
    },
  },

  wh3_main_cth_cathay_lords: {
    cth_dragon_blooded_shugengan_yang: {
      name: 'Dragon-Blooded Shugengan Lord (Yang)',
    },
    cth_dragon_blooded_shugengan_yin: {
      name: 'Dragon-Blooded Shugengan Lord (Yin)',
    },
    cth_lord_caravan_master: {
      name: 'Caravan Master',
    },
    cth_lord_magistrate_yang: {
      name: 'Lord Magistrate (Yang)',
    },
    cth_lord_magistrate_yin: {
      name: 'Lord Magistrate (Yin)',
    },
    cth_miao_ying: {
      name: 'Miao Ying???',
    },
    cth_zhao_ming: {
      name: 'Zhaeo Ming???',
    },
  },
  wh3_main_cth_cathay_heroes: {
    cth_alchemist: {
      name: 'Alchemist',
    },
    cth_astromancer: {
      name: 'Astromancer',
    },
  },
  wh3_main_dae_daemons_lords: {
    dae_cha_be_lakor_0: {
      name: "Be'lakor???",
    },
    dae_daemon_prince: {
      name: 'Daemon Prince???',
    },
    kho_herald_of_khorne: {
      name: 'Herald of Khorne',
    },
    nur_herald_of_nurgle_death: {
      name: 'Herald of Nurgle (Death)',
    },
    nur_herald_of_nurgle_nurgle: {
      name: 'Herald of Nurgle (Nurgle)',
    },
    sla_herald_of_slaanesh_shadow: {
      name: 'Herald of Slaanesh (Shadow)',
    },
    sla_herald_of_slaanesh_slaanesh: {
      name: 'Herald of Slaanesh (Slaanesh)',
    },
    tze_herald_of_tzeentch_metal: {
      name: 'Herald of Tzeentch (Metal)',
    },
    tze_herald_of_tzeentch_tzeentch: {
      name: 'Herald of Tzeentch (Tzeentch)',
    },
  },
  wh3_main_dae_daemons_heroes: {
    kho_bloodreaper: {
      name: 'Bloodreaper',
    },
    nur_plagueridden_death: {
      name: 'Plagueridden (Death)',
    },
    nur_plagueridden_nurgle: {
      name: 'Plagueridden (Nurgle)',
    },
    sla_alluress_shadow: {
      name: 'Alluress (Shadow)',
    },
    sla_alluress_slaanesh: {
      name: 'Alluress (Slaanesh)',
    },
    tze_iridescent_horror_metal: {
      name: 'Iridescent Horror (Metal)',
    },
    tze_iridescent_horror_tzeentch: {
      name: 'Iridescent Horror (Tzeentch)',
    },
  },
  wh3_main_kho_khorne_lords: {
    kho_exalted_bloodthirster: {
      name: 'Exalted Bloodthirster',
    },
    kho_herald_of_khorne: {
      name: 'Herald of Khorne',
    },
    kho_skarbrand: {
      name: 'Skarbrand???',
    },
  },
  wh3_main_kho_khorne_heroes: {
    kho_bloodreaper: {
      name: 'Bloodreaper',
    },
    kho_cultist: {
      name: 'Cultist of Khorne',
    },
  },
  wh3_main_ksl_kislev_lords: {
    ksl_ataman: {
      name: 'Ataman???',
    },
    ksl_boris: {
      name: 'Boris Ursus???',
    },
    ksl_boyar: {
      name: 'Boyar',
    },
    ksl_ice_witch_ice: {
      name: 'Ice Witch (Ice)',
    },
    ksl_ice_witch_tempest: {
      name: 'Ice Witch (Tempest)',
    },
    ksl_katarin: {
      name: 'Tzarina Katarin???',
    },
    ksl_kostaltyn: {
      name: 'Kostaltyn???',
    },
  },
  wh3_main_ksl_kislev_heroes: {
    ksl_frost_maiden_ice: {
      name: 'Frost Maiden (Ice)',
    },
    ksl_frost_maiden_tempest: {
      name: 'Frost Maiden (Tempest)',
    },
    ksl_patriarch: {
      name: 'Patriarch',
    },
  },
  wh3_main_nur_nurgle_lords: {
    nur_exalted_great_unclean_one_death: {
      name: 'Exalted Great Unclean One (Death)',
    },
    nur_exalted_great_unclean_one_nurgle: {
      name: 'Exalted Great Unclean One (Nurgle)',
    },
    nur_herald_of_nurgle_death: {
      name: 'Herald of Nurgle (Death)',
    },
    nur_herald_of_nurgle_nurgle: {
      name: 'Herald of Nurgle (Nurgle)',
    },
    nur_kugath: {
      name: "Ku'gath Plaguefather???",
    },
  },
  wh3_main_nur_nurgle_heroes: {
    nur_cultist: {
      name: 'Cultist of Nurgle',
    },
    nur_plague_cultist: {
      name: 'Plague Cultist',
    },
    nur_plagueridden_death: {
      name: 'Plagueridden (Death)',
    },
    nur_plagueridden_nurgle: {
      name: 'Plagueridden (Nurgle)',
    },
  },
  wh3_main_ogr_ogre_kingdoms_lords: {
    ogr_greasus_goldtooth: {
      name: 'Greasus Goldtooth???',
    },
    ogr_skrag_the_slaughterer: {
      name: 'Skrag the Slaughterer???',
    },
    ogr_slaughtermaster_beasts: {
      name: 'Slaughtermaster (Beasts)',
    },
    ogr_slaughtermaster_great_maw: {
      name: 'Slaughtermaster (Great Maw)',
    },
    ogr_tyrant: {
      name: 'Tyrant',
    },
  },
  wh3_main_ogr_ogre_kingdoms_heroes: {
    ogr_butcher_beasts: {
      name: 'Butcher (Beasts)',
    },
    ogr_butcher_great_maw: {
      name: 'Butcher (Great Maw)',
    },
    ogr_firebelly: {
      name: 'Firebelly',
    },
    ogr_hunter: {
      name: 'Hunter',
    },
  },
  wh3_main_sla_slaanesh_lords: {
    sla_exalted_keeper_of_secrets_shadow: {
      name: 'Exalted Keeper of Secrets (Shadow)',
    },
    sla_exalted_keeper_of_secrets_slaanesh: {
      name: 'Exalted Keeper of Secrets (Slaanesh)',
    },
    sla_herald_of_slaanesh_shadow: {
      name: 'Herald of Slaanesh (Shadow)',
    },
    sla_herald_of_slaanesh_slaanesh: {
      name: 'Herald of Slaanesh (Slaanesh)',
    },
    sla_nkari: {
      name: "N'Kari???",
    },
  },
  wh3_main_sla_slaanesh_heroes: {
    sla_alluress_shadow: {
      name: 'Alluress (Shadow)',
    },
    sla_alluress_slaanesh: {
      name: 'Alluress (Slaanesh)',
    },
    sla_cultist: {
      name: 'Cultist of Slaanesh',
    },
  },
  wh3_main_tze_tzeentch_lords: {
    tze_exalted_lord_of_change_metal: {
      name: 'Exalted Lord of Change (Metal)',
    },
    tze_exalted_lord_of_change_tzeentch: {
      name: 'Exalted Lord of Change (Tzeentch)',
    },
    tze_herald_of_tzeentch_metal: {
      name: 'Herald of Tzeentch (Metal)',
    },
    tze_herald_of_tzeentch_tzeentch: {
      name: 'Herald of Tzeentch (Tzeentch)',
    },
    tze_kairos: {
      name: 'Kairos Fateweaver???',
    },
  },
  wh3_main_tze_tzeentch_heroes: {
    tze_cultist: {
      name: 'Cultist of Tzeentch',
    },
    tze_iridescent_horror_metal: {
      name: 'Iridescent Horror (Metal)',
    },
    tze_iridescent_horror_tzeentch: {
      name: 'Iridescent Horror (Tzeentch)',
    },
  },
};

export default vanilla3Characters;
