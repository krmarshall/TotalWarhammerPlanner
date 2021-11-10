import factionFlags from '../../assets/img/flags/factionFlags';
import { FactionNames } from '../../types/enums/FactionEnums';
import { FactionInterface } from '../../types/interfaces/FactionInterface';

const vampire_counts: FactionInterface = {
  name: FactionNames.vampire_counts,
  icon: factionFlags.vampire_counts,
  lords: {},
  heroes: {},
};

export default vampire_counts;
