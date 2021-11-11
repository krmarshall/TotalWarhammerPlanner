import factionFlags from '../../assets/img/flags/factionFlags';
import bretonniaPortraits from '../../assets/img/portraits/bretonnia/bretonniaPortraits';
import spellLoreIcons from '../../assets/img/portraits/spell_lore_icons/spellLoreIcons';
import { FactionNames } from '../../types/enums/FactionEnums';
import { FactionInterface } from '../../types/interfaces/FactionInterface';

const bretonnia: FactionInterface = {
  name: FactionNames.bretonnia,
  icon: factionFlags.bretonnia,
  lords: {
    alberic: {
      name: 'Alberic de Bordeleaux',
      icon: bretonniaPortraits.alberic,
    },
    fayEnchantress: {
      name: 'Fay Enchantress',
      icon: bretonniaPortraits.fayEnchantress,
    },
    louen: {
      name: 'King Louen Leoncoeur',
      icon: bretonniaPortraits.louen,
    },
    repanse: {
      name: 'Repanse de Lyonesse',
      icon: bretonniaPortraits.repanse,
    },
    lord: {
      name: 'Lord',
      icon: bretonniaPortraits.lord,
    },
    prophetessBeasts: {
      name: 'Prophetess (Beasts)',
      icon: bretonniaPortraits.prophetess,
      spellLoreIcon: spellLoreIcons.beasts,
    },
    prophetessHeavens: {
      name: 'Prophetess (Heavens)',
      icon: bretonniaPortraits.prophetess,
      spellLoreIcon: spellLoreIcons.heavens,
    },
    prophetessLife: {
      name: 'Prophetess (Life)',
      icon: bretonniaPortraits.prophetess,
      spellLoreIcon: spellLoreIcons.life,
    },
  },
  heroes: {
    greenKnight: {
      name: 'The Green Knight',
      icon: bretonniaPortraits.greenKnight,
    },
    damselBeasts: {
      name: 'Damsel (Beasts)',
      icon: bretonniaPortraits.damsel,
      spellLoreIcon: spellLoreIcons.beasts,
    },
    damselHeavens: {
      name: 'Damsel (Heavens)',
      icon: bretonniaPortraits.damsel,
      spellLoreIcon: spellLoreIcons.heavens,
    },
    damselLife: {
      name: 'Damsel (Life)',
      icon: bretonniaPortraits.damsel,
      spellLoreIcon: spellLoreIcons.life,
    },
    paladin: {
      name: 'Paladin',
      icon: bretonniaPortraits.paladin,
    },
  },
};

export default bretonnia;
