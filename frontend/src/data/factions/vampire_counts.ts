import factionFlags from '../../assets/img/flags/factionFlags';
import spellLoreIcons from '../../assets/img/portraits/spell_lore_icons/spellLoreIcons';
import vampireCountsPortraits from '../../assets/img/portraits/vampire_counts/vampireCountsPortraits';
import { FactionNames } from '../../types/enums/FactionEnums';
import { FactionInterface } from '../../types/interfaces/FactionInterface';

const vampire_counts: FactionInterface = {
  implemented: false,
  name: FactionNames.vampire_counts,
  icon: factionFlags.vampire_counts,
  lords: {
    mannfred: {
      implemented: false,
      name: 'Mannlet von Carstein',
      icon: vampireCountsPortraits.mannfred,
    },
    helman: {
      implemented: false,
      name: 'Helman Ghorst',
      icon: vampireCountsPortraits.helman,
    },
    vlad: {
      implemented: false,
      name: 'Vlad von Carstein',
      icon: vampireCountsPortraits.vlad,
    },
    isabella: {
      implemented: false,
      name: 'Isabella von Carstein',
      icon: vampireCountsPortraits.isabella,
    },
    heinrich: {
      implemented: false,
      name: 'Heinrich Kemmler',
      icon: vampireCountsPortraits.heinrich,
    },
    redDuke: {
      implemented: false,
      name: 'The Red Duke',
      icon: vampireCountsPortraits.redDuke,
    },
    bloodlineBloodDragon: {
      implemented: false,
      name: 'Blood Dragon Vampire Lord',
      icon: vampireCountsPortraits.bloodlineBloodDragon,
    },
    bloodlineLahmian: {
      implemented: false,
      name: 'Lahmian Vampire Lord',
      icon: vampireCountsPortraits.bloodlineLahmian,
    },
    bloodlineNecrarch: {
      implemented: false,
      name: 'Necrarch Vampire Lord',
      icon: vampireCountsPortraits.bloodlineNecrarch,
    },
    bloodlineStrigoi: {
      implemented: false,
      name: 'Strigoi Vampire Lord',
      icon: vampireCountsPortraits.bloodlineStrigoi,
    },
    bloodlineVonCarsteinLord: {
      implemented: false,
      name: 'Von Carstein Vampire Lord',
      icon: vampireCountsPortraits.bloodlineVonCarsteinLord,
    },
    vampireLord: {
      implemented: false,
      name: 'Vampire Lord',
      icon: vampireCountsPortraits.vampireLord,
    },
    masterNecromancer: {
      implemented: false,
      name: 'Master Necromancer',
      icon: vampireCountsPortraits.masterNecromancer,
    },
    strigoi: {
      implemented: false,
      name: 'Strigoi Ghoul King',
      icon: vampireCountsPortraits.strigoi,
    },
  },
  heroes: {
    necromancer: {
      implemented: false,
      name: 'Necromancer',
      icon: vampireCountsPortraits.necromancer,
    },
    banshee: {
      implemented: false,
      name: 'Banshee',
      icon: vampireCountsPortraits.banshee,
    },
    wightKing: {
      implemented: false,
      name: 'Wight King',
      icon: vampireCountsPortraits.wightKing,
    },
    vampireDeath: {
      implemented: false,
      name: 'Vampire (Death)',
      icon: vampireCountsPortraits.vampire,
      spellLoreIcon: spellLoreIcons.vampires,
    },
    vampireShadows: {
      implemented: false,
      name: 'Vampire (Shadows)',
      icon: vampireCountsPortraits.vampire,
      spellLoreIcon: spellLoreIcons.shadows,
    },
  },
};

export default vampire_counts;
