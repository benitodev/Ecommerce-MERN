import { Request, Response } from 'express';
import { CartModel, UserModel } from '../../database/models';
import { encrypt, verified } from '../../utils/bcrypt.handle';
import { handleHttp } from '../../utils/errorHandle';
import {
  JWT_SECRET_KEY_REFRESH,
  generateRefreshToken,
  generateToken,
} from '../../utils/jwt.handle';
import {
  getDetailedUser,
  getDetailedUsers,
  registerUser,
} from '../../services/user.service';
import { verify } from 'jsonwebtoken';

export const getUser = async ({ params }: Request, res: Response) => {
  try {
    const userId = params.id;
    const responseGetUser = await getDetailedUser(userId);
    res.status(200).json({ user: responseGetUser });
  } catch (error) {
    handleHttp(res, 'ERROR_CREATE_USER');
  }
};
export const getUsers = async (req: Request, res: Response) => {
  try {
    const responseUsers = await getDetailedUsers();
    res.status(200).json({ users: responseUsers });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const register = async ({ body }: Request, res: Response) => {
  try {
    const responseCreateUser = await registerUser(body);

    if (!responseCreateUser.id)
      res.status(400).json({ message: 'Need product reference or id' });

    const responseCreateCart = await CartModel.create({
      products: [],
      user: responseCreateUser.id,
    });
    console.log(responseCreateCart, 'responseCreateCart');

    res.status(201).json({ message: 'user was created', ok: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error creating user' + error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const checkUserExists = await UserModel.findOne({ email });

    if (!checkUserExists?.id)
      return res.status(401).json({ message: 'error checking email' });

    const userPasswordHash = checkUserExists.password;

    const passwordIsCorrect = await verified(password, userPasswordHash);

    if (!passwordIsCorrect)
      return res.status(401).json({ message: 'error invalid password' });

    const accessToken = generateToken(
      checkUserExists.email,
      checkUserExists.isAdmin
    );
    const refreshToken = generateRefreshToken(
      checkUserExists.email,
      checkUserExists.isAdmin
    );
    refreshTokenArr.push(refreshToken);
    const response = {
      accessToken,
      refreshToken,
      user: {
        id: checkUserExists.id,
        isAdmin: checkUserExists.isAdmin,
        name: checkUserExists.name,
      },
    };

    res.status(200).send(response);
  } catch (error) {
    console.log(error);
    handleHttp(res, 'ERROR_LOGIN');
  }
};

export const logout = (req: Request, res: Response) => {
  const refreshToken = req.body.token;
  console.log(refreshTokenArr);
  refreshTokenArr = refreshTokenArr.filter((token) => token !== refreshToken);
  console.log(refreshTokenArr);

  res.status(200).json({ message: 'You logged out successfully' });
};

let refreshTokenArr: string[] = [];

export const refreshToken = async (req: Request, res: Response) => {
  try {
    //take the refresh token from user
    const refreshToken = req.body.token;
    //send error if there is no token or it's invalid
    if (!refreshToken)
      return res.status(401).json({ message: 'You are not authenticated' });
    if (!refreshTokenArr.includes(refreshToken)) {
      return res.status(403).json({ message: 'Refresh token is invalid' });
    }
    // const tokens = verifyRefreshToken(refreshToken, refreshTokenArr);
    // @ts-ignore: Unreachable code error
    verify(refreshToken, JWT_SECRET_KEY_REFRESH, (err, user) => {
      err && console.log(err);
      refreshTokenArr = refreshTokenArr.filter(
        (token) => token !== refreshToken
      );
      // @ts-ignore: Unreachable code error
      const newAccessToken = generateToken(user.email, user.isAdmin);
      // @ts-ignore: Unreachable code error
      const newRefreshToken = generateRefreshToken(user.email, user.email);

      refreshTokenArr.push(newRefreshToken);

      const tokens = {
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      };
      console.log(refreshTokenArr);
      // everything is fine, create a new token
      res.status(200).json(tokens);
    });
  } catch (error) {
    res.status(404).json({ message: 'Error refreshing' });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const responseUpdateUser = await UserModel.findOneAndUpdate(
      { _id: userId },
      req.body,
      { new: true }
    );
    console.log(responseUpdateUser);
    res.status(201).send('user updated');
  } catch (error) {
    handleHttp(res, 'ERROR_UPDATE_USER');
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const responseCartDeleted = await CartModel.deleteOne({ user: userId });
    const responseUserDeleted = await UserModel.findByIdAndDelete(userId);
    res.status(204).send('user deleted');
  } catch (error) {
    handleHttp(res, 'ERROR_CREATE_USER');
  }
};
