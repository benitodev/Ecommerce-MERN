import 'dotenv/config';

const config = {
  //db config
  DB_URI: process.env.DB_URI ?? 'mongodb://0.0.0.0:27017/',
  DB_NAME: process.env.DB_NAME ?? 'eCommerce',
  DB_NAME_TEST: process.env.DB_NAME_TEST || 'e_commerce_test',
  JWT_SECRET: process.env.JWT_SECRET ?? 'secret-token',
  JWT_SECRET_REFRESH: process.env.JWT_SECRET_REFRESH ?? 'secret-token-refresh',
};

export default config;
