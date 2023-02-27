import { UserModel } from '../database/models';
import { RegisterRequest, User } from '../database/types';
import { encrypt } from '../utils/bcrypt.handle';

const getDetailedUser = async (userId: string) => {
  const id = userId;
  const responseGetUser = await UserModel.findOne({
    id,
  });

  return responseGetUser;
};

const getDetailedUsers = async () => {
  const responseGetUsers = await UserModel.find({});
  return responseGetUsers;
};

const registerUser = async (user: RegisterRequest) => {
  const { password } = user;

  const passwordHash = await encrypt(password);

  const responseGetUsers = await UserModel.create({
    ...user,
    password: passwordHash,
  });
  return responseGetUsers;
};

const loginUser = async (user: RegisterRequest) => {};

export { getDetailedUser, getDetailedUsers, registerUser, loginUser };
