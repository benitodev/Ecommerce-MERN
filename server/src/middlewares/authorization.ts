import { NextFunction, Request, Response } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import { ObjectId } from 'mongoose';
import config from '../config';
import { generateToken, verifyToken } from '../utils/jwt.handle';

const SECRET_KEY: string = config.JWT_SECRET;

interface RequestExt extends Request {
  user?: {
    email: string;
    isAdmin: boolean;
  };
}

export const tokenAuthorization = (
  req: RequestExt,
  res: Response,
  next?: NextFunction
) => {
  try {
    const getJwtTokenBearer = req.headers.authorization || '';
    const jwtToken = getJwtTokenBearer.split(' ').pop();
    const { email, isAdmin } = verifyToken(`${jwtToken}`);
    if (!email && !isAdmin) {
      res.status(401).json({ message: 'Invalid Token or not found' });
    }
    req.user = { email, isAdmin };
    typeof next === 'function' && next();
  } catch (error) {
    res.status(400).json({ message: "you don't have authorization" });
  }
};

export const verifyTokenAndAdmin = (
  req: RequestExt,
  res: Response,
  next: NextFunction
) => {
  tokenAuthorization(req, res, () => {
    if (req.user?.isAdmin) {
      next();
    } else {
      res.status(403).json('You are not alowed to do that!');
    }
  });
};
