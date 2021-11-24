import BuildInterface from '../types/interfaces/BuildInterface';
import CharacterInterface from '../types/interfaces/CharacterInterface';

const baseURL = import.meta.env.DEV ? 'http://localhost:3000/planner/' : 'http://localhost:5000/planner/';
// 0-Z means base32 decoded to a number between 0 and 31
// Url format http://localhost:3000/planner/<faction>/<character>/...
// [0-9 = # Of Skill Rows, y].([0-Z = # of skills in next row, x][0-3 = Skill points in skill] * x). * y
const convertBuildToCode = (characterBuild: BuildInterface) => {
  const buildData = [...characterBuild.buildData];
  let encodedString = '';
  encodedString += baseURL;

  // Add faction and character
  encodedString += `${characterBuild.faction}/${characterBuild.character}/`;

  // Encode # of skill rows
  encodedString += buildData.length;

  // Encode perks
  for (let y = 0; y < buildData.length; y++) {
    encodedString += base32Array[buildData[y].length];
    for (let x = 0; x < buildData[y].length; x++) {
      encodedString += buildData[y][x];
    }
  }
  return encodedString;
};

const convertCodeToBuild = (code: string) => {
  const yLengthString = code.slice(0, 1);
  const yLength = Number.parseInt(yLengthString);
  const build: Array<Array<number>> = new Array(yLength);

  let slicePosition = 1;

  for (let y = 0; y < yLength; y++) {
    const xLengthCoded = code.slice(slicePosition, slicePosition + 1);
    slicePosition++;
    const xLength = base32Array.indexOf(xLengthCoded);
    const xArray: Array<number> = new Array(xLength);
    for (let x = 0; x < xLength; x++) {
      xArray[x] = Number.parseInt(code.slice(slicePosition, slicePosition + 1));
      slicePosition++;
    }
    build[y] = xArray;
  }

  return build;
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

const base32Array = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
];

export { convertBuildToCode, convertCodeToBuild, createCharacterBuildFromArray };
