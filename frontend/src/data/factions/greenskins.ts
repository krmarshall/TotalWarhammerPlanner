import factionFlags from '../../assets/img/flags/factionFlags';
import { FactionNames } from '../../types/enums/FactionEnums';
import { FactionInterface } from '../../types/interfaces/FactionInterface';

const greenskins: FactionInterface = {
  name: FactionNames.greenskins,
  icon: factionFlags.greenskins,
  lords: {},
  heroes: {},
};

export default greenskins;
