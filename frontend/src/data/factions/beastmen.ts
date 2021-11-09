import factionFlags from '../../assets/img/flags/factionFlags';
import beastmenPortraits from '../../assets/img/portraits/beastmen/beastmenPortraits';
import spellLoreIcons from '../../assets/img/portraits/spell_lore_icons/spellLoreIcons';
import { FactionNames } from '../../types/enums/FactionEnums';

const beastmen = {
  name: FactionNames.beastmen,
  icon: factionFlags.beastmen,
  lords: {
    khazrak: {
      name: 'Khazrak the One-Eye',
      icon: beastmenPortraits.khazrak,
    },
    malagor: {
      name: 'Malagor the Dark Omen',
      icon: beastmenPortraits.malagor,
    },
    morhgur: {
      name: 'Morghur the Shadowgave',
      icon: beastmenPortraits.morghur,
    },
    taurox: {
      name: 'Taurox Wants Wheaties',
      icon: beastmenPortraits.taurox,
    },
    greatBrayShamanBeasts: {
      name: 'Great Bray Shaman (Beasts)',
      icon: beastmenPortraits.greatBrayShaman,
      spellLoreIcon: spellLoreIcons.beasts,
    },
    greatBrayShamanDeath: {
      name: 'Great Bray Shaman (Death)',
      icon: beastmenPortraits.greatBrayShaman,
      spellLoreIcon: spellLoreIcons.death,
    },
    greatBrayShamanShadows: {
      name: 'Great Bray Shaman (Shadows)',
      icon: beastmenPortraits.greatBrayShaman,
      spellLoreIcon: spellLoreIcons.shadows,
    },
    greatBrayShamanWild: {
      name: 'Great Bray Shaman (Wild)',
      icon: beastmenPortraits.greatBrayShaman,
      spellLoreIcon: spellLoreIcons.wild,
    },
    beastlord: {
      name: 'Beastlord',
      icon: beastmenPortraits.beastlord,
    },
  },
  heroes: {
    brayShamanBeasts: {
      name: 'Bray-Shaman (Beasts)',
      icon: beastmenPortraits.brayShaman,
      spellLoreIcon: spellLoreIcons.beasts,
    },
    brayShamanDeath: {
      name: 'Bray-Shaman (Death)',
      icon: beastmenPortraits.brayShaman,
      spellLoreIcon: spellLoreIcons.death,
    },
    brayShamanShadows: {
      name: 'Bray-Shaman (Shadows)',
      icon: beastmenPortraits.brayShaman,
      spellLoreIcon: spellLoreIcons.shadows,
    },
    brayShamanWild: {
      name: 'Bray-Shaman (Wild)',
      icon: beastmenPortraits.brayShaman,
      spellLoreIcon: spellLoreIcons.wild,
    },
    gorebull: {
      name: 'Gorebull',
      icon: beastmenPortraits.gorebull,
    },
    wargor: {
      name: 'Wargor',
      icon: beastmenPortraits.wargor,
    },
  },
};

export default beastmen;
