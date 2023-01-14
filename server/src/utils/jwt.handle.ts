import { sign, verify } from 'jsonwebtoken';
import config from '../config';

const JWT_SECRET_KEY: string = config.JWT_SECRET;

interface DecodedToken {
  email: string;
  isAdmin: boolean;
}

export const generateToken = async (email: String, isAdmin: Boolean) => {
  const accessToken = sign({ email, isAdmin }, JWT_SECRET_KEY, {
    expiresIn: '2h',
  });
  return accessToken;
};

export const verifyToken = (token: string) => {
  const isOk = verify(token, JWT_SECRET_KEY);
  return isOk as DecodedToken;
};
