import factionFlags from '../../assets/img/flags/factionFlags';
import { FactionNames } from '../../types/enums/FactionEnums';
import { FactionInterface } from '../../types/interfaces/FactionInterface';

const bretonnia: FactionInterface = {
  name: FactionNames.bretonnia,
  icon: factionFlags.bretonnia,
  lords: {},
  heroes: {},
};

export default bretonnia;
