import factionFlags from '../../assets/img/flags/factionFlags';
import norscaPortraits from '../../assets/img/portraits/norsca/norscaPortraits';
import spellLoreIcons from '../../assets/img/portraits/spell_lore_icons/spellLoreIcons';
import { FactionNames } from '../../types/enums/FactionEnums';
import { FactionInterface } from '../../types/interfaces/FactionInterface';

const norsca: FactionInterface = {
  name: FactionNames.norsca,
  icon: factionFlags.norsca,
  lords: {
    wulfrik: {
      implemented: false,
      name: 'Wulfrik the Wanderer',
      icon: norscaPortraits.wulfrik,
    },
    throgg: {
      implemented: false,
      name: 'Throgg',
      icon: norscaPortraits.throgg,
    },
    azrik: {
      implemented: false,
      name: 'Azrik the Maze Keeper',
      icon: norscaPortraits.azrik,
    },
    marauderChieftain: {
      implemented: false,
      name: 'Marauder Chieftain',
      icon: norscaPortraits.marauderChieftain,
    },
  },
  heroes: {
    kihar: {
      implemented: false,
      name: 'Kihar the Tormentor',
      icon: norscaPortraits.kihar,
    },
    skinWolf: {
      implemented: false,
      name: 'Skin Wolf Werekin',
      icon: norscaPortraits.skinWolf,
    },
    fimirFire: {
      implemented: false,
      name: 'Fimir Balefiend (Fire)',
      icon: norscaPortraits.fimir,
      spellLoreIcon: spellLoreIcons.fire,
    },
    fimirShadows: {
      implemented: false,
      name: 'Fimir Balefiend (Shadows)',
      icon: norscaPortraits.fimir,
      spellLoreIcon: spellLoreIcons.shadows,
    },
    shamanSorcererDeath: {
      implemented: false,
      name: 'Shaman Sorcerer (Death)',
      icon: norscaPortraits.shamanSorcerer,
      spellLoreIcon: spellLoreIcons.death,
    },
    shamanSorcererFire: {
      implemented: false,
      name: 'Shaman Sorcerer (Fire)',
      icon: norscaPortraits.shamanSorcerer,
      spellLoreIcon: spellLoreIcons.fire,
    },
    shamanSorcererMetal: {
      implemented: false,
      name: 'Shaman Sorcerer (Metal)',
      icon: norscaPortraits.shamanSorcerer,
      spellLoreIcon: spellLoreIcons.metal,
    },
  },
};

export default norsca;
