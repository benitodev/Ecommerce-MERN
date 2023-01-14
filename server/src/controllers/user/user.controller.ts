import { Request, Response } from 'express';
import { CartModel, UserModel } from '../../database/models';
import { encrypt, verified } from '../../utils/bcrypt.handle';
import { handleHttp } from '../../utils/errorHandle';
import { generateToken } from '../../utils/jwt.handle';

export const getUser = async ({ params }: Request, res: Response) => {
  try {
    const userId = params.id;
    const responseGetUser = await UserModel.findOne({
      id: userId,
    });
    res.status(200).json({ user: responseGetUser });
  } catch (error) {
    handleHttp(res, 'ERROR_CREATE_USER');
  }
};
export const getUsers = async (req: Request, res: Response) => {
  try {
    const responseUsers = await UserModel.find({});
    console.log(responseUsers);
    res.status(200).json({ users: responseUsers });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const { password } = req.body;
    if (!password) return 'error pass';
    const passwordHash = await encrypt(password);

    const responseCreateUser = await UserModel.create({
      ...req.body,
      password: passwordHash,
    });
    if (!responseCreateUser.id)
      res.status(400).json({ message: 'Need product reference or id' });

    res.status(200).json({ message: 'user was created', ok: true });

    const responseCreateCart = await CartModel.create({
      products: [],
      user: responseCreateUser.id,
    });
    console.log(responseCreateCart, 'responseCreateCart');
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error creating user' + error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const checkUserExists = await UserModel.findOne({ email });

    if (!checkUserExists)
      return res.status(401).json({ message: 'error checking user' });

    const userPasswordHash = checkUserExists.password;

    const passwordIsCorrect = await verified(password, userPasswordHash);

    if (!passwordIsCorrect)
      return res.status(404).json('error invalid password');

    const accessToken = await generateToken(
      checkUserExists.email,
      checkUserExists.isAdmin
    );

    const userAndTokenResponse = {
      accessToken,
      user: checkUserExists,
    };

    res.status(200).send(userAndTokenResponse);
  } catch (error) {
    console.log(error);
    handleHttp(res, 'ERROR_LOGIN');
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
    res.status(200).send('user updated');
  } catch (error) {
    handleHttp(res, 'ERROR_UPDATE_USER');
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const responseUserDeleted = await UserModel.findByIdAndDelete(userId);
    res.status(200).send('user deleted');
  } catch (error) {
    handleHttp(res, 'ERROR_CREATE_USER');
  }
};
