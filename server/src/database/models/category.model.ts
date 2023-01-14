import { Schema, model } from 'mongoose';
import { Category } from '../types';

const CategorySchema = new Schema<Category>({
  name: {
    type: String,
    required: true,
  },
});

CategorySchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Category = model('Category', CategorySchema);

export default Category;
