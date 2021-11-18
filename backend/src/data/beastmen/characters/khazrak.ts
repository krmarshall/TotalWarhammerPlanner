import scourge from '../items/scourge';
import theDarkMail from '../items/theDarkMail';
import khazrakCharacter from '../skillLines/character/khazrak';
import beastmenSharedCharacter from '../skillLines/character/shared';
import khazrakMount from '../skillLines/mount/khazrak';

const khazrak = {
  skillTree: [
    khazrakMount,
    khazrakCharacter,
    beastmenSharedCharacter,
    null,
    // khazrakBattle,
    null,
    // khazrakCampaign,
  ],
  items: [scourge, theDarkMail],
};

export default khazrak;
