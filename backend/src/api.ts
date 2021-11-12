import { Request, Response } from 'express';

const apiListener = (req: Request, res: Response) => {
  res.status(200);
  const temp = req.params.characterKey;
  res.json({ test: `${temp} received!` });
};

export default apiListener;
