import factionFlags from '../../assets/img/flags/factionFlags';
import chaosPortraits from '../../assets/img/portraits/chaos/chaosPortraits';
import spellLoreIcons from '../../assets/img/portraits/spell_lore_icons/spellLoreIcons';
import { FactionNames } from '../../types/enums/FactionEnums';
import { FactionInterface } from '../../types/interfaces/FactionInterface';

const chaos: FactionInterface = {
  name: FactionNames.chaos,
  icon: factionFlags.chaos,
  lords: {
    archaon: {
      name: 'Archaon the Everchosen',
      icon: chaosPortraits.archaon,
    },
    kholek: {
      name: 'Kholek Suneater',
      icon: chaosPortraits.kholek,
    },
    sigvald: {
      name: 'Prince Sigvald the Magnificent',
      icon: chaosPortraits.sigvald,
    },
    sarthorael: {
      name: 'Sarthorael the Everwatcher',
      icon: chaosPortraits.sarthorael,
    },
    chaosLord: {
      name: 'Chaos Lord',
      icon: chaosPortraits.chaosLord,
    },
    chaosSorcererLordDeath: {
      name: 'Chaos Sorcerer Lord (Death)',
      icon: chaosPortraits.chaosSorcererLord,
      spellLoreIcon: spellLoreIcons.death,
    },
    chaosSorcererLordFire: {
      name: 'Chaos Sorcerer Lord (Fire)',
      icon: chaosPortraits.chaosSorcererLord,
      spellLoreIcon: spellLoreIcons.fire,
    },
    chaosSorcererLordMetal: {
      name: 'Chaos Sorcerer Lord (Metal)',
      icon: chaosPortraits.chaosSorcererLord,
      spellLoreIcon: spellLoreIcons.metal,
    },
    chaosSorcererLordShadows: {
      name: 'Chaos Sorcerer Lord (Shadows)',
      icon: chaosPortraits.chaosSorcererLord,
      spellLoreIcon: spellLoreIcons.shadows,
    },
  },
  heroes: {
    exaltedHero: {
      name: 'Exalted Hero',
      icon: chaosPortraits.exaltedHero,
    },
    chaosSorcererDeath: {
      name: 'Chaos Sorcerer Lord (Death)',
      icon: chaosPortraits.chaosSorcerer,
      spellLoreIcon: spellLoreIcons.death,
    },
    chaosSorcererFire: {
      name: 'Chaos Sorcerer Lord (Fire)',
      icon: chaosPortraits.chaosSorcerer,
      spellLoreIcon: spellLoreIcons.fire,
    },
    chaosSorcererMetal: {
      name: 'Chaos Sorcerer Lord (Metal)',
      icon: chaosPortraits.chaosSorcerer,
      spellLoreIcon: spellLoreIcons.metal,
    },
    chaosSorcererShadows: {
      name: 'Chaos Sorcerer Lord (Shadows)',
      icon: chaosPortraits.chaosSorcerer,
      spellLoreIcon: spellLoreIcons.shadows,
    },
  },
};

export default chaos;
