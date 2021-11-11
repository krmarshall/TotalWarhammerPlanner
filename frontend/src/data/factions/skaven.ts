import factionFlags from '../../assets/img/flags/factionFlags';
import skavenPortraits from '../../assets/img/portraits/skaven/skavenPortraits';
import spellLoreIcons from '../../assets/img/portraits/spell_lore_icons/spellLoreIcons';
import { FactionNames } from '../../types/enums/FactionEnums';
import { FactionInterface } from '../../types/interfaces/FactionInterface';

const skaven: FactionInterface = {
  implemented: false,
  name: FactionNames.skaven,
  icon: factionFlags.skaven,
  lords: {
    queek: {
      implemented: false,
      name: 'Queek Headtaker',
      icon: skavenPortraits.queek,
    },
    skrolk: {
      implemented: false,
      name: 'Lord Skrolk',
      icon: skavenPortraits.skrolk,
    },
    tretch: {
      implemented: false,
      name: 'Tretch Craventail',
      icon: skavenPortraits.tretch,
    },
    ikit: {
      implemented: false,
      name: 'Ikit Claw',
      icon: skavenPortraits.ikit,
    },
    snikch: {
      implemented: false,
      name: 'Deathmaster Snikch',
      icon: skavenPortraits.snikch,
    },
    throt: {
      implemented: false,
      name: 'Throt the Unclean',
      icon: skavenPortraits.throt,
    },
    warlockMaster: {
      implemented: false,
      name: 'Warlock Master',
      icon: skavenPortraits.warlockMaster,
    },
    warlord: {
      implemented: false,
      name: 'Warlord',
      icon: skavenPortraits.warlord,
    },
    greySeerPlague: {
      implemented: false,
      name: 'Grey Seer (Plague)',
      icon: skavenPortraits.greySeer,
      spellLoreIcon: spellLoreIcons.plague,
    },
    greySeerRuin: {
      implemented: false,
      name: 'Grey Seer (Ruin)',
      icon: skavenPortraits.greySeer,
      spellLoreIcon: spellLoreIcons.ruin,
    },
  },
  heroes: {
    ghoritch: {
      implemented: false,
      name: 'Ghoritch',
      icon: skavenPortraits.ghoritch,
    },
    assassin: {
      implemented: false,
      name: 'Assassin',
      icon: skavenPortraits.assassin,
    },
    chieftain: {
      implemented: false,
      name: 'Chieftain',
      icon: skavenPortraits.chieftain,
    },
    packmaster: {
      implemented: false,
      name: 'Packmaster',
      icon: skavenPortraits.packmaster,
    },
    plaguePriest: {
      implemented: false,
      name: 'Plague Priest',
      icon: skavenPortraits.plaguePriest,
    },
    warlockEngineer: {
      implemented: false,
      name: 'Warlock Engineer',
      icon: skavenPortraits.warlockEngineer,
    },
  },
};

export default skaven;
