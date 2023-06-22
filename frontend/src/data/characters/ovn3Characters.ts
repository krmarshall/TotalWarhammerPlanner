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
