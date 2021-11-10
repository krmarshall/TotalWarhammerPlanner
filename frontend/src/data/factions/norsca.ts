import factionFlags from '../../assets/img/flags/factionFlags';
import { FactionNames } from '../../types/enums/FactionEnums';
import { FactionInterface } from '../../types/interfaces/FactionInterface';

const norsca: FactionInterface = {
  name: FactionNames.norsca,
  icon: factionFlags.norsca,
  lords: {},
  heroes: {},
};

export default norsca;
