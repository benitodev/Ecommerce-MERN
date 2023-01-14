import { z } from 'zod';

export const name = z
  .string({
    required_error: 'first name is required',
    invalid_type_error: 'first name must be a string',
  })
  .min(4, { message: 'the min characters must be 4' })
  .max(20, { message: 'the max characters must be 20' });

export const email = z
  .string({
    required_error: 'email is required',
    invalid_type_error: 'email must be a string',
  })
  .email('invalid email address')
  .regex(new RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$'));

export const password = z
  .string({
    required_error: 'password is required',
    invalid_type_error: 'password must be a string',
  })
  .min(10, 'password must be at least 10 characters');
