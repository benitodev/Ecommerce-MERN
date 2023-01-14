import { Application } from 'express';
import { cartRoutes, productRoutes, userRoutes } from '../routes';

const routes = (server: Application) => {
  server.use('/user', userRoutes);
  server.use('/product', productRoutes);
  server.use('/cart', cartRoutes);
};

export default routes;
