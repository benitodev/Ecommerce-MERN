import { Application } from 'express';
import { cartRoutes, productRoutes, testRoutes, userRoutes } from '../routes';

const routes = (server: Application) => {
  server.use('/user', userRoutes);
  server.use('/product', productRoutes);
  server.use('/cart', cartRoutes);
  if (process.env.NODE_ENV === 'test') {
    server.use('/testing', testRoutes);
  }
};

export default routes;
