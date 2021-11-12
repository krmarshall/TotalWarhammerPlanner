import factionFlags from '../../assets/img/flags/factionFlags';
import lizardmenPortraits from '../../assets/img/portraits/lizardmen/lizardmenPortraits';
import spellLoreIcons from '../../assets/img/portraits/spell_lore_icons/spellLoreIcons';
import { FactionNames } from '../../types/enums/FactionEnums';
import { FactionInterface } from '../../types/interfaces/FactionInterface';

const lizardmen: FactionInterface = {
  implemented: false,
  name: FactionNames.lizardmen,
  icon: factionFlags.lizardmen,
  lords: {
    mazdamundi: {
      implemented: false,
      name: 'Lord Mazdamundi',
      icon: lizardmenPortraits.mazdamundi,
    },
    kroqGar: {
      implemented: false,
      name: 'Kroq-Gar',
      icon: lizardmenPortraits.kroqGar,
    },
    tehenhauin: {
      implemented: false,
      name: 'Tehenhauin',
      icon: lizardmenPortraits.tehenhauin,
    },
    tiktaqto: {
      implemented: false,
      name: "Tiktaq'to",
      icon: lizardmenPortraits.tiktaqto,
    },
    nakai: {
      implemented: false,
      name: 'Nakai the Wanderer',
      icon: lizardmenPortraits.nakai,
    },
    gorRok: {
      implemented: false,
      name: 'Gor-Rok',
      icon: lizardmenPortraits.gorRok,
    },
    oxyotl: {
      implemented: false,
      name: 'Oxyotl',
      icon: lizardmenPortraits.oxyotl,
    },
    saurusOldBlood: {
      implemented: false,
      name: 'Saurus Old Blood',
      icon: lizardmenPortraits.saurusOldBlood,
    },
    redCrestedSkink: {
      implemented: false,
      name: 'Red Crested Skink Chief',
      icon: lizardmenPortraits.redCrestedSkink,
    },
    kroxigorAncient: {
      implemented: false,
      name: 'Kroxigor Ancient',
      icon: lizardmenPortraits.kroxigorAncient,
    },
    slannMagePriestFire: {
      implemented: false,
      name: 'Slann Mage-Priest (Fire)',
      icon: lizardmenPortraits.slannMagePriest,
      spellLoreIcon: spellLoreIcons.fire,
    },
    slannMagePriestHigh: {
      implemented: false,
      name: 'Slann Mage-Priest (High)',
      icon: lizardmenPortraits.slannMagePriest,
      spellLoreIcon: spellLoreIcons.highMagic,
    },
    slannMagePriestLife: {
      implemented: false,
      name: 'Slann Mage-Priest (Life)',
      icon: lizardmenPortraits.slannMagePriest,
      spellLoreIcon: spellLoreIcons.life,
    },
    slannMagePriestLight: {
      implemented: false,
      name: 'Slann Mage-Priest (Light)',
      icon: lizardmenPortraits.slannMagePriest,
      spellLoreIcon: spellLoreIcons.light,
    },
  },
  heroes: {
    kroak: {
      implemented: false,
      name: 'Lord Kroak',
      icon: lizardmenPortraits.kroak,
    },
    saurusScarVeteran: {
      implemented: false,
      name: 'Saurus Scar Veteran',
      icon: lizardmenPortraits.saurusScarVeteran,
    },
    skinkChief: {
      implemented: false,
      name: 'Skink Chief',
      icon: lizardmenPortraits.skinkChief,
    },
    skinkOracle: {
      implemented: false,
      name: 'Skink Oracle',
      icon: lizardmenPortraits.skinkOracle,
    },
    skinkPriestBeasts: {
      implemented: false,
      name: 'Skink Priest (Beasts)',
      icon: lizardmenPortraits.skinkPriest,
      spellLoreIcon: spellLoreIcons.beasts,
    },
    skinkPriestHeavens: {
      implemented: false,
      name: 'Skink Priest (Heavens)',
      icon: lizardmenPortraits.skinkPriest,
      spellLoreIcon: spellLoreIcons.heavens,
    },
  },
};

export default lizardmen;
