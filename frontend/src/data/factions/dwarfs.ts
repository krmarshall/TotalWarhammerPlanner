import factionFlags from '../../assets/img/flags/factionFlags';
import { FactionNames } from '../../types/enums/FactionEnums';
import { FactionInterface } from '../../types/interfaces/FactionInterface';

const dwarfs: FactionInterface = {
  name: FactionNames.dwarfs,
  icon: factionFlags.dwarfs,
  lords: {},
  heroes: {},
};

export default dwarfs;
