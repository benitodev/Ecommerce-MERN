import config from '../config';
import { connect } from 'mongoose';

const { DB_URI, DB_NAME } = config;
const dbConnect = async () => {
  const DB = DB_URI + DB_NAME;
  console.log(DB);
  await connect(DB);
};

export default dbConnect;
