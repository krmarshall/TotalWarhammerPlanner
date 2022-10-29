import BuildInterface from '../types/interfaces/BuildInterface';
import { CharacterInterface } from '../types/interfaces/CharacterInterface';

const createEmptyCharacterBuild = (
  character: CharacterInterface,
  gameKey: string,
  factionKey: string,
  characterKey: string
) => {
  const emptyBuildArray: Array<Array<number>> = [];
  let rank = 1;
  let startingSkillPoints = 0;
  const selectedSkills: Array<string> = [];
  character.skillTree.forEach((skillRow, yIndex) => {
    emptyBuildArray[yIndex] = [];
    skillRow.forEach((skill, xIndex) => {
      emptyBuildArray[yIndex][xIndex] = skill.points_on_creation;
      rank += skill.points_on_creation;
      startingSkillPoints += skill.points_on_creation;
      if (skill.points_on_creation > 0) {
        selectedSkills.push(skill.character_skill_key);
        selectedSkills.push(skill.key);
      }
    });
  });

  const emptyCharacterBuild: BuildInterface = {
    game: gameKey,
    faction: factionKey,
    character: characterKey,
    buildData: emptyBuildArray,
    rank,
    startingSkillPoints,
    autoUnlockSkillPoints: 0,
    selectedSkills,
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
  let startingSkillPoints = 0;
  let autoUnlockSkillPoints = 0;
  const selectedSkills: Array<string> = [];
  const blockedSkills: Array<string> = [];

  arrayBuild.forEach((row, y) => {
    row.forEach((skill, x) => {
      if (skill > 0) {
        rank += skill;

        selectedSkills.push(characterData.skillTree[y][x].character_skill_key);
        selectedSkills.push(characterData.skillTree[y][x].key);

        if (characterData.skillTree[y][x].points_on_creation > 0) {
          startingSkillPoints += characterData.skillTree[y][x].points_on_creation;
        }

        characterData.skillTree[y][x].levels?.forEach((level, index) => {
          if (index + 1 <= skill) {
            if (level.blocks_character_skill_key !== undefined) {
              blockedSkills.push(...level.blocks_character_skill_key);
            }
          }

          if (level.auto_unlock_at_rank !== undefined) {
            autoUnlockSkillPoints++;
          }
        });
      }
    });
  });
  const newCharacterBuild: BuildInterface = {
    game,
    faction,
    character,
    buildData: arrayBuild,
    rank,
    startingSkillPoints,
    autoUnlockSkillPoints,
    selectedSkills,
    blockedSkills,
  };
  return newCharacterBuild;
};

const trimString = (string: string, length = 75) => {
  let trimmedString = string;
  if (trimmedString.length > length) {
    trimmedString = trimmedString.substring(0, length);
    trimmedString += '...';
  }
  return trimmedString;
};

export { createEmptyCharacterBuild, createCharacterBuildFromArray, trimString };
