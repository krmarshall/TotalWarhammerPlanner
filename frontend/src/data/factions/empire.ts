import factionFlags from '../../assets/img/flags/factionFlags';
import empirePortraits from '../../assets/img/portraits/empire/empirePortraits';
import spellLoreIcons from '../../assets/img/portraits/spell_lore_icons/spellLoreIcons';
import { FactionNames } from '../../types/enums/FactionEnums';
import { FactionInterface } from '../../types/interfaces/FactionInterface';

const empire: FactionInterface = {
  name: FactionNames.empire,
  icon: factionFlags.empire,
  lords: {
    karl: {
      name: 'Karl Franz - Prince AND Emperor',
      icon: empirePortraits.karl,
    },
    gelt: {
      name: 'Balthasar Gelt',
      icon: empirePortraits.gelt,
    },
    volkmar: {
      name: 'Volkmar the Grim',
      icon: empirePortraits.volkmar,
    },
    todbringer: {
      name: 'Boris Bodbringer',
      icon: empirePortraits.todbringer,
    },
    markus: {
      name: 'Markus Wulfhart',
      icon: empirePortraits.markus,
    },
    general: {
      name: 'General of the Empire',
      icon: empirePortraits.general,
    },
    archLector: {
      name: 'Arch Lector',
      icon: empirePortraits.archLector,
    },
    hunstman: {
      name: 'Hunstman General',
      icon: empirePortraits.hunstman,
    },
  },
  heroes: {
    captain: {
      name: 'Empire Captain',
      icon: empirePortraits.captain,
    },
    witchHunter: {
      name: 'Witch Hunter',
      icon: empirePortraits.witchHunter,
    },
    warriorPriest: {
      name: 'Warrior Priest',
      icon: empirePortraits.priest,
    },
    amberWizard: {
      name: 'Amber Wizard',
      icon: empirePortraits.amberWizard,
      spellLoreIcon: spellLoreIcons.beasts,
    },
    amethystWizard: {
      name: 'Amethyst Wizard',
      icon: empirePortraits.amethystWizard,
      spellLoreIcon: spellLoreIcons.death,
    },
    brightWizard: {
      name: 'Bright Wizard',
      icon: empirePortraits.brightWizard,
      spellLoreIcon: spellLoreIcons.fire,
    },
    celestialWizard: {
      name: 'Celestial Wizard',
      icon: empirePortraits.celestialWizard,
      spellLoreIcon: spellLoreIcons.heavens,
    },
    jadeWizard: {
      name: 'Jade Wizard',
      icon: empirePortraits.jadeWizard,
      spellLoreIcon: spellLoreIcons.life,
    },
    lightWizard: {
      name: 'Light Wizard',
      icon: empirePortraits.lightWizard,
      spellLoreIcon: spellLoreIcons.light,
    },
    greyWizard: {
      name: 'Grey Wizard',
      icon: empirePortraits.greyWizard,
      spellLoreIcon: spellLoreIcons.shadows,
    },
  },
};

export default empire;
