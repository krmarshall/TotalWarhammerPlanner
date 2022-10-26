import { SpellLores } from '../types/interfaces/GameInterface';

const lege3Characters = {
  dae_daemons_lords: {
    str_nastasya: { name: 'Nastasya Roskolnikov', spellLore: SpellLores.mixed },
    str_slavin: { name: 'Slavin Kurnz' },
  },
  dae_daemons_heroes: {
    str_masque: { name: 'The Masque' },
  },

  chs_chaos_lords: {
    str_nastasya: { name: 'Nastasya Roskolnikov', spellLore: SpellLores.mixed },
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

  def_dark_elves_lords: {},
  def_dark_elves_heroes: {
    str_shadowblade: { name: 'Shadowblade' },
  },

  emp_empire_lords: {
    dead_kes: { name: 'Stefan von Kessel' },
    str_thyrus: { name: 'Thyrus Gorman', spellLore: SpellLores.fire },
  },
  emp_empire_heroes: {
    bassiano_dutra: { name: 'Bassiano Dutra', spellLore: SpellLores.death },
  },

  kho_khorne_lords: {
    str_abrax: { name: 'Abrax the Bloody' },
  },
  kho_khorne_heroes: {
    str_scyla: { name: 'Scyla Anfingrimm' },
    str_skulltaker: { name: 'Skulltaker' },
  },

  ksl_kislev_lords: {},
  ksl_kislev_heroes: {
    dead_grigori: { name: 'Grigori Medvezhiy' },
    dead_ice_mage: { name: 'Vladimir Stormbringer', spellLore: SpellLores.tempest },
    str_ilja: { name: 'Ilja of Murova' },
    str_naryaska: { name: 'Naryaska Leysa, the Golden Knight' },
  },

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
    str_frostmaw: { name: 'Haurg Frostmaw', spellLore: SpellLores.ice },
    str_katerina: { name: 'Katerina de Hansebourg' },
    str_kineater: { name: 'Drulg Kineater' },
  },

  skv_skaven_lords: {
    kd_kratch_doomclaw: { name: 'Kratch Doomclaw' },
  },
  skv_skaven_heroes: {
    hcm_hackflay: { name: 'Ikk Hackflay' },
    skv_ska_bloodtail: { name: 'Ska Bloodtail' },
    str_fylch: { name: 'Fylch Sharptail' },
  },

  sla_slaanesh_lords: {
    str_nastasya: { name: 'Nastasya Roskolnikov', spellLore: SpellLores.mixed },
  },
  sla_slaanesh_heroes: {
    str_masque: { name: 'The Masque' },
  },

  tze_tzeentch_lords: {},
  tze_tzeentch_heroes: {
    str_changeling: { name: 'Changeling', spellLore: SpellLores.tzeentch },
    str_scribes: { name: 'Blue Scribes', spellLore: SpellLores.mixed },
  },

  vmp_vampire_counts_lords: {},
  vmp_vampire_counts_heroes: {
    str_ulrika: { name: 'Ulrika Magdova Straghov' },
  },
};

export default lege3Characters;
