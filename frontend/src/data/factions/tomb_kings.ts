import factionFlags from '../../assets/img/flags/factionFlags';
import { FactionNames } from '../../types/enums/FactionEnums';
import { FactionInterface } from '../../types/interfaces/FactionInterface';

const tomb_kings: FactionInterface = {
  name: FactionNames.tomb_kings,
  icon: factionFlags.tomb_kings,
  lords: {},
  heroes: {},
};

export default tomb_kings;
