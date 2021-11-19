import CharacterInterface from '@projectInterfaces/CharacterInterface';
import scourge from '../items/scourge';
import theDarkMail from '../items/theDarkMail';
import beastmenSharedBattle from '../skillLines/battle/shared';
import beastmenSharedCampaign from '../skillLines/campaign/shared';
import khazrakCharacter from '../skillLines/character/khazrak';
import beastmenSharedCharacter from '../skillLines/character/shared';
import khazrakMount from '../skillLines/mount/khazrak';

const khazrak: CharacterInterface = {
  skillTree: [
    khazrakMount,
    khazrakCharacter,
    beastmenSharedCharacter,
    null,
    beastmenSharedBattle,
    null,
    beastmenSharedCampaign,
  ],
  items: [scourge, theDarkMail],
};

export default khazrak;
