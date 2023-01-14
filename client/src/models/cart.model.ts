import { Product } from './product.model';
import { User } from './user.model';

export interface CartResponse {
  cart: Cart;
}

export interface Cart {
  user: string;
  products: ProductCartRef[];
  id: string;
}

export interface ProductCartReference {
  productId: string;
  quantity: number;
  _id: string;
}

export interface ProductCartRef extends ProductItem {
  product: Product;
  quantity: number;
  _id: string;
}

export interface ProductItem {
  title: string;
  description: string;
  url: string;
  stock: number;
  category: string[];
  price: number;
  size: string[];
  id: string;
}

export interface CartRequest {
  userId: User['id'];
}
