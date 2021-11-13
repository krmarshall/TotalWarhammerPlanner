import { Request, Response } from 'express';

const imageTestListener = (req: Request, res: Response) => {
  res.status(200).json({ iconType: 'campaign', icon: 'movement' });
};

export default imageTestListener;
