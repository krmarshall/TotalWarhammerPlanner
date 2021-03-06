import vanilla2Characters from './vanilla2Characters';

const vanilla3Characters = {
  ...vanilla2Characters,

  // Chieftain spelled properly in 3
  wh_dlc08_nor_norsca_lords: {
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

  // No Black Ark Blessed Dread
  wh2_main_def_dark_elves_lords: {
    def_crone: {
      name: 'Crone Hellebron',
    },
    def_lokhir: {
      name: 'Lokhir Fellheart',
    },
    def_malus: {
      name: 'Malus Darkblade',
    },
    def_malekith: {
      name: 'Malekith',
      spellLore: 'dark',
    },
    def_morathi: {
      name: 'Morathi',
      spellLore: 'mixed',
    },
    def_rakarth: {
      name: 'Rakarth',
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
    def_high_beastmaster: {
      name: 'High Beastmaster',
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
  },

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
  wh3_main_dae_daemons_lords: {
    dae_cha_be_lakor_0: {
      name: "Be'lakor???",
      spellLore: 'shadows',
    },
    dae_daemon_prince: {
      name: 'Daemon Prince???',
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
      name: 'Skarbrand???',
    },
    kho_exalted_bloodthirster: {
      name: 'Exalted Bloodthirster',
    },
    kho_herald_of_khorne: {
      name: 'Herald of Khorne',
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
    ksl_boris: {
      name: 'Boris Ursus???',
    },
    ksl_kostaltyn: {
      name: 'Kostaltyn???',
    },
    ksl_katarin: {
      name: 'Tzarina Katarin???',
      spellLore: 'ice',
    },
    ksl_ataman: {
      name: 'Ataman???',
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
      name: "Ku'gath Plaguefather???",
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
  },
  wh3_main_nur_nurgle_heroes: {
    nur_cultist: {
      name: 'Cultist of Nurgle',
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
      name: 'Greasus Goldtooth???',
    },
    ogr_skrag_the_slaughterer: {
      name: 'Skrag the Slaughterer???',
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
      name: "N'Kari???",
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
  },
  wh3_main_tze_tzeentch_lords: {
    tze_kairos: {
      name: 'Kairos Fateweaver???',
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
  },
};

export default vanilla3Characters;
