import { IRouter, Router } from 'express';
import * as controllers from '../../controllers';
import { TEST_ENDPOINT } from '../../controllers';

const testRoute: IRouter = Router();

testRoute.post(TEST_ENDPOINT.RESET, controllers.resetDatabase);

export default testRoute;
