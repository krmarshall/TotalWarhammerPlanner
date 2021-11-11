import factionFlags from '../../assets/img/flags/factionFlags';
import dwarfPortraits from '../../assets/img/portraits/dwarfs/dwarfPortraits';
import { FactionNames } from '../../types/enums/FactionEnums';
import { FactionInterface } from '../../types/interfaces/FactionInterface';

const dwarfs: FactionInterface = {
  name: FactionNames.dwarfs,
  icon: factionFlags.dwarfs,
  lords: {
    thorgrim: {
      name: 'Thorgrim Grudgebearer',
      icon: dwarfPortraits.thorgrim,
    },
    ungrim: {
      name: 'Ungrim Ironfist',
      icon: dwarfPortraits.ungrim,
    },
    belegar: {
      name: 'Belegar Ironhammer',
      icon: dwarfPortraits.belegar,
    },
    grombrindal: {
      name: 'Grombrindal - The White Dwarf',
      icon: dwarfPortraits.grombrindal,
    },
    thorek: {
      name: 'Thorek Ironbrow',
      icon: dwarfPortraits.thorek,
    },
    lord: {
      name: 'Lord',
      icon: dwarfPortraits.lord,
    },
    runelord: {
      name: 'Runelord',
      icon: dwarfPortraits.runelord,
    },
  },
  heroes: {
    dramar: {
      name: 'Dramar Hammerfist',
      icon: dwarfPortraits.dramar,
    },
    throni: {
      name: 'Throni Ironbrow',
      icon: dwarfPortraits.throni,
    },
    lunn: {
      name: 'King Lunn Ironhammer',
      icon: dwarfPortraits.lunn,
    },
    halkenhaf: {
      name: 'Halkenhaf Stonebeard',
      icon: dwarfPortraits.halkenhaf,
    },
    masterEngineer: {
      name: 'Master Engineer',
      icon: dwarfPortraits.masterEngineer,
    },
    runesmith: {
      name: 'Runesmith',
      icon: dwarfPortraits.runesmith,
    },
    thane: {
      name: 'Thane',
      icon: dwarfPortraits.thane,
    },
  },
};

export default dwarfs;
