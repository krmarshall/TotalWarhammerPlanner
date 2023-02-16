import { SpellLores } from '../../types/interfaces/GameInterface';

const mixu3Characters = {
  bst_beastmen_lords: {
    bst_ghorros_warhoof: { name: 'Ghorros Warhoof' },
    bst_slugtongue: { name: 'Molokh Slugtongue', spellLore: SpellLores.mixed },
  },
  bst_beastmen_heroes: {
    bst_gorehoof: { name: 'Gorehoof' },
  },

  brt_bretonnia_lords: {
    brt_adalhard: { name: 'Adalhard de Lyonesse' },
    brt_bohemond: { name: 'Bohemond Beastslayer' },
    brt_cassyon: { name: 'Cassyon de Parravon' },
    brt_chilfroy: { name: "Chilfroy d'Artois" },
    brt_sir_john: { name: 'Sir John Tyreweld' },
  },
  brt_bretonnia_heroes: {
    brt_amalric_de_gaudaron: { name: 'Sir Almaric de Gaudaron' },
    brt_donna_don_domingio: { name: 'Donna Don Domingio' },
  },

  chs_chaos_lords: {
    // chs_malofex_the_storm_chaser: { name: 'Malofex the Storm-Chaser', spellLore: SpellLores.mixed },
    tze_melekh_the_changer: { name: 'Melekh the Changer', spellLore: SpellLores.fire },
  },
  chs_chaos_heroes: {
    // chs_azubhor_clawhand: { name: 'Azubhor Clawhand', spellLore: SpellLores.metal },
  },

  def_dark_elves_lords: {
    def_tullaris_dreadbringer: { name: 'Tullaris Dreadbringer' },
  },
  def_dark_elves_heroes: {
    def_kouran_darkhand: { name: 'Kouran Darkhand' },
    def_tullaris_hero: { name: 'Tullaris Dreadbringer (Hero)' },
  },

  dwf_dwarfs_lords: {
    dwf_grimm_burloksson: { name: 'Grimm Burloksson' },
    dwf_kazador_dragonslayer: { name: 'King Kazador' },
    dwf_kragg_the_grim: { name: 'Kragg the Grim', spellLore: SpellLores.runic },
    dwf_daemon_slayer: { name: 'Daemon Slayer' },
  },
  dwf_dwarfs_heroes: {
    dwf_dragon_slayer: { name: 'Dragon Slayer' },
  },

  emp_empire_lords: {
    emp_alberich_haupt_anderssen: { name: 'Alberich Haupt-Anderssen' },
    emp_alberich_von_korden: { name: 'Alberich von Korden' },
    emp_aldebrand_ludenhof: { name: 'Aldebrand Ludenhof' },
    emp_edvard_van_der_kraal: { name: 'Edvard van der Kraal' },
    emp_elspeth: { name: 'Elspeth von Draken', spellLore: SpellLores.death },
    emp_helmut_feuerbach: { name: 'Helmut Feuerbach' },
    emp_marius_leitdorf: { name: 'Marius Leitdorf' },
    emp_theoderic_gausser: { name: 'Theoderic Gausser' },
    emp_valmir_von_raukov: { name: 'Valmir von Raukov' },
    emp_wolfram_hertwig: { name: 'Wolfram Hertwig' },
  },
  emp_empire_heroes: {
    emp_alberich_von_korden_hero: { name: 'Alberich von Korden (Hero)' },
    emp_luthor_huss: { name: 'Luthor Huss' },
    emp_theodore_bruckner: { name: 'Theodore Bruckner' },
    emp_vorn_thugenheim: { name: 'Vorn Thugenheim' }, // Unknown
    emp_warrior_priest_of_taal: { name: 'Warrior Priest of Taal' },
  },

  grn_greenskins_lords: {
    grn_gorfang_rotgut: { name: 'Gorfang Rotgut' },
  },
  grn_greenskins_heroes: {},

  hef_high_elves_lords: {
    hef_belannaer: { name: 'Belannaer the Wise', spellLore: SpellLores.mixed },
    hef_caradryan: { name: 'Caradryan' },
    hef_korhil: { name: 'Korhil' },
  },
  hef_high_elves_heroes: {
    hef_caradryan_hero: { name: 'Caradryan (Hero)' },
  },

  lzd_lizardmen_lords: {
    lzd_lord_huinitenuchli: { name: 'Lord Huinitenuchli', spellLore: SpellLores.mixed },
    lzd_tetto_eko: { name: "Tetto'eko", spellLore: SpellLores.heavens },
  },
  lzd_lizardmen_heroes: {
    lzd_chakax: { name: 'Chakax' },
  },

  nor_norsca_lords: {
    nor_egil_styrbjorn: { name: 'Egil Styrbjorn' }, // Unknown
    nor_sea_raider: { name: 'Chieftain of the Sea' }, // Unknown
  },
  nor_norsca_heroes: {
    nor_fraygerd_styrbjorn: { name: 'Fraygerd Styrbjorn' }, // Unknown
    nor_hrefna_styrbjorn: { name: 'Hrefna Styrbjorn' }, // Unknown
  },

  skv_skaven_lords: {
    skv_feskit: { name: 'Warlord Feskit' },
    skv_grey_seer_death: { name: 'Grey Seer (Death)', spellLore: SpellLores.death },
  },
  skv_skaven_heroes: {},

  tmb_tomb_kings_lords: {
    tmb_tutankhanut: { name: 'King Tutankhanut' },
  },
  tmb_tomb_kings_heroes: {
    tmb_ramhotep: { name: 'Ramhotep the Visionary' },
  },

  tze_tzeentch_lords: {
    chs_egrimm_van_horstmann: { name: 'Egrimm van Horstmann', spellLore: SpellLores.mixed },
  },
  tze_tzeentch_heroes: {
    tze_exalted_hero: { name: 'Exalted Hero of Tzeentch' },
  },

  cst_vampire_coast_lords: {},
  cst_vampire_coast_heroes: {
    cst_drekla: { name: 'Captain Drekla', spellLore: SpellLores.mixed },
  },

  vmp_vampire_counts_lords: {
    vmp_dieter_helsnicht: { name: 'Dieter Helsnicht', spellLore: SpellLores.mixed },
    // vmp_dieter_fortress: { name: '???' }, // Broke
  },
  vmp_vampire_counts_heroes: {},

  wef_wood_elves_lords: {
    wef_daith: { name: 'Lord Daith' },
    wef_naieth_the_prophetess: { name: 'Prophetess Naieth', spellLore: SpellLores.heavens },
    wef_wychwethyl: { name: 'Wychwethyl the Wild' },
  },
  wef_wood_elves_heroes: {
    wef_shadowdancer: { name: 'Shadowdancer', spellLore: SpellLores.mixed },
  },

  gnb_gnoblars_lords: {
    bragg_the_gutsman: { name: 'Bragg The Gutsman' },
    gnobbo: { name: 'Gnobbo' },
    king_bezos: { name: 'King Bezos' },
    head_honcho: { name: 'Head Honcho' },
  },
  gnb_gnoblars_heroes: {
    bloodnose: { name: 'Bloodnose' },
    bonechewer_beasts: { name: 'Bonechewer (Beasts)', spellLore: SpellLores.beasts },
    bonechewer_great_maw: { name: 'Bonechewer (Great Maw)', spellLore: SpellLores.greatMaw },
    scrapper: { name: 'Scrapper' },
    woodbelly: { name: 'Woodbelly' },
  },
};

export default mixu3Characters;
