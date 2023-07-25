import factions from '../data/factionData';
import { GameDataInterface } from '../types/interfaces/GameInterface';
import gameImages from '../imgs/games/gameImages';

import { vanilla2CharactersMemes } from './characters/vanilla2Characters';
import { vanilla3CharactersMemes } from './characters/vanilla3Characters';
import radious3Characters from './characters/radious3Characters';
import mixu3Characters from './characters/mixu3Characters';
import lege3Characters from './characters/lege3Characters';
import crys3Characters from './characters/crys3Characters';
import scm3Characters from './characters/scm3Characters';
import sfo3Characters from './characters/sfo3Characters';
import cat3Characters from './characters/cat3Characters';
import ovn3Characters from './characters/ovn3Characters';

import vanilla2CharacterImgs from '../imgs/characters/vanilla2/vanilla2CharacterImgs';
import vanilla3CharacterImgs from '../imgs/characters/vanilla3/vanilla3CharacterImgs';
import radious3CharacterImgs from '../imgs/characters/radious3/radious3CharacterImgs';
import mixu3CharacterImgs from '../imgs/characters/mixu3/mixu3CharacterImgs';
import lege3CharacterImgs from '../imgs/characters/lege3/lege3CharacterImgs';
import crys3CharacterImgs from '../imgs/characters/crys3/crys3CharacterImgs';
import scm3CharacterImgs from '../imgs/characters/scm3/scm3CharacterImgs';
import sfo3CharacterImgs from '../imgs/characters/sfo3/sfo3CharacterImgs';
import cat3CharacterImgs from '../imgs/characters/cat3/cat3CharacterImgs';
import ovn3CharacterImgs from '../imgs/characters/ovn3/ovn3CharacterImgs';

import mixu3CompGroups from '../../../TWPData/compGroups/mixu3.json';
import scm3CompGroups from '../../../TWPData/compGroups/scm3.json';
import cat3CompGroups from '../../../TWPData/compGroups/cat3.json';
import ovn3CompGroups from '../../../TWPData/compGroups/ovn3.json';

const gameData: { [key: string]: GameDataInterface } = {
  vanilla2: {
    text: 'Vanilla 2',
    image: gameImages['vanilla2'],
    factions: factions,
    characters: vanilla2CharactersMemes,
    characterImages: vanilla2CharacterImgs,
    updated: '4 Aug 2022 (1.12.1)',
    category: 'Base',
  },
  vanilla3: {
    text: 'Vanilla 3',
    image: gameImages['vanilla3'],
    factions: factions,
    characters: vanilla3CharactersMemes,
    characterImages: vanilla3CharacterImgs,
    updated: '25 May 2023 (3.1.0)',
    category: 'Base',
  },
  sfo3: {
    text: 'SFO 3',
    image: gameImages['sfo3'],
    factions: factions,
    characters: sfo3Characters,
    characterImages: sfo3CharacterImgs,
    updated: '19 Jun 2023',
    category: 'Overhaul',
    workshopLink: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2792731173',
  },
  radious3: {
    text: 'Radious 3',
    image: gameImages['radious3'],
    factions: factions,
    characters: radious3Characters,
    characterImages: radious3CharacterImgs,
    updated: '16 Jul 2023',
    category: 'Overhaul',
    workshopLink: 'https://steamcommunity.com/workshop/filedetails/?id=2791750313',
  },
  mixu3: {
    text: "Mixu's Compilation 3",
    image: gameImages['mixu3'],
    factions: factions,
    characters: mixu3Characters,
    characterImages: mixu3CharacterImgs,
    compilationGroups: mixu3CompGroups,
    updated: '22 Jul 2023',
    category: 'Character Mod Compilation',
    includes: [
      "Mixu's Legendary Lords (28 May 2023)",
      "Mixu's Mousillon (22 Jul 2023)",
      'Gnoblar Hordes - The Unwashed Masses (29 May 2023)',
      "Mixu's Slayer (13 Apr 2023)",
      "Mixu's Shadowdancer (13 Apr 2023)",
    ],
    workshopLink: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2920114265',
  },
  lege3: {
    text: 'Legendary Characters 3',
    image: gameImages['lege3'],
    factions: factions,
    characters: lege3Characters,
    characterImages: lege3CharacterImgs,
    updated: '22 Jul 2023',
    category: 'Character Mod',
    workshopLink: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2826930183',
  },
  cat3: {
    text: "Cataph's Compilation 3",
    image: gameImages['cat3'],
    factions: factions,
    characters: cat3Characters,
    characterImages: cat3CharacterImgs,
    compilationGroups: cat3CompGroups,
    updated: '4 Jul 2023',
    category: 'Character Mod Compilation',
    includes: [
      "Cataph's Southern Realms (TEB) (4 Jul 2023)",
      "Cataph's Kraka Drak: the Norse Dwarfs (13 Jun 2023)",
      "Cataph's High Elf Sea Patrol (4 Jul 2023)",
    ],
    workshopLink: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2984086934',
  },
  ovn3: {
    text: 'OvN Lost Factions 3',
    image: gameImages['ovn3'],
    factions: factions,
    characters: ovn3Characters,
    characterImages: ovn3CharacterImgs,
    compilationGroups: ovn3CompGroups,
    updated: '21 Jul 2023',
    category: 'Character Mod Compilation',
    includes: [
      'Albion (21 Jul 2023)',
      'Citadel of Dusk (11 Jun 2023)',
      'Fimir (31 May 2023)',
      'Grudgebringers (18 Jul 2023)',
    ],
    workshopLink: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2993203389',
  },
  scm3: {
    text: 'Skeleton Crew Compilation 3',
    image: gameImages['scm3'],
    factions: factions,
    characters: scm3Characters,
    characterImages: scm3CharacterImgs,
    compilationGroups: scm3CompGroups,
    updated: '23 Jul 2023',
    category: 'Character Mod Compilation',
    includes: [
      'Marienburg: The Merchant Empire (22 Apr 2023)',
      'Skaven Clans (17 Jul 2023)',
      'Rotblood Tribe (23 Jul 2023)',
      'The Jade-Blooded Vampires: Curse of Nongchang (8 Jul 2023)',
      'Dynasty of the Damned (20 Jun 2023)',
      "Sigmar's Heirs, an Empire Overhaul (22 Jul 2023)",
      'Empire Secessionists, Secede! (15 Apr 2023)',
      'The Gnoblar Horde (22 Apr 2023)',
      "Dead's Cult of the Possessed (23 Jun 2023)",
      'Karanak, Hound of Vengeance (26 May 2023)',
      'Roar of the Jade Sea : Yin-Yin, the Sea Dragon (2 Jul 2023)',
      "Dead's Jade Army Expansion (15 Apr 2023)",
      'Ivan Radinov - Commander of the Gryphon Legion (26 May 2023)',
      "Dead's Kislev Droyashka (9 May 2023)",
      "Dead's Kislev Shaman (9 May 2023)",
      "Garbag's Cunnin' Alliance (23 Jul 2023)",
      'Dark Land Warboss (16 Apr 2023)',
    ],
    workshopLink: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2920115664',
  },
  crys3: {
    text: 'Leaders of Legend 3',
    image: gameImages['crys3'],
    factions: factions,
    characters: crys3Characters,
    characterImages: crys3CharacterImgs,
    updated: '20 Apr 2023',
    category: 'Overhaul',
    workshopLink: 'https://steamcommunity.com/sharedfiles/filedetails/?id=2880244265',
  },
};

export default gameData;
