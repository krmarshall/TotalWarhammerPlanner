import { SpellLores } from '../../types/interfaces/GameInterface';

const lege3Characters = {
  bst_beastmen_lords: {
    str_ragush: { name: 'Ragush of the Bloody Horn' },
  },
  bst_beastmen_heroes: {},

  brt_bretonnia_lords: {},
  brt_bretonnia_heroes: {
    ludwig_von_uberdorf: { name: 'Ludwig von Uberdorf' },
  },

  dae_daemons_lords: {
    str_slavin: { name: 'Slavin Kurnz' },
  },
  dae_daemons_heroes: {},

  dwf_dwarfs_lords: {
    Helgar_longplaits: { name: 'Helgar Longplaits' },
  },
  dwf_dwarfs_heroes: {
    ludwig_von_uberdorf: { name: 'Ludwig von Uberdorf' },
  },

  chs_chaos_lords: {
    str_feytor: { name: 'Feytor the Tainted' },
    str_haargroth: { name: 'Haargroth the Blooded' },
    str_nastasya: { name: 'Nastasya Roskolnikov', spellLore: SpellLores.mixed },
    str_styrkaar: { name: 'Styrkaar of the Sortsvinaer' },
    str_crom: { name: 'Vardek Crom' },
    str_vandred: { name: 'Vandred the Majestic' },
  },
  chs_chaos_heroes: {
    str_scyla: { name: 'Scyla Anfingrimm' },
    str_slambo: { name: 'SLAMBO' },
  },

  cth_cathay_lords: {},
  cth_cathay_heroes: {
    str_nanye: { name: 'Nanye Bunyo' },
    str_xian: { name: 'Xian Feng' },
  },

  def_dark_elves_lords: {
    str_fellheart: { name: 'Laithikar Fellheart' },
  },
  def_dark_elves_heroes: {
    str_shadowblade: { name: 'Shadowblade' },
  },

  emp_empire_lords: {
    hkrul_erkstein: { name: 'Grand Marshal Erkstein' },
    dead_kes: { name: 'Stefan von Kessel' },
    str_thyrus: { name: 'Thyrus Gorman', spellLore: SpellLores.fire },
  },
  emp_empire_heroes: {
    hkrul_aldred: { name: 'Aldred von Carroburg' },
    kou_aurelion_ll: { name: 'Aurelion', spellLore: SpellLores.mixed },
    bassiano_dutra: { name: 'Bassiano Dutra', spellLore: SpellLores.death },
    str_halagrundsor: { name: 'Halagrundsor the Horrible' },
    ludwig_von_uberdorf: { name: 'Ludwig von Uberdorf' },
  },

  hef_high_elves_lords: {},
  hef_high_elves_heroes: {
    kou_aurelion_ll: { name: 'Aurelion', spellLore: SpellLores.mixed },
  },

  kho_khorne_lords: {
    str_abrax: { name: 'Abrax the Bloody' },
  },
  kho_khorne_heroes: {
    str_scyla: { name: 'Scyla Anfingrimm' },
    str_skulltaker: { name: 'Skulltaker' },
  },

  ksl_kislev_lords: {
    dead_ksl_dmitri_tzaryov: { name: 'Dmitry Tzaryov' },
  },
  ksl_kislev_heroes: {
    dead_grigori: { name: 'Grigori Medvezhiy' },
    str_ilja: { name: 'Ilja of Murova' },
    ludwig_von_uberdorf: { name: 'Ludwig von Uberdorf' },
    str_naryaska: { name: 'Naryaska Leysa, the Golden Knight' },
    dead_ice_mage: { name: 'Vladimir Stormbringer', spellLore: SpellLores.tempest },
  },

  lzd_lizardmen_lords: {
    zlatgar_ll: { name: 'Zlatgar' },
  },
  lzd_lizardmen_heroes: {},

  nur_nurgle_lords: {
    str_valnir: { name: 'Valnir the Reaper' },
  },
  nur_nurgle_heroes: {
    pk_plague_epidemius: { name: 'Epidemius' },
  },

  ogr_ogre_kingdoms_lords: {},
  ogr_ogre_kingdoms_heroes: {
    str_braugh: { name: 'Braugh Slavelord' },
    str_brudd: { name: 'Brudd the Blackened' },
    str_kineater: { name: 'Drulg Kineater' },
    str_frostmaw: { name: 'Haurg Frostmaw', spellLore: SpellLores.ice },
    str_katerina: { name: 'Katerina de Hansebourg' },
  },

  skv_skaven_lords: {
    kd_kratch_doomclaw: { name: 'Kratch Doomclaw' },
    hcs_morskittar: { name: 'Lord Morskittar' },
  },
  skv_skaven_heroes: {
    hcm_hackflay: { name: 'Ikk Hackflay' },
    skv_ska_bloodtail: { name: 'Ska Bloodtail' },
    str_fylch: { name: 'Fylch Sharptail' },
  },

  sla_slaanesh_lords: {},
  sla_slaanesh_heroes: {
    str_masque: { name: 'The Masque' },
  },

  tmb_tomb_kings_lords: {},
  tmb_tomb_kings_heroes: {
    nyletoth: { name: 'Nyletoth the Charioteer' },
    str_serkhet: { name: 'Serkhet' },
  },

  tze_tzeentch_lords: {
    str_amon: { name: "Amon 'Chakai", spellLore: SpellLores.mixed },
  },
  tze_tzeentch_heroes: {
    str_changeling: { name: 'Changeling', spellLore: SpellLores.tzeentch },
    str_scribes: { name: 'Blue Scribes', spellLore: SpellLores.mixed },
    str_xuqls: { name: "Xuq'ls" },
  },

  vmp_vampire_counts_lords: {},
  vmp_vampire_counts_heroes: {
    str_ulrika: { name: 'Ulrika Magdova Straghov' },
  },

  wef_wood_elves_lords: {
    queen_marrisith: { name: 'Queen Marrisith' },
    oreon_ll: { name: 'Oreon' },
  },
  wef_wood_elves_heroes: {},
};

export default lege3Characters;
