import { Request, Response } from 'express';

const imageTestListener = (req: Request, res: Response) => {
  res.status(200).json({ iconType: 'blueline', icon: 'movement' });
};

export default imageTestListener;
