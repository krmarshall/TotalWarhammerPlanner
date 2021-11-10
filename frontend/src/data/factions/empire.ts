import factionFlags from '../../assets/img/flags/factionFlags';
import { FactionNames } from '../../types/enums/FactionEnums';
import { FactionInterface } from '../../types/interfaces/FactionInterface';

const empire: FactionInterface = {
  name: FactionNames.empire,
  icon: factionFlags.empire,
  lords: {},
  heroes: {},
};

export default empire;
