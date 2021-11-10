import factionFlags from '../../assets/img/flags/factionFlags';
import { FactionNames } from '../../types/enums/FactionEnums';
import { FactionInterface } from '../../types/interfaces/FactionInterface';

const high_elves: FactionInterface = {
  name: FactionNames.high_elves,
  icon: factionFlags.high_elves,
  lords: {},
  heroes: {},
};

export default high_elves;
