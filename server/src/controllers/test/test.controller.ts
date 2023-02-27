import { Request, Response } from 'express';
import { CartModel, UserModel } from '../../database/models';
import { registerUser } from '../../services/user.service';

export const resetDatabase = async (req: Request, res: Response) => {
  await CartModel.deleteMany({});
  await UserModel.deleteMany({});

  const user = await registerUser({
    name: 'test',
    email: 'test@gmail.com',
    password: 'lacontraseñasegura',
  });

  const responseCreateCart = await CartModel.create({
    products: [],
    user: user.id,
  });
  res.status(204).end();
};
