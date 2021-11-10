import factionFlags from '../../assets/img/flags/factionFlags';
import { FactionNames } from '../../types/enums/FactionEnums';
import { FactionInterface } from '../../types/interfaces/FactionInterface';

const dark_elves: FactionInterface = {
  name: FactionNames.dark_elves,
  icon: factionFlags.dark_elves,
  lords: {},
  heroes: {},
};

export default dark_elves;
