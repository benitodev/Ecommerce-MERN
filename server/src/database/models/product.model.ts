import { model, Schema } from 'mongoose';
import { Product } from '../types';

const ProductSchema = new Schema<Product>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true },
  stock: { type: Number },
  category: [{ type: String, required: true }],
  price: { type: Number, required: true },
  size: [{ type: String, required: true }],
  id: { type: String },
});

ProductSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Product = model('Product', ProductSchema);

export default Product;
