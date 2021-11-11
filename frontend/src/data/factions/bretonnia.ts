import factionFlags from '../../assets/img/flags/factionFlags';
import bretonniaPortraits from '../../assets/img/portraits/bretonnia/bretonniaPortraits';
import spellLoreIcons from '../../assets/img/portraits/spell_lore_icons/spellLoreIcons';
import { FactionNames } from '../../types/enums/FactionEnums';
import { FactionInterface } from '../../types/interfaces/FactionInterface';

const bretonnia: FactionInterface = {
  implemented: false,
  name: FactionNames.bretonnia,
  icon: factionFlags.bretonnia,
  lords: {
    alberic: {
      implemented: false,
      name: 'Alberic de Bordeleaux',
      icon: bretonniaPortraits.alberic,
    },
    fayEnchantress: {
      implemented: false,
      name: 'Fay Enchantress',
      icon: bretonniaPortraits.fayEnchantress,
    },
    louen: {
      implemented: false,
      name: 'King Louen Leoncoeur',
      icon: bretonniaPortraits.louen,
    },
    repanse: {
      implemented: false,
      name: 'Repanse de Lyonesse',
      icon: bretonniaPortraits.repanse,
    },
    lord: {
      implemented: false,
      name: 'Lord',
      icon: bretonniaPortraits.lord,
    },
    prophetessBeasts: {
      implemented: false,
      name: 'Prophetess (Beasts)',
      icon: bretonniaPortraits.prophetess,
      spellLoreIcon: spellLoreIcons.beasts,
    },
    prophetessHeavens: {
      implemented: false,
      name: 'Prophetess (Heavens)',
      icon: bretonniaPortraits.prophetess,
      spellLoreIcon: spellLoreIcons.heavens,
    },
    prophetessLife: {
      implemented: false,
      name: 'Prophetess (Life)',
      icon: bretonniaPortraits.prophetess,
      spellLoreIcon: spellLoreIcons.life,
    },
  },
  heroes: {
    greenKnight: {
      implemented: false,
      name: 'The Green Knight',
      icon: bretonniaPortraits.greenKnight,
    },
    damselBeasts: {
      implemented: false,
      name: 'Damsel (Beasts)',
      icon: bretonniaPortraits.damsel,
      spellLoreIcon: spellLoreIcons.beasts,
    },
    damselHeavens: {
      implemented: false,
      name: 'Damsel (Heavens)',
      icon: bretonniaPortraits.damsel,
      spellLoreIcon: spellLoreIcons.heavens,
    },
    damselLife: {
      implemented: false,
      name: 'Damsel (Life)',
      icon: bretonniaPortraits.damsel,
      spellLoreIcon: spellLoreIcons.life,
    },
    paladin: {
      implemented: false,
      name: 'Paladin',
      icon: bretonniaPortraits.paladin,
    },
  },
};

export default bretonnia;
