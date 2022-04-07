import app from '../src/app';
import supertest from 'supertest';
import { initializeData, bulkData } from '../src/initializeData';
import vanilla2Characters from '../../frontend/src/data/vanilla2Characters';
import sfo2Characters from '../../frontend/src/data/sfo2Characters';

const request = supertest(app);

beforeAll(() => {
  initializeData();
});

describe('Character API tests', () => {
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

describe('Frontend vanilla2 list tests', () => {
  const game = 'vanilla2';
  const factionKeys = Object.keys(vanilla2Characters);
  factionKeys.forEach((factionKey) => {
    const characterKeys = Object.keys(vanilla2Characters[factionKey]);
    characterKeys.forEach((characterKey) => {
      test(`${factionKey} - ${characterKey}`, async () => {
        const strippedFactionKey = factionKey.replace(/_(lords|heroes)/, '');
        const response = await request.get(`/api/${game}.${strippedFactionKey}.${characterKey}`);
        expect(response.status).toBe(200);
        expect(response.body).toEqual(bulkData[game][strippedFactionKey][characterKey]);
      });
    });
  });
});

describe('Frontend sfo2 list tests', () => {
  const game = 'sfo2';
  const factionKeys = Object.keys(sfo2Characters);
  factionKeys.forEach((factionKey) => {
    const characterKeys = Object.keys(sfo2Characters[factionKey]);
    characterKeys.forEach((characterKey) => {
      test(`${factionKey} - ${characterKey}`, async () => {
        const strippedFactionKey = factionKey.replace(/_(lords|heroes)/, '');
        const response = await request.get(`/api/${game}.${strippedFactionKey}.${characterKey}`);
        expect(response.status).toBe(200);
        expect(response.body).toEqual(bulkData[game][strippedFactionKey][characterKey]);
      });
    });
  });
});
