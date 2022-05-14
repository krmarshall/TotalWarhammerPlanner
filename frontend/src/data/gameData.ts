import { factions2, factions3 } from '../data/factionData';
import artefacts2CharacterImgs from '../imgs/characters/artefacts2/artefacts2CharacterImgs';
import artefacts3CharacterImgs from '../imgs/characters/artefacts3/artefacts3CharacterImgs';
import radious2CharacterImgs from '../imgs/characters/radious2/radious2CharacterImgs';
import sfo2CharacterImgs from '../imgs/characters/sfo2/sfo2CharacterImgs';
import vanilla2CharacterImgs from '../imgs/characters/vanilla2/vanilla2CharacterImgs';
import vanilla3CharacterImgs from '../imgs/characters/vanilla3/vanilla3CharacterImgs';
import gameImages from '../imgs/games/gameImages';
import GameInterface from '../types/interfaces/GameInterface';
import artefacts2Characters from './artefacts2Characters';
import artefacts3Characters from './artefacts3Characters';
import radious2Characters from './radious2Characters';
import sfo2Characters from './sfo2Characters';
import vanilla2Characters from './vanilla2Characters';
import vanilla3Characters from './vanilla3Characters';

const gameData: GameInterface = {
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
  radious2: {
    text: 'Radious 2',
    image: gameImages['radious2'],
    factions: factions2,
    characters: radious2Characters,
    characterImages: radious2CharacterImgs,
  },
  artefacts2: {
    text: 'Stompie5 Artefacts',
    image: gameImages['artefacts'],
    factions: factions2,
    characters: artefacts2Characters,
    characterImages: artefacts2CharacterImgs,
  },
  vanilla3: {
    text: 'Vanilla 3',
    image: gameImages['vanilla3'],
    factions: factions3,
    characters: vanilla3Characters,
    characterImages: vanilla3CharacterImgs,
  },
  artefacts3: {
    text: 'Stompie5 Artefacts',
    image: gameImages['artefacts'],
    factions: factions3,
    characters: artefacts3Characters,
    characterImages: artefacts3CharacterImgs,
  },
};

export default gameData;
