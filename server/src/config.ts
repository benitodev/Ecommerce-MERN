import 'dotenv/config';

const config = {
  //db config
  DB_URI: process.env.DB_URI ?? 'mongodb://0.0.0.0:27017/',
  DB_NAME: process.env.DB_NAME ?? 'eCommerce',

  JWT_SECRET: process.env.JWT_SECRET ?? 'secret-token',
};

export default config;
