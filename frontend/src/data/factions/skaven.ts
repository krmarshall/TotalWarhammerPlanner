import factionFlags from '../../assets/img/flags/factionFlags';
import { FactionNames } from '../../types/enums/FactionEnums';
import { FactionInterface } from '../../types/interfaces/FactionInterface';

const skaven: FactionInterface = {
  name: FactionNames.skaven,
  icon: factionFlags.skaven,
  lords: {},
  heroes: {},
};

export default skaven;
