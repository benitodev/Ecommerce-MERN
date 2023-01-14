import { hash, compare } from 'bcryptjs';

const hashSalt = 8;
export const encrypt = async (password: string) => {
  const passwordHash = await hash(password, hashSalt);
  return passwordHash;
};

export const verified = async (password: string, passwordHash: string) => {
  const isCorrect = await compare(password, passwordHash);
  return isCorrect;
};
