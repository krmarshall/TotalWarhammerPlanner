import factionFlags from '../../assets/img/flags/factionFlags';
import darkElvesPortraits from '../../assets/img/portraits/dark_elves/darkElvesPortraits';
import spellLoreIcons from '../../assets/img/portraits/spell_lore_icons/spellLoreIcons';
import { FactionNames } from '../../types/enums/FactionEnums';
import { FactionInterface } from '../../types/interfaces/FactionInterface';

const dark_elves: FactionInterface = {
  implemented: false,
  name: FactionNames.dark_elves,
  icon: factionFlags.dark_elves,
  lords: {
    malekith: {
      implemented: false,
      name: 'Malekith',
      icon: darkElvesPortraits.malekith,
    },
    morathi: {
      implemented: false,
      name: 'Morathi',
      icon: darkElvesPortraits.morathi,
    },
    crone: {
      implemented: false,
      name: 'Crone Hellebron',
      icon: darkElvesPortraits.crone,
    },
    lokhir: {
      implemented: false,
      name: 'Lokhir Fellheart',
      icon: darkElvesPortraits.lokhir,
    },
    malus: {
      implemented: false,
      name: 'Malus Darkblade',
      icon: darkElvesPortraits.malus,
    },
    rakarth: {
      implemented: false,
      name: 'Rakarth',
      icon: darkElvesPortraits.rakarth,
    },
    dreadlordXbow: {
      implemented: false,
      name: 'Dreadlord (Sword & Crossbow)',
      icon: darkElvesPortraits.dreadlordXbow,
    },
    dreadlordShield: {
      implemented: false,
      name: 'Dreadlord (Sword & Shield)',
      icon: darkElvesPortraits.dreadlordShield,
    },
    beastmaster: {
      implemented: false,
      name: 'High Beastmaster',
      icon: darkElvesPortraits.beastmaster,
    },
    supremeSorceressBeasts: {
      implemented: false,
      name: 'Supreme Sorceress (Beasts)',
      icon: darkElvesPortraits.supremeSorceress,
      spellLoreIcon: spellLoreIcons.beasts,
    },
    supremeSorceressDark: {
      implemented: false,
      name: 'Supreme Sorceress (Dark)',
      icon: darkElvesPortraits.supremeSorceress,
      spellLoreIcon: spellLoreIcons.dark,
    },
    supremeSorceressDeath: {
      implemented: false,
      name: 'Supreme Sorceress (Death)',
      icon: darkElvesPortraits.supremeSorceress,
      spellLoreIcon: spellLoreIcons.death,
    },
    supremeSorceressFire: {
      implemented: false,
      name: 'Supreme Sorceress (Fire)',
      icon: darkElvesPortraits.supremeSorceress,
      spellLoreIcon: spellLoreIcons.fire,
    },
    supremeSorceressShadow: {
      implemented: false,
      name: 'Supreme Sorceress (Shadow)',
      icon: darkElvesPortraits.supremeSorceress,
      spellLoreIcon: spellLoreIcons.shadows,
    },
  },
  heroes: {
    deathHag: {
      implemented: false,
      name: 'Death Hag',
      icon: darkElvesPortraits.deathHag,
    },
    assassin: {
      implemented: false,
      name: 'Khainite Assassin',
      icon: darkElvesPortraits.assassin,
    },
    master: {
      implemented: false,
      name: 'Master',
      icon: darkElvesPortraits.master,
    },
    sorceressBeasts: {
      implemented: false,
      name: 'Sorceress (Beasts)',
      icon: darkElvesPortraits.sorceress,
      spellLoreIcon: spellLoreIcons.beasts,
    },
    sorceressDark: {
      implemented: false,
      name: 'Sorceress (Dark)',
      icon: darkElvesPortraits.sorceress,
      spellLoreIcon: spellLoreIcons.dark,
    },
    sorceressDeath: {
      implemented: false,
      name: 'Sorceress (Death)',
      icon: darkElvesPortraits.sorceress,
      spellLoreIcon: spellLoreIcons.death,
    },
    sorceressFire: {
      implemented: false,
      name: 'Sorceress (Fire)',
      icon: darkElvesPortraits.sorceress,
      spellLoreIcon: spellLoreIcons.fire,
    },
    sorceressShadow: {
      implemented: false,
      name: 'Sorceress (Shadow)',
      icon: darkElvesPortraits.sorceress,
      spellLoreIcon: spellLoreIcons.shadows,
    },
  },
};

export default dark_elves;
