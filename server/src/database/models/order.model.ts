import mongoose, { Schema, model, Types } from 'mongoose';
import { Order } from '../types';

const OrderSchema = new Schema<Order>({
  order: {
    products: [
      {
        id: { type: Schema.Types.ObjectId },
        name: { type: String },
        quantity: { type: Number, default: 1 },
      },
    ],
    amount: { type: Number },
  },
  userAddress: { type: String },
  status: { type: String, required: true },
});

OrderSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Order = model('Order', OrderSchema);

export default Order;
