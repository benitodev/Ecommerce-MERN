import { Request, Response } from 'express';
import { CartModel } from '../../database/models';

export const createCart = async ({ body }: Request, res: Response) => {
  const { id } = body;
  try {
    if (!id) res.status(400).json({ message: 'Need product reference or id' });

    const responseCreateCart = await CartModel.create({
      products: [],
      user: id,
    });
    res.status(200).json({ message: 'Cart Created', cart: responseCreateCart });
  } catch (error) {
    res.status(400).json({ message: 'Error creatting cart' });
  }
};

export const getCart = async ({ params }: Request, res: Response) => {
  try {
    const responseGetCart = await CartModel.findOne({
      user: params.id,
    });
    console.log(responseGetCart);
    res.status(200).json({ cart: responseGetCart });
  } catch (error) {
    res.status(403).json({ message: 'error getting cart' });
  }
};

export const updateCart = async ({ body }: Request, res: Response) => {
  const productToRemove = body.productId;
  try {
    if (body.type === 'add') {
      const responseUpdateCart = await CartModel.findOneAndUpdate({
        user: body.userId,
        $push: {
          products: [
            {
              product: { ...body.product, size: body.size, color: body.color },
              quantity: body.quantity,
            },
          ],
        },
      });
      console.log(responseUpdateCart, 'add');
      res.status(200).json({ cart: responseUpdateCart });
    } else if (body.type === 'remove') {
      console.log('remove');
      const responseUpdateCart = await CartModel.findOneAndUpdate({
        user: body.userId,
        $pull: {
          products: { _id: productToRemove },
        },
      });
      console.log('remove');
      res
        .status(200)
        .json({ message: 'the product has been removed from cart' });
    }
  } catch (error) {
    res.status(401).json({ message: 'Error updating cart' });
  }
};

export const deleteCart = async ({ params }: Request, res: Response) => {
  const cartId = params.id;
  console.log(cartId);
  try {
    if (!cartId)
      res.status(404).json({ message: 'You must to send a reference to cart' });

    const responseDeleteCart = await CartModel.findByIdAndDelete(cartId);
    console.log(responseDeleteCart);
    res.status(200).json({ message: 'The cart has been deleted' });
  } catch (error) {
    res.status(400).json({ message: 'Error deletting cart' });
  }
};
