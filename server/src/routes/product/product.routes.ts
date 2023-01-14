import { IRouter, Router } from 'express';
import * as controllers from '../../controllers';
import { PRODUCT_ENDPOINTS } from '../../controllers';
import {
  verifyTokenAndAdmin,
  tokenAuthorization,
} from '../../middlewares/authorization';

const productRoutes: IRouter = Router();

productRoutes.get(
  PRODUCT_ENDPOINTS.POPULAR_PRODUCTS,
  controllers.popularProducts
);
productRoutes.get(PRODUCT_ENDPOINTS.GET_PRODUCTS, controllers.getProducts);

productRoutes.get(PRODUCT_ENDPOINTS.GET_PRODUCT, controllers.getProduct);

productRoutes.post(
  PRODUCT_ENDPOINTS.CREATE_PRODUCT,
  verifyTokenAndAdmin,
  controllers.createProduct
);

export default productRoutes;
