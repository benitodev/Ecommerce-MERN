import { IRouter, Router } from 'express';
import {
  CART_ENDPOINTS,
  createCart,
  getCart,
  updateCart,
  deleteCart,
} from '../../controllers/cart';
import { tokenAuthorization } from '../../middlewares/authorization';

const cartRoutes: IRouter = Router();

cartRoutes.get(CART_ENDPOINTS.GET_CART, tokenAuthorization, getCart);
cartRoutes.post(CART_ENDPOINTS.CREATE_CART, tokenAuthorization, createCart);
cartRoutes.put(CART_ENDPOINTS.UPDATE_CART, tokenAuthorization, updateCart);
cartRoutes.delete(CART_ENDPOINTS.DELETE_CART, tokenAuthorization, deleteCart);
export default cartRoutes;
