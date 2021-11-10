import factionFlags from '../../assets/img/flags/factionFlags';
import { FactionNames } from '../../types/enums/FactionEnums';
import { FactionInterface } from '../../types/interfaces/FactionInterface';

const lizardmen: FactionInterface = {
  name: FactionNames.lizardmen,
  icon: factionFlags.lizardmen,
  lords: {},
  heroes: {},
};

export default lizardmen;
