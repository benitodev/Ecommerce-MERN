import { Request, Response } from 'express';
import { ProductModel } from '../../database/models';
import { getRandom } from '../../utils/randomProducts';

export const getProducts = async ({ params }: Request, res: Response) => {
  const query = params.category ? { category: params.category } : {};
  console.log(query);
  try {
    const getProducts = await ProductModel.find(query);
    res.status(200).json({ products: getProducts });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const getProduct = async ({ params }: Request, res: Response) => {
  console.log(params);
  try {
    const productId = params.id;
    console.log(productId, 'GET_PRODUCT');
    const responseGetProduct = await ProductModel.findById(productId);
    res.status(200).json({ product: responseGetProduct });
  } catch (error) {
    res.status(400).json({ message: 'error getting product' });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const responseCreateProduct = await ProductModel.create(req.body);
    res
      .status(200)
      .json({ message: 'Product created', product: responseCreateProduct });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Error creatting product' });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const responseProductDeleted = await ProductModel.findByIdAndDelete(
      productId
    );
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error deletting product' });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const productUpdated = await ProductModel.findByIdAndUpdate(productId);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Error updatting product' });
  }
};

export const popularProducts = async (req: Request, res: Response) => {
  const sliceNumberProducts = 8;
  try {
    const getProducts = await ProductModel.find({});
    const popularProducts = getRandom(getProducts, sliceNumberProducts);
    res.status(200).json({ products: popularProducts });
  } catch (error) {
    res.status(400).json({ message: 'Error' });
  }
};
