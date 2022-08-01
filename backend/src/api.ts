import { Request, Response } from 'express';
import { bulkData } from './initializeData';
// import { readFile } from 'fs/promises';

const apiListener = (req: Request, res: Response) => {
  const selectedCharacter = bulkData[req.params.gameKey]?.[req.params.factionKey]?.[req.params.characterKey];
  if (selectedCharacter === undefined) {
    return res.sendStatus(404);
  }

  return res.status(200).json(selectedCharacter);
};

// If (when) all the skill trees get too large to reasonable hold in memory consider reading from file instead.
// About half the requests/sec but can be improved a bit if you memoize the readFile.
// SANITIZE USER INPUT IF USING THIS
// const apiListener = (req: Request, res: Response) => {
//   //const selectedCharacter = bulkData[req.params.gameKey]?.[req.params.factionKey]?.[req.params.characterKey];
//   readFile(`./src/data/${req.params.gameKey}/${req.params.factionKey}/${req.params.characterKey}.json`, 'utf-8')
//     .then((selectedCharacter) => {
//       return res.status(200).json(JSON.parse(selectedCharacter));
//     })
//     .catch((error) => {
//       return res.sendStatus(404);
//     });
// };

export default apiListener;
