import factionFlags from '../../assets/img/flags/factionFlags';
import dwarfPortraits from '../../assets/img/portraits/dwarfs/dwarfPortraits';
import { FactionNames } from '../../types/enums/FactionEnums';
import { FactionInterface } from '../../types/interfaces/FactionInterface';

const dwarfs: FactionInterface = {
  name: FactionNames.dwarfs,
  icon: factionFlags.dwarfs,
  lords: {
    thorgrim: {
      implemented: false,
      name: 'Thorgrim Grudgebearer',
      icon: dwarfPortraits.thorgrim,
    },
    ungrim: {
      implemented: false,
      name: 'Ungrim Ironfist',
      icon: dwarfPortraits.ungrim,
    },
    belegar: {
      implemented: false,
      name: 'Belegar Ironhammer',
      icon: dwarfPortraits.belegar,
    },
    grombrindal: {
      implemented: false,
      name: 'Grombrindal - The White Dwarf',
      icon: dwarfPortraits.grombrindal,
    },
    thorek: {
      implemented: false,
      name: 'Thorek Ironbrow',
      icon: dwarfPortraits.thorek,
    },
    lord: {
      implemented: false,
      name: 'Lord',
      icon: dwarfPortraits.lord,
    },
    runelord: {
      implemented: false,
      name: 'Runelord',
      icon: dwarfPortraits.runelord,
    },
  },
  heroes: {
    dramar: {
      implemented: false,
      name: 'Dramar Hammerfist',
      icon: dwarfPortraits.dramar,
    },
    throni: {
      implemented: false,
      name: 'Throni Ironbrow',
      icon: dwarfPortraits.throni,
    },
    lunn: {
      implemented: false,
      name: 'King Lunn Ironhammer',
      icon: dwarfPortraits.lunn,
    },
    halkenhaf: {
      implemented: false,
      name: 'Halkenhaf Stonebeard',
      icon: dwarfPortraits.halkenhaf,
    },
    masterEngineer: {
      implemented: false,
      name: 'Master Engineer',
      icon: dwarfPortraits.masterEngineer,
    },
    runesmith: {
      implemented: false,
      name: 'Runesmith',
      icon: dwarfPortraits.runesmith,
    },
    thane: {
      implemented: false,
      name: 'Thane',
      icon: dwarfPortraits.thane,
    },
  },
};

export default dwarfs;
