import { CharacterInterface } from '../types/interfaces/CharacterInterface';

const path = import.meta.env.DEV ? 'http://localhost:5000/api' : 'http://localhost:5000/api';

const api = {
  getCharacterSkillTree: (gameKey: string, factionKey: string, characterKey: string): Promise<CharacterInterface> => {
    return fetch(`${path}/${gameKey}.${factionKey}.${characterKey}`, {
      method: 'GET',
    }).then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error(response.statusText);
      }
    });
  },
};

export default api;
