import BuildInterface from '../types/interfaces/BuildInterface';
import CharacterInterface from '../types/interfaces/CharacterInterface';

const createEmptyCharacterBuild = (character: CharacterInterface, factionKey: string, characterKey: string) => {
  const emptyCharacterArray: Array<Array<number>> = Array.from(Array(character.skillTree.length), (element, index) => {
    const skillLineKeys = Object.keys(character.skillTree[index]);
    return Array(skillLineKeys.length).fill(0);
  });
  const emptyCharacterBuild: BuildInterface = {
    faction: factionKey,
    character: characterKey,
    buildData: emptyCharacterArray,
    rank: 1,
    selectedSkills: [],
    blockedSkills: [],
  };
  return emptyCharacterBuild;
};

const createCharacterBuildFromArray = (
  arrayBuild: Array<Array<number>>,
  characterData: CharacterInterface,
  faction: string,
  character: string
) => {
  // Should probably size this dynamically
  const skillKeyArray = [...Array(7)].map(() => Array(20).fill(''));
  const skillDataArray = characterData.skillTree.map((skillLine, yIndex) => {
    const skillKeys = Object.keys(skillLine);
    return skillKeys.map((skillKey, xIndex) => {
      const skill = skillLine[skillKey];
      skillKeyArray[yIndex][xIndex] = skillKey;
      return skill;
    });
  });

  let rank = 1;
  const selectedSkills: Array<string> = [];
  const blockedSkills: Array<string> = [];
  for (let y = 0; y < arrayBuild?.length; y++) {
    if (arrayBuild[y].length === 0) {
      continue;
    }
    for (let x = 0; x < arrayBuild[y].length; x++) {
      if (arrayBuild[y][x] > 0) {
        rank += arrayBuild[y][x];
        selectedSkills.push(skillKeyArray[y][x]);
        if (skillDataArray[y][x].blocksSkills) {
          skillDataArray[y][x].blocksSkills?.map((blockedSkill) => {
            blockedSkills.push(blockedSkill);
          });
        }
      }
    }
  }

  const newCharacterBuild: BuildInterface = {
    faction,
    character,
    buildData: arrayBuild,
    rank,
    selectedSkills,
    blockedSkills,
  };
  return newCharacterBuild;
};

const camelCaseToTitle = (text: string) => {
  const result = text.replace(/([A-Z])/g, ' $1');
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult;
};

export { createEmptyCharacterBuild, camelCaseToTitle, createCharacterBuildFromArray };
