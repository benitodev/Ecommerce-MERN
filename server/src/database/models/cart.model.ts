import { model, Schema, Types } from 'mongoose';
import { Cart } from '../types';
import Product from './product.model';
import { ProductOmitStock } from '../types/product.type';
const CartSchema = new Schema<Cart>({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  products: [
    {
      product: { type: Object, required: true },
      quantity: { type: Number, default: 1 },
    },
  ],
});

CartSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Cart = model('Cart', CartSchema);

export default Cart;
