import express, { Application, json } from 'express';
import cors from 'cors';
import 'dotenv/config';
import routes from './utils/routes.utils';
import db from './database/connect.db';
import { version } from '../package.json';
const PORT = process.env.PORT || 3001;

const routeContainer = (app: Application) => () => routes(app);

const app: Application = express();

const versionApi = version.charAt(0);
app.use(cors());
app.use(json());

// app.use(`/v${versionApi}`, routeContainer(app));
routes(app);
db()
  .then(() => console.log('db connected'))
  .catch((error) => console.log('connection error' + error));
app.listen(PORT, () => console.log('listening on port: ' + PORT));
