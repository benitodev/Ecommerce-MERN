import mongoose, { ObjectId } from 'mongoose';
import { Category } from './category.type';

export type Size =
  | 'XS'
  | 'S'
  | 'M'
  | 'L'
  | 'XL'
  | 'XXL'
  | 36
  | 37
  | 38
  | 39
  | 40;

export interface Product {
  id: string;
  title: string;
  price: number;
  url: string;
  size: Array<Size>;
  category: Array<Category>;
  color: Array<string>;
  description: string;
  stock: number;
}

export type CartProduct = Omit<Product, 'size' | 'stock' | 'color'>;

export type ProductOmitStock = Omit<Product, 'stock'>;
