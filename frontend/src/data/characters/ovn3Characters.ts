import { SpellLores } from '../../types/interfaces/GameInterface';

const ovn3Characters = {
  emp_empire: {
    lords: {
      morgan_bernhardt: { name: 'Commander Bernhardt' },
    },
    heroes: {
      hef_ceridan: { name: 'Ceridan the Lone Ranger' },
      dwf_envoy: { name: 'Engrol Goldtongue' },
      ovn_ludwig_uberdorf: { name: 'Ludwig von Uberdorf' },
      luther_flamenstrike: { name: 'Luther Flamestrike', spellLore: SpellLores.fire },
      matthias: { name: 'Matthias' },
      ksl_ice_mage_ice: { name: 'Vladimir Stormbringer', spellLore: SpellLores.mixed },
    },
  },

  hef_high_elves: {
    lords: {
      emp_stormrider: { name: 'Althran Stormrider', spellLore: SpellLores.mixed },
    },
    heroes: {},
  },

  tmb_tomb_kings: {
    lords: {
      tmb_Dread_King: { name: 'Dread King', spellLore: SpellLores.vampires },
      elo_hand_of_nagash: { name: 'Hand of Nagash', spellLore: SpellLores.vampires },
      elo_liche_general_death: { name: 'Liche Strategos (Death)', spellLore: SpellLores.death },
      elo_liche_general_vampires: { name: 'Liche Strategos (Vampires)', spellLore: SpellLores.vampires },
      dread_possessed_hero_01: { name: 'Persemius', spellLore: SpellLores.shadows },
      dread_possessed_hero_02: { name: 'Thesops', spellLore: SpellLores.beasts },
      dread_traitor_tomb_king_nebwaneph: { name: 'Traitor King Nebwaneph' },
      dread_traitor_tomb_king_omanhan_iii: { name: 'Traitor King Omanhan III' },
      dread_traitor_tomb_king_haptmose: { name: 'Hierophant Haptmose', spellLore: SpellLores.nehekhara },
    },
    heroes: {
      elo_dread_larenscheld: { name: 'Gunther Larenscheld', spellLore: SpellLores.vampires },
      dread_corrupted_priest_death: { name: 'Corrupted Priest (Death)', spellLore: SpellLores.death },
      dread_corrupted_priest_shadow: { name: 'Corrupted Priest (Shadows)', spellLore: SpellLores.shadows },
      dread_corrupted_priest_vampires: { name: 'Corrupted Priest (Vampires)', spellLore: SpellLores.vampires },
      dread_hellwraith: { name: 'Hellwraith' },
      dread_centurion: { name: 'Hetairoi' },
    },
  },

  alb_albion: {
    lords: {
      dural_durak: { name: 'Dural Durak', spellLore: SpellLores.mixed },
      morrigan: { name: 'Mhorriníon the Murder-Queen', spellLore: SpellLores.mixed },
      warleader: { name: 'Overking' },
      truth_beasts: { name: 'Truthsayer (Beasts)', spellLore: SpellLores.beasts },
      truth_life: { name: 'Truthsayer (Life)', spellLore: SpellLores.life },
      truth_light: { name: 'Truthsayer (Light)', spellLore: SpellLores.light },
      truth_truth: { name: 'Truthsayer (Truthsayers)', spellLore: SpellLores.mixed },
    },
    heroes: {
      albion_wizard: { name: 'Druidic Priestess', spellLore: SpellLores.mixed },
      albion_chief: { name: 'Petty Chieftain' },
    },
  },

  fim_fimir: {
    lords: {
      fimir_daemon_octopus_kroll: { name: 'Kroll', spellLore: SpellLores.mixed },
      fim_meargh_skattach: { name: 'Meargh Skattach', spellLore: SpellLores.mixed },
      fimir_dirach_beasts: { name: 'Dirach Elder (Beasts)', spellLore: SpellLores.beasts },
      fimir_dirach_death: { name: 'Dirach Elder (Death)', spellLore: SpellLores.death },
      fimir_dirach_fire: { name: 'Dirach Elder (Fire)', spellLore: SpellLores.fire },
      fimir_dirach_shadows: { name: 'Dirach Elder (Shadows)', spellLore: SpellLores.shadows },
      fimir_lord: { name: 'Fimirach Noble' },
    },
    heroes: {
      elo_boglar_shaman: { name: 'Boglar Shaman', spellLore: SpellLores.mixed },
      nor_cha_fimir_balefiend_beast: { name: 'Fimir Balefiend (Beasts)', spellLore: SpellLores.beasts },
      nor_cha_fimir_balefiend_death: { name: 'Fimir Balefiend (Death)', spellLore: SpellLores.death },
      fimir_finmor: { name: 'Fimm Finmor' },
    },
  },
};

export default ovn3Characters;
