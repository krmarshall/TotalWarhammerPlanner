import factionFlags from '../../assets/img/flags/factionFlags';
import greenskinsPortraits from '../../assets/img/portraits/greenskins/greenskinsPortraits';
import spellLoreIcons from '../../assets/img/portraits/spell_lore_icons/spellLoreIcons';
import { FactionNames } from '../../types/enums/FactionEnums';
import { FactionInterface } from '../../types/interfaces/FactionInterface';

const greenskins: FactionInterface = {
  implemented: false,
  name: FactionNames.greenskins,
  icon: factionFlags.greenskins,
  lords: {
    grimgor: {
      implemented: false,
      name: 'Grimgor Ironhide',
      icon: greenskinsPortraits.grimgor,
    },
    azhag: {
      implemented: false,
      name: 'Azhag the Slaughterer',
      icon: greenskinsPortraits.azhag,
    },
    wurrzag: {
      implemented: false,
      name: 'Wurrzag',
      icon: greenskinsPortraits.wurrzag,
    },
    skarsnik: {
      implemented: false,
      name: 'Skarsnik',
      icon: greenskinsPortraits.skarsnik,
    },
    grom: {
      implemented: false,
      name: 'Grom the Paunch',
      icon: greenskinsPortraits.grom,
    },
    orcWarboss: {
      implemented: false,
      name: 'Grom the Paunch',
      icon: greenskinsPortraits.orcWarboss,
    },
    nightGoblinWarboss: {
      implemented: false,
      name: 'Night Goblin Warboss',
      icon: greenskinsPortraits.nightGoblinWarboss,
    },
    goblinGreatShaman: {
      implemented: false,
      name: 'Goblin Great Shaman',
      icon: greenskinsPortraits.nightGoblinWarboss,
      spellLoreIcon: spellLoreIcons.lilWagh,
    },
  },
  heroes: {
    blackOrcBigBoss: {
      implemented: false,
      name: 'Black Orc Big Boss',
      icon: greenskinsPortraits.blackOrcBigBoss,
    },
    goblinBigBoss: {
      implemented: false,
      name: 'Goblin Big Boss',
      icon: greenskinsPortraits.goblinBigBoss,
    },
    nightGoblinShaman: {
      implemented: false,
      name: 'Night Goblin Shaman',
      icon: greenskinsPortraits.nightGoblinShaman,
      spellLoreIcon: spellLoreIcons.lilWagh,
    },
    orcShaman: {
      implemented: false,
      name: 'Orc Shaman',
      icon: greenskinsPortraits.orcShaman,
      spellLoreIcon: spellLoreIcons.bigWagh,
    },
    trollHag: {
      implemented: false,
      name: 'Great River Troll Hag',
      icon: greenskinsPortraits.trollHag,
      spellLoreIcon: spellLoreIcons.death,
    },
  },
};

export default greenskins;
