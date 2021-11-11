import factionFlags from '../../assets/img/flags/factionFlags';
import spellLoreIcons from '../../assets/img/portraits/spell_lore_icons/spellLoreIcons';
import woodElvesPortraits from '../../assets/img/portraits/wood_elves/woodElvesPortraits';
import { FactionNames } from '../../types/enums/FactionEnums';
import { FactionInterface } from '../../types/interfaces/FactionInterface';

const wood_elves: FactionInterface = {
  name: FactionNames.wood_elves,
  icon: factionFlags.wood_elves,
  lords: {
    drycha: {
      implemented: false,
      name: 'Drycha',
      icon: woodElvesPortraits.drycha,
    },
    durthu: {
      implemented: false,
      name: 'Durthu',
      icon: woodElvesPortraits.durthu,
    },
    orion: {
      implemented: false,
      name: 'Orion',
      icon: woodElvesPortraits.orion,
    },
    sisters: {
      implemented: false,
      name: 'Sister of Twilight',
      icon: woodElvesPortraits.sisters,
    },
    gladeLord: {
      implemented: false,
      name: 'Glade Lord',
      icon: woodElvesPortraits.gladeLord,
    },
    ancientTreeman: {
      implemented: false,
      name: 'Ancient Treeman',
      icon: woodElvesPortraits.ancientTreeman,
    },
    ancientTreemanMalicious: {
      implemented: false,
      name: 'Ancient Treeman Maliciousy',
      icon: woodElvesPortraits.ancientTreemanMalicious,
    },
    spellweaverBeasts: {
      implemented: false,
      name: 'Spellweaver (Beasts)',
      icon: woodElvesPortraits.spellweaver,
      spellLoreIcon: spellLoreIcons.beasts,
    },
    spellweaverDark: {
      implemented: false,
      name: 'Spellweaver (Dark)',
      icon: woodElvesPortraits.spellweaver,
      spellLoreIcon: spellLoreIcons.dark,
    },
    spellweaverHigh: {
      implemented: false,
      name: 'Spellweaver (High)',
      icon: woodElvesPortraits.spellweaver,
      spellLoreIcon: spellLoreIcons.highMagicWElf,
    },
    spellweaverLife: {
      implemented: false,
      name: 'Spellweaver (Life)',
      icon: woodElvesPortraits.spellweaver,
      spellLoreIcon: spellLoreIcons.life,
    },
    spellweaverShadows: {
      implemented: false,
      name: 'Spellweaver (Shadows)',
      icon: woodElvesPortraits.spellweaver,
      spellLoreIcon: spellLoreIcons.shadows,
    },
  },
  heroes: {
    ariel: {
      implemented: false,
      name: 'Ariel',
      icon: woodElvesPortraits.ariel,
    },
    coeddil: {
      implemented: false,
      name: 'Coeddil',
      icon: woodElvesPortraits.coeddil,
    },
    branchwraith: {
      implemented: false,
      name: 'Branchwraith',
      icon: woodElvesPortraits.branchwraith,
    },
    branchwraithMalicious: {
      implemented: false,
      name: 'Branchwraith Malicious',
      icon: woodElvesPortraits.branchwraithMalicious,
    },
    gladeCaptain: {
      implemented: false,
      name: 'Glade Captain',
      icon: woodElvesPortraits.gladeCaptain,
    },
    waystalker: {
      implemented: false,
      name: 'Waystalker',
      icon: woodElvesPortraits.waystalker,
    },
    spellsingerBeasts: {
      implemented: false,
      name: 'Spellsinger (Beasts)',
      icon: woodElvesPortraits.spellsinger,
      spellLoreIcon: spellLoreIcons.beasts,
    },
    spellsingerLife: {
      implemented: false,
      name: 'Spellsinger (Life)',
      icon: woodElvesPortraits.spellsinger,
      spellLoreIcon: spellLoreIcons.life,
    },
    spellsingerShadows: {
      implemented: false,
      name: 'Spellsinger (Shadows)',
      icon: woodElvesPortraits.spellsinger,
      spellLoreIcon: spellLoreIcons.shadows,
    },
  },
};

export default wood_elves;
