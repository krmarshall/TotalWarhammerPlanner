import { factions2, factions3 } from '../data/factionData';
import sfo2CharacterImgs from '../imgs/characters/sfo2/sfo2CharacterImgs';
import vanilla2CharacterImgs from '../imgs/characters/vanilla2/vanilla2CharacterImgs';
import vanilla3CharacterImgs from '../imgs/characters/vanilla3/vanilla3CharacterImgs';
import gameImages from '../imgs/games/gameImages';
import sfo2Characters from './sfo2Characters';
import vanilla2Characters from './vanilla2Characters';
import vanilla3Characters from './vanilla3Characters';

const gameData = {
  vanilla2: {
    text: 'Vanilla 2',
    image: gameImages['vanilla2'],
    factions: factions2,
    characters: vanilla2Characters,
    characterImages: vanilla2CharacterImgs,
  },
  sfo2: {
    text: 'SFO 2',
    image: gameImages['sfo2'],
    factions: factions2,
    characters: sfo2Characters,
    characterImages: sfo2CharacterImgs,
  },
  vanilla3: {
    text: 'Vanilla 3',
    image: gameImages['vanilla3'],
    factions: factions3,
    characters: vanilla3Characters,
    characterImages: vanilla3CharacterImgs,
  },
};

export default gameData;
