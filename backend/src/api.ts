import { Request, Response } from 'express';
import { bulkData } from './initializeData';

const apiListener = (req: Request, res: Response) => {
  const selectedCharacter = bulkData[req.params.gameKey]?.[req.params.factionKey]?.[req.params.characterKey];
  if (selectedCharacter === undefined) {
    return res.sendStatus(404);
  }

  return res.status(200).json(selectedCharacter);
};

export default apiListener;
