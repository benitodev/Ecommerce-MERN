import { Response } from 'express';

export const handleHttp = (res: Response, error: string) => {
  res.status(500).send(error);
};
