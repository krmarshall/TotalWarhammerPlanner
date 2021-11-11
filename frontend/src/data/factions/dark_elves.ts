import factionFlags from '../../assets/img/flags/factionFlags';
import darkElvesPortraits from '../../assets/img/portraits/dark_elves/darkElvesPortraits';
import spellLoreIcons from '../../assets/img/portraits/spell_lore_icons/spellLoreIcons';
import { FactionNames } from '../../types/enums/FactionEnums';
import { FactionInterface } from '../../types/interfaces/FactionInterface';

const dark_elves: FactionInterface = {
  name: FactionNames.dark_elves,
  icon: factionFlags.dark_elves,
  lords: {
    malekith: {
      name: 'Malekith',
      icon: darkElvesPortraits.malekith,
    },
    morathi: {
      name: 'Morathi',
      icon: darkElvesPortraits.morathi,
    },
    crone: {
      name: 'Crone Hellebron',
      icon: darkElvesPortraits.crone,
    },
    lokhir: {
      name: 'Lokhir Fellheart',
      icon: darkElvesPortraits.lokhir,
    },
    malus: {
      name: 'Malus Darkblade',
      icon: darkElvesPortraits.malus,
    },
    rakarth: {
      name: 'Rakarth',
      icon: darkElvesPortraits.rakarth,
    },
    dreadlordXbow: {
      name: 'Dreadlord (Sword & Crossbow)',
      icon: darkElvesPortraits.dreadlordXbow,
    },
    dreadlordShield: {
      name: 'Dreadlord (Sword & Shield)',
      icon: darkElvesPortraits.dreadlordShield,
    },
    beastmaster: {
      name: 'High Beastmaster',
      icon: darkElvesPortraits.beastmaster,
    },
    supremeSorceressBeasts: {
      name: 'Supreme Sorceress (Beasts)',
      icon: darkElvesPortraits.supremeSorceress,
      spellLoreIcon: spellLoreIcons.beasts,
    },
    supremeSorceressDark: {
      name: 'Supreme Sorceress (Dark)',
      icon: darkElvesPortraits.supremeSorceress,
      spellLoreIcon: spellLoreIcons.dark,
    },
    supremeSorceressDeath: {
      name: 'Supreme Sorceress (Death)',
      icon: darkElvesPortraits.supremeSorceress,
      spellLoreIcon: spellLoreIcons.death,
    },
    supremeSorceressFire: {
      name: 'Supreme Sorceress (Fire)',
      icon: darkElvesPortraits.supremeSorceress,
      spellLoreIcon: spellLoreIcons.fire,
    },
    supremeSorceressShadow: {
      name: 'Supreme Sorceress (Shadow)',
      icon: darkElvesPortraits.supremeSorceress,
      spellLoreIcon: spellLoreIcons.shadows,
    },
  },
  heroes: {
    deathHag: {
      name: 'Death Hag',
      icon: darkElvesPortraits.deathHag,
    },
    assassin: {
      name: 'Khainite Assassin',
      icon: darkElvesPortraits.assassin,
    },
    master: {
      name: 'Master',
      icon: darkElvesPortraits.master,
    },
    sorceressBeasts: {
      name: 'Sorceress (Beasts)',
      icon: darkElvesPortraits.sorceress,
      spellLoreIcon: spellLoreIcons.beasts,
    },
    sorceressDark: {
      name: 'Sorceress (Dark)',
      icon: darkElvesPortraits.sorceress,
      spellLoreIcon: spellLoreIcons.dark,
    },
    sorceressDeath: {
      name: 'Sorceress (Death)',
      icon: darkElvesPortraits.sorceress,
      spellLoreIcon: spellLoreIcons.death,
    },
    sorceressFire: {
      name: 'Sorceress (Fire)',
      icon: darkElvesPortraits.sorceress,
      spellLoreIcon: spellLoreIcons.fire,
    },
    sorceressShadow: {
      name: 'Sorceress (Shadow)',
      icon: darkElvesPortraits.sorceress,
      spellLoreIcon: spellLoreIcons.shadows,
    },
  },
};

export default dark_elves;
