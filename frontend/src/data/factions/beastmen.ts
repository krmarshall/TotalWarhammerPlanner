import factionFlags from '../../assets/img/flags/factionFlags';
import beastmenPortraits from '../../assets/img/portraits/beastmen/beastmenPortraits';
import spellLoreIcons from '../../assets/img/portraits/spell_lore_icons/spellLoreIcons';
import { FactionNames } from '../../types/enums/FactionEnums';
import { FactionInterface } from '../../types/interfaces/FactionInterface';

const beastmen: FactionInterface = {
  name: FactionNames.beastmen,
  icon: factionFlags.beastmen,
  lords: {
    khazrak: {
      implemented: false,
      name: 'Khazrak the One-Eye',
      icon: beastmenPortraits.khazrak,
    },
    malagor: {
      implemented: false,
      name: 'Malagor the Dark Omen',
      icon: beastmenPortraits.malagor,
    },
    morhgur: {
      implemented: false,
      name: 'Morghur the Shadowgave',
      icon: beastmenPortraits.morghur,
    },
    taurox: {
      implemented: false,
      name: 'Taurox Wants Wheaties',
      icon: beastmenPortraits.taurox,
    },
    beastlord: {
      implemented: false,
      name: 'Beastlord',
      icon: beastmenPortraits.beastlord,
    },
    greatBrayShamanBeasts: {
      implemented: false,
      name: 'Great Bray Shaman (Beasts)',
      icon: beastmenPortraits.greatBrayShaman,
      spellLoreIcon: spellLoreIcons.beasts,
    },
    greatBrayShamanDeath: {
      implemented: false,
      name: 'Great Bray Shaman (Death)',
      icon: beastmenPortraits.greatBrayShaman,
      spellLoreIcon: spellLoreIcons.death,
    },
    greatBrayShamanShadows: {
      implemented: false,
      name: 'Great Bray Shaman (Shadows)',
      icon: beastmenPortraits.greatBrayShaman,
      spellLoreIcon: spellLoreIcons.shadows,
    },
    greatBrayShamanWild: {
      implemented: false,
      name: 'Great Bray Shaman (Wild)',
      icon: beastmenPortraits.greatBrayShaman,
      spellLoreIcon: spellLoreIcons.wild,
    },
  },
  heroes: {
    brayShamanBeasts: {
      implemented: false,
      name: 'Bray-Shaman (Beasts)',
      icon: beastmenPortraits.brayShaman,
      spellLoreIcon: spellLoreIcons.beasts,
    },
    brayShamanDeath: {
      implemented: false,
      name: 'Bray-Shaman (Death)',
      icon: beastmenPortraits.brayShaman,
      spellLoreIcon: spellLoreIcons.death,
    },
    brayShamanShadows: {
      implemented: false,
      name: 'Bray-Shaman (Shadows)',
      icon: beastmenPortraits.brayShaman,
      spellLoreIcon: spellLoreIcons.shadows,
    },
    brayShamanWild: {
      implemented: false,
      name: 'Bray-Shaman (Wild)',
      icon: beastmenPortraits.brayShaman,
      spellLoreIcon: spellLoreIcons.wild,
    },
    gorebull: {
      implemented: false,
      name: 'Gorebull',
      icon: beastmenPortraits.gorebull,
    },
    wargor: {
      implemented: false,
      name: 'Wargor',
      icon: beastmenPortraits.wargor,
    },
  },
};

export default beastmen;
