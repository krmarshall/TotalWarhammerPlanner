import { factions2, factions3, factions3Mixu } from '../data/factionData';
import radious2CharacterImgs from '../imgs/characters/radious2/radious2CharacterImgs';
import radious3CharacterImgs from '../imgs/characters/radious3/radious3CharacterImgs';
import sfo2CharacterImgs from '../imgs/characters/sfo2/sfo2CharacterImgs';
import vanilla2CharacterImgs from '../imgs/characters/vanilla2/vanilla2CharacterImgs';
import vanilla3CharacterImgs from '../imgs/characters/vanilla3/vanilla3CharacterImgs';
import gameImages from '../imgs/games/gameImages';
import GameInterface from '../types/interfaces/GameInterface';
import radious2Characters from './radious2Characters';
import radious3Characters from './radious3Characters';
import sfo2Characters from './sfo2Characters';
import vanilla2Characters from './vanilla2Characters';
import vanilla3Characters from './vanilla3Characters';
import mixu3Characters from './mixu3Characters';
import mixu3CharacterImgs from '../imgs/characters/mixu3/mixu3CharacterImgs';

const gameData: GameInterface = {
  vanilla2: {
    text: 'Vanilla 2',
    image: gameImages['vanilla2'],
    factions: factions2,
    characters: vanilla2Characters,
    characterImages: vanilla2CharacterImgs,
    updated: '4 Aug 2022',
    category: 'Base',
  },
  sfo2: {
    text: 'SFO 2',
    image: gameImages['sfo2'],
    factions: factions2,
    characters: sfo2Characters,
    characterImages: sfo2CharacterImgs,
    updated: '31 Jul 2022',
    category: 'Overhaul',
  },
  radious2: {
    text: 'Radious 2',
    image: gameImages['radious2'],
    factions: factions2,
    characters: radious2Characters,
    characterImages: radious2CharacterImgs,
    updated: '6 Mar 2022',
    category: 'Overhaul',
  },
  vanilla3: {
    text: 'Vanilla 3',
    image: gameImages['vanilla3'],
    factions: factions3,
    characters: vanilla3Characters,
    characterImages: vanilla3CharacterImgs,
    updated: '6 Sep 2022',
    category: 'Base',
  },
  radious3: {
    text: 'Radious 3',
    image: gameImages['radious3'],
    factions: factions3,
    characters: radious3Characters,
    characterImages: radious3CharacterImgs,
    updated: '29 Sep 2022',
    category: 'Overhaul',
  },
  mixu3: {
    text: 'Mixu 3',
    image: gameImages['mixu3'],
    factions: factions3Mixu,
    characters: mixu3Characters,
    characterImages: mixu3CharacterImgs,
    updated: '29 Sep 2022',
    category: 'Character Mod',
  },
};

export default gameData;
