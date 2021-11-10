import factionFlags from '../../assets/img/flags/factionFlags';
import { FactionNames } from '../../types/enums/FactionEnums';
import { FactionInterface } from '../../types/interfaces/FactionInterface';

const wood_elves: FactionInterface = {
  name: FactionNames.wood_elves,
  icon: factionFlags.wood_elves,
  lords: {},
  heroes: {},
};

export default wood_elves;
