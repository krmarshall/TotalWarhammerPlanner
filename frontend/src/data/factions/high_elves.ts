import factionFlags from '../../assets/img/flags/factionFlags';
import highElvesPortraits from '../../assets/img/portraits/high_elves/highElvesPortraits';
import spellLoreIcons from '../../assets/img/portraits/spell_lore_icons/spellLoreIcons';
import { FactionNames } from '../../types/enums/FactionEnums';
import { FactionInterface } from '../../types/interfaces/FactionInterface';

const high_elves: FactionInterface = {
  implemented: false,
  name: FactionNames.high_elves,
  icon: factionFlags.high_elves,
  lords: {
    tyrion: {
      implemented: false,
      name: 'Tyrion',
      icon: highElvesPortraits.tyrion,
    },
    teclis: {
      implemented: false,
      name: 'Teclis',
      icon: highElvesPortraits.teclis,
    },
    alarielle: {
      implemented: false,
      name: 'Alarielle the Radiant',
      icon: highElvesPortraits.alarielle,
    },
    alithAnar: {
      implemented: false,
      name: 'Alith Anar',
      icon: highElvesPortraits.alithAnar,
    },
    eltharion: {
      implemented: false,
      name: 'Eltharion',
      icon: highElvesPortraits.eltharion,
    },
    imrik: {
      implemented: false,
      name: 'Imrik',
      icon: highElvesPortraits.imrik,
    },
    prince: {
      implemented: false,
      name: 'Prince',
      icon: highElvesPortraits.prince,
    },
    princess: {
      implemented: false,
      name: 'Princess',
      icon: highElvesPortraits.princess,
    },
    archmageBeasts: {
      implemented: false,
      name: 'Archmage (Beasts)',
      icon: highElvesPortraits.archmage,
      spellLoreIcon: spellLoreIcons.beasts,
    },
    archmageDeath: {
      implemented: false,
      name: 'Archmage (Death)',
      icon: highElvesPortraits.archmage,
      spellLoreIcon: spellLoreIcons.death,
    },
    archmageFire: {
      implemented: false,
      name: 'Archmage (Fire)',
      icon: highElvesPortraits.archmage,
      spellLoreIcon: spellLoreIcons.fire,
    },
    archmageHeavens: {
      implemented: false,
      name: 'Archmage (Heavens)',
      icon: highElvesPortraits.archmage,
      spellLoreIcon: spellLoreIcons.heavens,
    },
    archmageHigh: {
      implemented: false,
      name: 'Archmage (High)',
      icon: highElvesPortraits.archmage,
      spellLoreIcon: spellLoreIcons.highMagic,
    },
    archmageLife: {
      implemented: false,
      name: 'Archmage (Life)',
      icon: highElvesPortraits.archmage,
      spellLoreIcon: spellLoreIcons.life,
    },
    archmageLight: {
      implemented: false,
      name: 'Archmage (Light)',
      icon: highElvesPortraits.archmage,
      spellLoreIcon: spellLoreIcons.light,
    },
    archmageMetal: {
      implemented: false,
      name: 'Archmage (Metal)',
      icon: highElvesPortraits.archmage,
      spellLoreIcon: spellLoreIcons.metal,
    },
    archmageShadows: {
      implemented: false,
      name: 'Archmage (Shadows)',
      icon: highElvesPortraits.archmage,
      spellLoreIcon: spellLoreIcons.shadows,
    },
  },
  heroes: {
    noble: {
      implemented: false,
      name: 'Noble',
      icon: highElvesPortraits.noble,
    },
    handmaiden: {
      implemented: false,
      name: 'Handmaiden of the Everqueen',
      icon: highElvesPortraits.handmaiden,
    },
    loremaster: {
      implemented: false,
      name: 'Loremaster of Hoeth',
      icon: highElvesPortraits.loremaster,
    },
    mageBeasts: {
      implemented: false,
      name: 'Mage (Beasts)',
      icon: highElvesPortraits.mage,
      spellLoreIcon: spellLoreIcons.beasts,
    },
    mageDeath: {
      implemented: false,
      name: 'Mage (Death)',
      icon: highElvesPortraits.mage,
      spellLoreIcon: spellLoreIcons.death,
    },
    mageFire: {
      implemented: false,
      name: 'Mage (Fire)',
      icon: highElvesPortraits.mage,
      spellLoreIcon: spellLoreIcons.fire,
    },
    mageHeavens: {
      implemented: false,
      name: 'Mage (Heavens)',
      icon: highElvesPortraits.mage,
      spellLoreIcon: spellLoreIcons.heavens,
    },
    mageHigh: {
      implemented: false,
      name: 'Mage (High)',
      icon: highElvesPortraits.mage,
      spellLoreIcon: spellLoreIcons.highMagic,
    },
    mageLife: {
      implemented: false,
      name: 'Mage (Life)',
      icon: highElvesPortraits.mage,
      spellLoreIcon: spellLoreIcons.life,
    },
    mageLight: {
      implemented: false,
      name: 'Mage (Light)',
      icon: highElvesPortraits.mage,
      spellLoreIcon: spellLoreIcons.light,
    },
    mageMetal: {
      implemented: false,
      name: 'Mage (Metal)',
      icon: highElvesPortraits.mage,
      spellLoreIcon: spellLoreIcons.metal,
    },
    mageShadows: {
      implemented: false,
      name: 'Mage (Shadows)',
      icon: highElvesPortraits.mage,
      spellLoreIcon: spellLoreIcons.shadows,
    },
  },
};

export default high_elves;
