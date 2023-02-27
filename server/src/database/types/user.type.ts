import { Document } from 'mongoose';
import { Product } from './product.type';

export interface User extends Document {
  name: string;
  email: string;
  password: string;
  products: Array<Product>;
  isAdmin: boolean;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface LoginRequest {
  name: string;
  password: string;
}
