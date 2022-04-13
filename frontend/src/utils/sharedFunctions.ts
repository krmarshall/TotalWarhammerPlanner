import BuildInterface from '../types/interfaces/BuildInterface';
import { CharacterInterface } from '../types/interfaces/CharacterInterface';

const createEmptyCharacterBuild = (
  character: CharacterInterface,
  gameKey: string,
  factionKey: string,
  characterKey: string
) => {
  const emptyBuildArray: Array<Array<number>> = Array.from(Array(6), (element, index) => {
    return Array(character.skillTree[index].length).fill(0);
  });
  const emptyCharacterBuild: BuildInterface = {
    game: gameKey,
    faction: factionKey,
    character: characterKey,
    buildData: emptyBuildArray,
    rank: 1,
    selectedSkills: [],
    blockedSkills: [],
  };
  return emptyCharacterBuild;
};

// Skills can be quest items that dont cost a rank (use_quest_for_prefix), or start with skill points already assigned (points_on_creation)
const createCharacterBuildFromArray = (
  arrayBuild: Array<Array<number>>,
  characterData: CharacterInterface,
  game: string,
  faction: string,
  character: string
) => {
  let rank = 1;
  const selectedSkills: Array<string> = [];
  const blockedSkills: Array<string> = [];

  arrayBuild.forEach((row, y) => {
    row.forEach((skill, x) => {
      if (skill > 0) {
        if (
          characterData.skillTree[y][x].use_quest_for_prefix ||
          skill > characterData.skillTree[y][x].points_on_creation
        ) {
          rank += skill - characterData.skillTree[y][x].points_on_creation;
          selectedSkills.push(characterData.skillTree[y][x].character_skill_key);
          characterData.skillTree[y][x].levels?.forEach((level, index) => {
            if (index + 1 <= skill) {
              if (level.blocks_character_skill_key !== undefined) {
                blockedSkills.push(...level.blocks_character_skill_key);
              }
            }
          });
        }
      }
    });
  });
  const newCharacterBuild: BuildInterface = {
    game,
    faction,
    character,
    buildData: arrayBuild,
    rank,
    selectedSkills,
    blockedSkills,
  };
  return newCharacterBuild;
};

export { createEmptyCharacterBuild, createCharacterBuildFromArray };
