import factionFlags from '../../assets/img/flags/factionFlags';
import spellLoreIcons from '../../assets/img/portraits/spell_lore_icons/spellLoreIcons';
import vampireCoastPortraits from '../../assets/img/portraits/vampire_coast/vampireCoastPortraits';
import { FactionNames } from '../../types/enums/FactionEnums';
import { FactionInterface } from '../../types/interfaces/FactionInterface';

const vampire_coast: FactionInterface = {
  name: FactionNames.vampire_coast,
  icon: factionFlags.vampire_coast,
  lords: {
    luthor: {
      implemented: false,
      name: 'Luthor Harkon',
      icon: vampireCoastPortraits.luthor,
    },
    noctilus: {
      implemented: false,
      name: 'Count Noctilus',
      icon: vampireCoastPortraits.noctilus,
    },
    aranessa: {
      implemented: false,
      name: 'Aranessa Saltspite',
      icon: vampireCoastPortraits.aranessa,
    },
    cylostra: {
      implemented: false,
      name: 'Cylostra Direfin',
      icon: vampireCoastPortraits.cylostra,
    },
    vampireFleetAdmiralFemDeath: {
      implemented: false,
      name: 'Vampire Fleet Admiral (Pistol-Death)',
      icon: vampireCoastPortraits.vampireFleetAdmiralFem,
      spellLoreIcon: spellLoreIcons.death,
    },
    vampireFleetAdmiralFemDeep: {
      implemented: false,
      name: 'Vampire Fleet Admiral (Pistol-Deep)',
      icon: vampireCoastPortraits.vampireFleetAdmiralFem,
      spellLoreIcon: spellLoreIcons.deep,
    },
    vampireFleetAdmiralFemVampires: {
      implemented: false,
      name: 'Vampire Fleet Admiral (Pistol-Vampires)',
      icon: vampireCoastPortraits.vampireFleetAdmiralFem,
      spellLoreIcon: spellLoreIcons.vampires,
    },
    vampireFleetAdmiralMaleDeath: {
      implemented: false,
      name: 'Vampire Fleet Admiral (Polearm-Death)',
      icon: vampireCoastPortraits.vampireFleetAdmiralMale,
      spellLoreIcon: spellLoreIcons.death,
    },
    vampireFleetAdmiralMaleDeep: {
      implemented: false,
      name: 'Vampire Fleet Admiral (Polearm-Deep)',
      icon: vampireCoastPortraits.vampireFleetAdmiralMale,
      spellLoreIcon: spellLoreIcons.deep,
    },
    vampireFleetAdmiralMaleVampires: {
      implemented: false,
      name: 'Vampire Fleet Admiral (Polearm-Vampires)',
      icon: vampireCoastPortraits.vampireFleetAdmiralMale,
      spellLoreIcon: spellLoreIcons.vampires,
    },
  },
  heroes: {
    gunneryWight: {
      implemented: false,
      name: 'Gunnery Wight',
      icon: vampireCoastPortraits.gunneryWight,
    },
    mourngulHaunter: {
      implemented: false,
      name: 'Mourngul Haunter',
      icon: vampireCoastPortraits.mourngulHaunter,
    },
    vampireFleetCaptainDeath: {
      implemented: false,
      name: 'Vampire Fleet Captain (Death)',
      icon: vampireCoastPortraits.vampireFleetCaptain,
      spellLoreIcon: spellLoreIcons.death,
    },
    vampireFleetCaptainDeep: {
      implemented: false,
      name: 'Vampire Fleet Captain (Deep)',
      icon: vampireCoastPortraits.vampireFleetCaptain,
      spellLoreIcon: spellLoreIcons.deep,
    },
    vampireFleetCaptainVampires: {
      implemented: false,
      name: 'Vampire Fleet Captain (Vampires)',
      icon: vampireCoastPortraits.vampireFleetCaptain,
      spellLoreIcon: spellLoreIcons.vampires,
    },
  },
};

export default vampire_coast;
