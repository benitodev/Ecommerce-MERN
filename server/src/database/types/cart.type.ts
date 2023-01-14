import { CartProduct, Product } from './product.type';
import { User } from './user.type';

export interface Cart {
  user: User['id'];
  products: {
    product: Array<CartProduct>;
    quantity: number;
  };
}
