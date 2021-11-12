import factionFlags from '../../assets/img/flags/factionFlags';
import spellLoreIcons from '../../assets/img/portraits/spell_lore_icons/spellLoreIcons';
import tombKingPortraits from '../../assets/img/portraits/tomb_kings/tombKingsPortraits';
import { FactionNames } from '../../types/enums/FactionEnums';
import { FactionInterface } from '../../types/interfaces/FactionInterface';

const tomb_kings: FactionInterface = {
  implemented: false,
  name: FactionNames.tomb_kings,
  icon: factionFlags.tomb_kings,
  lords: {
    settra: {
      implemented: false,
      name: 'Settra the Imperishable',
      icon: tombKingPortraits.settra,
    },
    khatep: {
      implemented: false,
      name: 'Grand Hierophant Khatep',
      icon: tombKingPortraits.khatep,
    },
    khalida: {
      implemented: false,
      name: 'High Queen Khalida',
      icon: tombKingPortraits.khalida,
    },
    arkhan: {
      implemented: false,
      name: 'Arkhan the Black',
      icon: tombKingPortraits.arkhan,
    },
    tombKing: {
      implemented: false,
      name: 'Tomb King',
      icon: tombKingPortraits.tombKing,
    },
  },
  heroes: {
    necrotect: {
      implemented: false,
      name: 'Necrotect',
      icon: tombKingPortraits.necrotect,
    },
    tombPrince: {
      implemented: false,
      name: 'Tomb Prince',
      icon: tombKingPortraits.tombPrince,
    },
    lichePriestDeath: {
      implemented: false,
      name: 'Liche Priest (Death)',
      icon: tombKingPortraits.lichPriest,
      spellLoreIcon: spellLoreIcons.death,
    },
    lichePriestLight: {
      implemented: false,
      name: 'Liche Priest (Light)',
      icon: tombKingPortraits.lichPriest,
      spellLoreIcon: spellLoreIcons.light,
    },
    lichePriestNehekhara: {
      implemented: false,
      name: 'Liche Priest (Nehekhara)',
      icon: tombKingPortraits.lichPriest,
      spellLoreIcon: spellLoreIcons.nehekhara,
    },
    lichePriestShadows: {
      implemented: false,
      name: 'Liche Priest (Shadows)',
      icon: tombKingPortraits.lichPriest,
      spellLoreIcon: spellLoreIcons.shadows,
    },
  },
};

export default tomb_kings;
