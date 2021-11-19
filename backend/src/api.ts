import { Request, Response } from 'express';
import factionCharacters from './data/factionCharacters';
import factionList from './data/factionList';

const apiListener = (req: Request, res: Response) => {
  if (!factionList.includes(req.params.factionKey)) {
    return res.sendStatus(404);
  }

  const selectedCharacter = factionCharacters[`${req.params.factionKey}Characters`][req.params.characterKey];
  if (selectedCharacter === undefined) {
    return res.sendStatus(404);
  }

  return res.status(200).json(selectedCharacter);
};

export default apiListener;
