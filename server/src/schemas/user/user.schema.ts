import { z } from 'zod';
import { name, email, password } from './values.schema';

export const registerUserSchema = z.object({
  body: z.object({
    name,
    email,
    password,
  }),
});
