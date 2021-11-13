import { Request, Response } from 'express';

const apiListener = (req: Request, res: Response) => {
  res.status(200).json({ test: `${req.params.characterKey} received!` });
};

export default apiListener;
