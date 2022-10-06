const mixu3Characters = {
  wh_main_brt_bretonnia_lords: {
    brt_adalhard: { name: 'Adalhard de Lyonesse' },
    brt_bohemond: { name: 'Bohemond Beastslayer' },
    brt_cassyon: { name: 'Cassyon de Parravon' },
    brt_chilfroy: { name: "Chilfroy d'Artois" },
    brt_sir_john: { name: 'Sir John Tyreweld' },
  },
  wh_main_brt_bretonnia_heroes: {
    brt_amalric_de_gaudaron: { name: 'Sir Almaric de Gaudaron' },
    brt_donna_don_domingio: { name: 'Donna Don Domingio' },
  },

  wh_dlc03_bst_beastmen_lords: {
    bst_ghorros_warhoof: { name: 'Ghorros Warhoof' },
    bst_slugtongue: { name: 'Molokh Slugtongue', spellLore: 'mixed' },
  },
  wh_dlc03_bst_beastmen_heroes: {
    bst_gorehoof: { name: 'Gorehoof' },
  },

  wh_main_chs_chaos_lords: {
    chs_egrimm_van_horstmann: { name: 'Egrimm van Horstmann', spellLore: 'light' },
    chs_malofex_the_storm_chaser: { name: 'Malofex the Storm-Chaser', spellLore: 'mixed' }, // Unknown
    tze_melekh_the_changer: { name: 'Melekh the Changer', spellLore: 'fire' },
  },
  wh_main_chs_chaos_heroes: {
    chs_azubhor_clawhand: { name: 'Azubhor Clawhand', spellLore: 'metal' }, // Unknown
  },

  wh2_main_def_dark_elves_lords: {
    def_tullaris_dreadbringer: { name: 'Tullaris Dreadbringer' },
  },
  wh2_main_def_dark_elves_heroes: {
    def_kouran_darkhand: { name: 'Kouran Darkhand' },
    def_tullaris_hero: { name: 'Tullaris Dreadbringer (Hero)' },
  },

  wh_main_dwf_dwarfs_lords: {
    dwf_grimm_burloksson: { name: 'Grimm Burloksson' },
    dwf_kazador_dragonslayer: { name: 'King Kazador' },
    dwf_kragg_the_grim: { name: 'Kragg the Grim', spellLore: 'runic' },
  },
  wh_main_dwf_dwarfs_heroes: {},

  wh_main_emp_empire_lords: {
    emp_alberich_haupt_anderssen: { name: 'Alberich Haupt-Anderssen' },
    emp_alberich_von_korden: { name: 'Alberich von Korden' },
    emp_aldebrand_ludenhof: { name: 'Aldebrand Ludenhof' },
    emp_edvard_van_der_kraal: { name: 'Edvard van der Kraal' },
    emp_elspeth: { name: 'Elspeth von Draken', spellLore: 'death' },
    emp_helmut_feuerbach: { name: 'Helmut Feuerbach' },
    emp_marius_leitdorf: { name: 'Marius Leitdorf' },
    emp_theoderic_gausser: { name: 'Theoderic Gausser' },
    emp_valmir_von_raukov: { name: 'Valmir von Raukov' },
    emp_wolfram_hertwig: { name: 'Wolfram Hertwig' },
  },
  wh_main_emp_empire_heroes: {
    emp_alberich_von_korden_hero: { name: 'Alberich von Korden (Hero)' },
    emp_luthor_huss: { name: 'Luthor Huss' },
    emp_theodore_bruckner: { name: 'Theodore Bruckner' },
    emp_vorn_thugenheim: { name: 'Vorn Thugenheim' }, // Unknown
    emp_warrior_priest_of_taal: { name: 'Warrior Priest of Taal' },
  },

  wh_main_grn_greenskins_lords: {
    grn_gorfang_rotgut: { name: 'Gorfang Rotgut' },
  },
  wh_main_grn_greenskins_heroes: {},

  wh2_main_hef_high_elves_lords: {
    hef_belannaer: { name: 'Belannaer the Wise', spellLore: 'mixed' },
    hef_caradryan: { name: 'Caradryan' },
    hef_korhil: { name: 'Korhil' },
  },
  wh2_main_hef_high_elves_heroes: {
    hef_caradryan_hero: { name: 'Caradryan (Hero)' },
  },

  wh2_main_lzd_lizardmen_lords: {
    lzd_lord_huinitenuchli: { name: 'Lord Huinitenuchli', spellLore: 'mixed' },
    lzd_tetto_eko: { name: "Tetto'eko", spellLore: 'heavens' },
  },
  wh2_main_lzd_lizardmen_heroes: {
    lzd_chakax: { name: 'Chakax' },
  },

  wh_dlc08_nor_norsca_lords: {
    nor_egil_styrbjorn: { name: 'Egil Styrbjorn' }, // Unknown
    nor_sea_raider: { name: 'Chieftain of the Sea' }, // Unknown
  },
  wh_dlc08_nor_norsca_heroes: {
    nor_fraygerd_styrbjorn: { name: 'Fraygerd Styrbjorn' }, // Unknown
    nor_hrefna_styrbjorn: { name: 'Hrefna Styrbjorn' }, // Unknown
  },

  wh2_main_skv_skaven_lords: {
    skv_feskit: { name: 'Warlord Feskit' },
    skv_grey_seer_death: { name: 'Grey Seer (Death)', spellLore: 'death' },
  },
  wh2_main_skv_skaven_heroes: {},

  wh2_dlc09_tmb_tomb_kings_lords: {
    tmb_tutankhanut: { name: 'King Tutankhanut' },
  },
  wh2_dlc09_tmb_tomb_kings_heroes: {
    tmb_ramhotep: { name: 'Ramhotep the Visionary' },
  },

  wh2_dlc11_cst_vampire_coast_lords: {},
  wh2_dlc11_cst_vampire_coast_heroes: {
    cst_drekla: { name: 'Captain Drekla', spellLore: 'mixed' },
  },

  wh_main_vmp_vampire_counts_lords: {
    vmp_dieter_helsnicht: { name: 'Dieter Helsnicht', spellLore: 'mixed' },
    // vmp_dieter_fortress: { name: '???' }, // Broke
  },
  wh_main_vmp_vampire_counts_heroes: {},

  wh_dlc05_wef_wood_elves_lords: {
    wef_daith: { name: 'Lord Daith' },
    wef_naieth_the_prophetess: { name: 'Prophetess Naieth', spellLore: 'heavens' },
    wef_wychwethyl: { name: 'Wychwethyl the Wild' },
  },
  wh_dlc05_wef_wood_elves_heroes: {},
};

export default mixu3Characters;
