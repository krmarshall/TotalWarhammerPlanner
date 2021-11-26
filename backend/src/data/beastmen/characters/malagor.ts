import CharacterInterface from '../../../types/interfaces/CharacterInterface';
import iconsOfVilification from '../items/iconsOfVilification';
import beastmenSharedBattle from '../skillLines/battle/shared';
import beastmenSharedCampaign from '../skillLines/campaign/shared';
import malagorCharacter1 from '../skillLines/character/malagor1';
import malagorCharacter2 from '../skillLines/character/malagor2';
import malagorCharacter3 from '../skillLines/character/malagor3';
import malagorMount from '../skillLines/mount/malagor';

const malagor: CharacterInterface = {
  name: 'Malagor the Dark Omen',
  skillTree: [
    malagorMount,
    malagorCharacter1,
    malagorCharacter2,
    malagorCharacter3,
    beastmenSharedBattle,
    {},
    beastmenSharedCampaign,
  ],
  items: [iconsOfVilification],
};

export default malagor;
