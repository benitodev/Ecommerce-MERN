import config from '../config';
import { connect } from 'mongoose';

const { DB_URI, DB_NAME, DB_NAME_TEST } = config;

const DB_NAME_ENVIRONMENT =
  process.env.NODE_ENV === 'test' ? DB_NAME_TEST : DB_NAME;

console.log(DB_NAME_ENVIRONMENT, process.env.NODE_ENV);
const dbConnect = async () => {
  const DB = DB_URI + DB_NAME_ENVIRONMENT;
  console.log(DB);
  await connect(DB);
};

export default dbConnect;
