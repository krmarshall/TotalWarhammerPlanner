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

export { createEmptyCharacterBuild };
