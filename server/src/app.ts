import express, { json } from 'express';
import cors from 'cors';
import 'dotenv/config';
import routes from './utils/routes.utils';
import db from './database/connect.db';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(json());
routes(app);
db()
  .then(() => console.log('db connected'))
  .catch((error) => console.log('connection error' + error));
app.listen(PORT, () => console.log('listening on port: ' + PORT));
