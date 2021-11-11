import factionFlags from '../../assets/img/flags/factionFlags';
import chaosPortraits from '../../assets/img/portraits/chaos/chaosPortraits';
import spellLoreIcons from '../../assets/img/portraits/spell_lore_icons/spellLoreIcons';
import { FactionNames } from '../../types/enums/FactionEnums';
import { FactionInterface } from '../../types/interfaces/FactionInterface';

const chaos: FactionInterface = {
  implemented: false,
  name: FactionNames.chaos,
  icon: factionFlags.chaos,
  lords: {
    archaon: {
      implemented: false,
      name: 'Archaon the Everchosen',
      icon: chaosPortraits.archaon,
    },
    kholek: {
      implemented: false,
      name: 'Kholek Suneater',
      icon: chaosPortraits.kholek,
    },
    sigvald: {
      implemented: false,
      name: 'Prince Sigvald the Magnificent',
      icon: chaosPortraits.sigvald,
    },
    sarthorael: {
      implemented: false,
      name: 'Sarthorael the Everwatcher',
      icon: chaosPortraits.sarthorael,
    },
    chaosLord: {
      implemented: false,
      name: 'Chaos Lord',
      icon: chaosPortraits.chaosLord,
    },
    chaosSorcererLordDeath: {
      implemented: false,
      name: 'Chaos Sorcerer Lord (Death)',
      icon: chaosPortraits.chaosSorcererLord,
      spellLoreIcon: spellLoreIcons.death,
    },
    chaosSorcererLordFire: {
      implemented: false,
      name: 'Chaos Sorcerer Lord (Fire)',
      icon: chaosPortraits.chaosSorcererLord,
      spellLoreIcon: spellLoreIcons.fire,
    },
    chaosSorcererLordMetal: {
      implemented: false,
      name: 'Chaos Sorcerer Lord (Metal)',
      icon: chaosPortraits.chaosSorcererLord,
      spellLoreIcon: spellLoreIcons.metal,
    },
    chaosSorcererLordShadows: {
      implemented: false,
      name: 'Chaos Sorcerer Lord (Shadows)',
      icon: chaosPortraits.chaosSorcererLord,
      spellLoreIcon: spellLoreIcons.shadows,
    },
  },
  heroes: {
    exaltedHero: {
      implemented: false,
      name: 'Exalted Hero',
      icon: chaosPortraits.exaltedHero,
    },
    chaosSorcererDeath: {
      implemented: false,
      name: 'Chaos Sorcerer Lord (Death)',
      icon: chaosPortraits.chaosSorcerer,
      spellLoreIcon: spellLoreIcons.death,
    },
    chaosSorcererFire: {
      implemented: false,
      name: 'Chaos Sorcerer Lord (Fire)',
      icon: chaosPortraits.chaosSorcerer,
      spellLoreIcon: spellLoreIcons.fire,
    },
    chaosSorcererMetal: {
      implemented: false,
      name: 'Chaos Sorcerer Lord (Metal)',
      icon: chaosPortraits.chaosSorcerer,
      spellLoreIcon: spellLoreIcons.metal,
    },
    chaosSorcererShadows: {
      implemented: false,
      name: 'Chaos Sorcerer Lord (Shadows)',
      icon: chaosPortraits.chaosSorcerer,
      spellLoreIcon: spellLoreIcons.shadows,
    },
  },
};

export default chaos;
