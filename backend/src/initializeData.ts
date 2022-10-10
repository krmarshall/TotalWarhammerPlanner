import glob from 'glob';
import { readFileSync } from 'fs';

interface bulkDataInterface {
  [key: string]: {
    [key: string]: {
      [key: string]: {
        skillTree: any;
      };
    };
  };
}

const bulkData: bulkDataInterface = {};

const initializeData = () => {
  const gamePaths = glob.sync('./src/TWPData/*/');

  gamePaths.forEach((gamePath) => {
    const game = gamePath.split('./src/TWPData/')[1].replace('/', '');
    bulkData[game] = {};
    const factionPaths = glob.sync(`${gamePath}*/`);

    factionPaths.forEach((factionPath) => {
      const faction = factionPath.split(gamePath)[1].replace('/', '');
      bulkData[game][faction] = {};
      const characterPaths = glob.sync(`${factionPath}**.json`);

      characterPaths.forEach((characterPath) => {
        const character = characterPath.split(factionPath)[1].replace('.json', '');
        bulkData[game][faction][character] = JSON.parse(readFileSync(characterPath, 'utf-8'));
      });
    });
  });
};

export { initializeData, bulkData };
