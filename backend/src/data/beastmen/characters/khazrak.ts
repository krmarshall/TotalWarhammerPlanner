import CharacterInterface from '../../../types/interfaces/CharacterInterface';
import scourge from '../items/scourge';
import theDarkMail from '../items/theDarkMail';
import beastmenSharedBattle from '../skillLines/battle/shared';
import beastmenSharedCampaign from '../skillLines/campaign/shared';
import khazrakCharacter from '../skillLines/character/khazrak';
import beastmenSharedCharacter from '../skillLines/character/shared';
import khazrakMount from '../skillLines/mount/khazrak';

const khazrak: CharacterInterface = {
  name: 'Khazrak the One-Eye',
  skillTree: [
    khazrakMount,
    khazrakCharacter,
    beastmenSharedCharacter,
    {},
    beastmenSharedBattle,
    {},
    beastmenSharedCampaign,
  ],
  items: [scourge, theDarkMail],
};

export default khazrak;
