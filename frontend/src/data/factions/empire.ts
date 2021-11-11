import factionFlags from '../../assets/img/flags/factionFlags';
import empirePortraits from '../../assets/img/portraits/empire/empirePortraits';
import spellLoreIcons from '../../assets/img/portraits/spell_lore_icons/spellLoreIcons';
import { FactionNames } from '../../types/enums/FactionEnums';
import { FactionInterface } from '../../types/interfaces/FactionInterface';

const empire: FactionInterface = {
  implemented: false,
  name: FactionNames.empire,
  icon: factionFlags.empire,
  lords: {
    karl: {
      implemented: false,
      name: 'Karl Franz - Prince AND Emperor',
      icon: empirePortraits.karl,
    },
    gelt: {
      implemented: false,
      name: 'Balthasar Gelt',
      icon: empirePortraits.gelt,
    },
    volkmar: {
      implemented: false,
      name: 'Volkmar the Grim',
      icon: empirePortraits.volkmar,
    },
    todbringer: {
      implemented: false,
      name: 'Boris Bodbringer',
      icon: empirePortraits.todbringer,
    },
    markus: {
      implemented: false,
      name: 'Markus Wulfhart',
      icon: empirePortraits.markus,
    },
    general: {
      implemented: false,
      name: 'General of the Empire',
      icon: empirePortraits.general,
    },
    archLector: {
      implemented: false,
      name: 'Arch Lector',
      icon: empirePortraits.archLector,
    },
    hunstman: {
      implemented: false,
      name: 'Hunstman General',
      icon: empirePortraits.hunstman,
    },
  },
  heroes: {
    captain: {
      implemented: false,
      name: 'Empire Captain',
      icon: empirePortraits.captain,
    },
    witchHunter: {
      implemented: false,
      name: 'Witch Hunter',
      icon: empirePortraits.witchHunter,
    },
    warriorPriest: {
      implemented: false,
      name: 'Warrior Priest',
      icon: empirePortraits.priest,
    },
    amberWizard: {
      implemented: false,
      name: 'Amber Wizard',
      icon: empirePortraits.amberWizard,
      spellLoreIcon: spellLoreIcons.beasts,
    },
    amethystWizard: {
      implemented: false,
      name: 'Amethyst Wizard',
      icon: empirePortraits.amethystWizard,
      spellLoreIcon: spellLoreIcons.death,
    },
    brightWizard: {
      implemented: false,
      name: 'Bright Wizard',
      icon: empirePortraits.brightWizard,
      spellLoreIcon: spellLoreIcons.fire,
    },
    celestialWizard: {
      implemented: false,
      name: 'Celestial Wizard',
      icon: empirePortraits.celestialWizard,
      spellLoreIcon: spellLoreIcons.heavens,
    },
    jadeWizard: {
      implemented: false,
      name: 'Jade Wizard',
      icon: empirePortraits.jadeWizard,
      spellLoreIcon: spellLoreIcons.life,
    },
    lightWizard: {
      implemented: false,
      name: 'Light Wizard',
      icon: empirePortraits.lightWizard,
      spellLoreIcon: spellLoreIcons.light,
    },
    greyWizard: {
      implemented: false,
      name: 'Grey Wizard',
      icon: empirePortraits.greyWizard,
      spellLoreIcon: spellLoreIcons.shadows,
    },
  },
};

export default empire;
