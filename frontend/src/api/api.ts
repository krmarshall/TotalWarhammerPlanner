const path = import.meta.env.DEV ? 'http://localhost:5000/api' : 'http://localhost:5000/api';

const api = {
  getCharacterSkillTree: (factionKey: string, characterKey: string): Promise<any> => {
    return fetch(`${path}/${factionKey}.${characterKey}`, {
      method: 'GET',
      mode: 'cors',
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .catch((err) => err);
  },
  imageTest: (): Promise<any> => {
    return fetch(`${path}/imageTest/`, {
      method: 'GET',
      mode: 'cors',
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((resJson) => {
        console.log(`Then ${resJson}`);
        return resJson;
      })
      .catch((error) => {
        console.log(`Catch ${error}`);
        return error;
      });
  },
};

export default api;
