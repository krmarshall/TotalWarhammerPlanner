import beastmen from './factions/beastmen';
import bretonnia from './factions/bretonnia';
import chaos from './factions/chaos';
import dark_elves from './factions/dark_elves';
import dwarfs from './factions/dwarfs';
import empire from './factions/empire';
import greenskins from './factions/greenskins';
import high_elves from './factions/high_elves';
import lizardmen from './factions/lizardmen';
import norsca from './factions/norsca';
import skaven from './factions/skaven';
import tomb_kings from './factions/tomb_kings';
import vampire_coast from './factions/vampire_coast';
import vampire_counts from './factions/vampire_counts';
import wood_elves from './factions/wood_elves';

/* Within each faction the order of lords should be:
  Legendary Lords in order of appearance from character select
  Any other unique lords alphabetically
  Standard lords in alphabetical order EXCEPT below
  Casters with multiple possible schools in alphabetical order
*/

/* Within each faction the order of heroes should be:
  Unique heroes alphabetically
  Standard heroes in alphabetical order EXCEPT below
  Casters with multiple possible schools in alphabetical order
*/
const factions = {
  beastmen,
  bretonnia,
  dark_elves,
  dwarfs,
  empire,
  greenskins,
  high_elves,
  lizardmen,
  norsca,
  skaven,
  tomb_kings,
  vampire_coast,
  vampire_counts,
  chaos,
  wood_elves,
};

export default factions;
