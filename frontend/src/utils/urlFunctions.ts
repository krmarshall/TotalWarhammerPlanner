import BuildInterface from '../types/interfaces/BuildInterface';
import lzbase62 from 'lzbase62';
import { createEmptyCharacterBuild } from './sharedFunctions';
import { CharacterInterface } from '../types/interfaces/CharacterInterface';

const baseURL = import.meta.env.DEV ? 'http://localhost:5173/planner/' : 'https://totalwarhammerplanner.com/planner/';

const generateCharacterURL = (characterBuild: BuildInterface) => {
  return baseURL + `${characterBuild.game}/${characterBuild.faction}/${characterBuild.character}/`;
};

// 0-v means base32 decoded to a number between 0 and 31
// Url format http://127.0.0.1:5173/planner/<faction>/<character>/...
// [0-9 = # Of Skill Rows, y]([0-z = # of skills in next row, x][0-3 = Skill points in skill] * x) * y
const convertBuildToCode = (characterBuild: BuildInterface, characterData: CharacterInterface) => {
  const buildData = [...characterBuild.buildData];
  const stringBase = generateCharacterURL(characterBuild);

  const emptyCharacterBuild = createEmptyCharacterBuild(
    characterData,
    characterBuild.game,
    characterBuild.faction,
    characterBuild.character
  );
  // Scuffed object equality check
  if (JSON.stringify(characterBuild) === JSON.stringify(emptyCharacterBuild)) {
    return stringBase;
  }

  let encodedString = '';
  // Encode # of skill rows
  encodedString += buildData.length;

  // Encode perks
  for (let y = 0; y < buildData.length; y++) {
    encodedString += base32Array[buildData[y].length];
    for (let x = 0; x < buildData[y].length; x++) {
      encodedString += buildData[y][x];
    }
  }
  const compressedBuild = lzbase62.compress(encodedString);
  return stringBase + compressedBuild;
};

const convertCodeToBuild = (code: string) => {
  code = lzbase62.decompress(code);
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
  'w',
  'x',
  'y',
  'z',
];

export { generateCharacterURL, convertBuildToCode, convertCodeToBuild };
