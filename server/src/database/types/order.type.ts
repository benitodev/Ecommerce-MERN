import { ObjectId } from 'mongoose';
import { Product } from './product.type';
import { User } from './user.type';

enum OrderStatus {
  PENDING = 'pending',
  SUCCESSFULLY = 'complete',
  REJECTED = 'rejected',
}

type ProductTitle = Pick<Product, 'title'>;
type UserEmail = Pick<User, 'email'>;

type ProductOrder = {
  id: ObjectId;
  name: ProductTitle['title'];
  quantity: number;
};

export interface Order {
  order: {
    products: Array<ProductOrder>;
    amount: number;
  };
  userAddress: UserEmail['email'];
  status: OrderStatus;
}
