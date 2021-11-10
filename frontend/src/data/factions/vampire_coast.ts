import factionFlags from '../../assets/img/flags/factionFlags';
import { FactionNames } from '../../types/enums/FactionEnums';
import { FactionInterface } from '../../types/interfaces/FactionInterface';

const vampire_coast: FactionInterface = {
  name: FactionNames.vampire_coast,
  icon: factionFlags.vampire_coast,
  lords: {},
  heroes: {},
};

export default vampire_coast;
