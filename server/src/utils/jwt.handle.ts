import { JwtPayload, sign, verify } from 'jsonwebtoken';
import config from '../config';

const JWT_SECRET_KEY: string = config.JWT_SECRET;
export const JWT_SECRET_KEY_REFRESH: string = config.JWT_SECRET_REFRESH;
interface DecodedToken {
  email: string;
  isAdmin: boolean;
}

export const generateToken = (email: String, isAdmin: Boolean) => {
  const accessToken = sign({ email, isAdmin }, JWT_SECRET_KEY, {
    expiresIn: '2h',
  });
  return accessToken;
};

export const generateRefreshToken = (email: String, isAdmin: Boolean) => {
  const accessToken = sign({ email, isAdmin }, JWT_SECRET_KEY_REFRESH);
  return accessToken;
};

export const verifyRefreshToken = (
  refreshToken: string,
  refreshTokens: string[]
) => {
  const isOk = verify(refreshToken, JWT_SECRET_KEY_REFRESH, (err, user) => {
    err && console.log(err);
    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
    // @ts-ignore: Unreachable code error
    const newAccessToken = generateToken(user.email, user.isAdmin);
    // @ts-ignore: Unreachable code error
    const newRefreshToken = generateRefreshToken(user.email, user.isAdmin);

    refreshTokens.push(newRefreshToken);

    return {
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    };
  });
  return isOk;
};

export const verifyToken = (token: string) => {
  const isOk = verify(token, JWT_SECRET_KEY);
  return isOk as DecodedToken;
};
