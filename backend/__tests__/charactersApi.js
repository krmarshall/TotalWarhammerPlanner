import supertest from 'supertest';
import glob from 'glob';
import path from 'path';

import app from '../src/app';
import { initializeData, bulkData } from '../src/initializeData';
import vanilla2Characters from '../../frontend/src/data/vanilla2Characters';
import sfo2Characters from '../../frontend/src/data/sfo2Characters';
import radious2Characters from '../../frontend/src/data/radious2Characters';
import vanilla3Characters from '../../frontend/src/data/vanilla3Characters';

const request = supertest(app);

beforeAll(() => {
  initializeData();
});

describe('Basic character API tests', () => {
  test('Basic example Malagor', async () => {
    const response = await request.get('/api/vanilla2.wh_dlc03_bst_beastmen.bst_malagor');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(bulkData['vanilla2']['wh_dlc03_bst_beastmen']['bst_malagor']);
  });

  test('Invalid game returns 404', async () => {
    const response = await request.get('/api/garbage.wh_dlc03_bst_beastmen.bst_malagor');
    expect(response.status).toBe(404);
    expect(response.body).not.toEqual(bulkData['vanilla2']['wh_dlc03_bst_beastmen']['bst_malagor']);
  });

  test('Invalid faction returns 404', async () => {
    const response = await request.get('/api/vanilla2.garbage.bst_malagor');
    expect(response.status).toBe(404);
    expect(response.body).not.toEqual(bulkData['vanilla2']['wh_dlc03_bst_beastmen']['bst_malagor']);
  });

  test('Invalid character returns 404', async () => {
    const response = await request.get('/api/vanilla2.wh_dlc03_bst_beastmen.garbage');
    expect(response.status).toBe(404);
    expect(response.body).not.toEqual(bulkData['vanilla2']['wh_dlc03_bst_beastmen']['bst_malagor']);
  });
});

describe('Bulk character API test', () => {
  const gameList = [
    { charList: vanilla2Characters, name: 'vanilla2' },
    { charList: sfo2Characters, name: 'sfo2' },
    { charList: radious2Characters, name: 'radious2' },

    { charList: vanilla3Characters, name: 'vanilla3' },
  ];

  gameList.forEach((game) => {
    const characterPathList = glob.sync(`./src/data/${game.name}/**/*.json`);
    const characterList = characterPathList.map((characterPath) => path.basename(characterPath, '.json'));
    const testedChars = [];

    const factionKeys = Object.keys(game.charList);
    factionKeys.forEach((factionKey) => {
      const characterKeys = Object.keys(game.charList[factionKey]);
      characterKeys.forEach((characterKey) => {
        test(`${factionKey} - ${characterKey}`, async () => {
          const strippedFactionKey = factionKey.replace(/_(lords|heroes)/, '');
          const response = await request.get(`/api/${game.name}.${strippedFactionKey}.${characterKey}`);
          expect(response.status).toBe(200);
          expect(response.body).toHaveProperty('key', characterKey);
          expect(response.body).toHaveProperty('skillTree');
          testedChars.push(characterKey);
        });
      });
    });

    test(`All ${game.name} characters were served`, () => {
      testedChars.sort();
      characterList.sort();
      expect(testedChars).toEqual(characterList);
    });
  });
});
