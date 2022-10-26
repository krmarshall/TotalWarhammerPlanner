import { CharacterInterface } from '../types/interfaces/CharacterInterface';

const path = import.meta.env.DEV ? 'http://localhost:5000/api' : 'https://totalwarhammerplanner.com/api';

const api = {
  getCharacterSkillTree: (gameKey: string, factionKey: string, characterKey: string): Promise<CharacterInterface> => {
    return fetch(`${path}/${gameKey}.${factionKey}.${characterKey}`, {
      method: 'GET',
    }).then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        let errorMessage = '';
        switch (response.status) {
          case 404: {
            errorMessage = 'Requested character not found';
            break;
          }
          case 502: {
            errorMessage = 'API unreachable, try again later';
            break;
          }
          default: {
            errorMessage = 'Could not fetch character';
            break;
          }
        }
        throw new Error(errorMessage);
      }
    });
  },
};

export default api;
