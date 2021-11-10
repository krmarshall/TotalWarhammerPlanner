import factionFlags from '../../assets/img/flags/factionFlags';
import { FactionNames } from '../../types/enums/FactionEnums';
import { FactionInterface } from '../../types/interfaces/FactionInterface';

const chaos: FactionInterface = {
  name: FactionNames.chaos,
  icon: factionFlags.chaos,
  lords: {},
  heroes: {},
};

export default chaos;
