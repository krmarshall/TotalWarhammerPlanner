import supertest from 'supertest';
import glob from 'glob';
import path from 'path';

import app from '../src/app';
import { initializeData, bulkData } from '../src/initializeData';
import vanilla2Characters from '../../frontend/src/data/vanilla2Characters';
import sfo2Characters from '../../frontend/src/data/sfo2Characters';
import radious2Characters from '../../frontend/src/data/radious2Characters';
import radious3Characters from '../../frontend/src/data/radious3Characters';
import vanilla3Characters from '../../frontend/src/data/vanilla3Characters';
import mixu3Characters from '../../frontend/src/data/mixu3Characters';
import lege3Characters from '../../frontend/src/data/lege3Characters';
import crys3Characters from '../../frontend/src/data/crys3Characters';

const request = supertest(app);

beforeAll(() => {
  initializeData();
});

describe('Basic character API tests', () => {
  test('Basic example Malagor', async () => {
    const response = await request.get('/api/vanilla2.bst_beastmen.bst_malagor');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(bulkData['vanilla2']['bst_beastmen']['bst_malagor']);
  });

  test('Invalid game returns 404', async () => {
    const response = await request.get('/api/garbage.beastmen.bst_malagor');
    expect(response.status).toBe(404);
    expect(response.body).not.toEqual(bulkData['vanilla2']['bst_beastmen']['bst_malagor']);
  });

  test('Invalid faction returns 404', async () => {
    const response = await request.get('/api/vanilla2.garbage.bst_malagor');
    expect(response.status).toBe(404);
    expect(response.body).not.toEqual(bulkData['vanilla2']['bst_beastmen']['bst_malagor']);
  });

  test('Invalid character returns 404', async () => {
    const response = await request.get('/api/vanilla2.bst_beastmen.garbage');
    expect(response.status).toBe(404);
    expect(response.body).not.toEqual(bulkData['vanilla2']['bst_beastmen']['bst_malagor']);
  });
});

describe('Bulk character API test', () => {
  const gameList = [
    { charList: vanilla2Characters, name: 'vanilla2' },
    { charList: sfo2Characters, name: 'sfo2' },
    { charList: radious2Characters, name: 'radious2' },

    { charList: vanilla3Characters, name: 'vanilla3' },
    { charList: radious3Characters, name: 'radious3' },
    { charList: mixu3Characters, name: 'mixu3' },
    { charList: lege3Characters, name: 'lege3' },
    { charList: crys3Characters, name: 'crys3' },
  ];

  gameList.forEach((game) => {
    const characterPathList = glob.sync(`./src/TWPData/${game.name}/**/*.json`);
    const characterList = characterPathList.map((characterPath) => path.basename(characterPath, '.json'));
    const testedChars = [];

    const factionKeys = Object.keys(game.charList);
    factionKeys.forEach((factionKey) => {
      const characterKeys = Object.keys(game.charList[factionKey]);
      characterKeys.forEach((characterKey) => {
        test(`${game.name} - ${factionKey} - ${characterKey}`, async () => {
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
