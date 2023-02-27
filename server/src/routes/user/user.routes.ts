import { Router, IRouter } from 'express';
import * as controllers from '../../controllers';
import { USER_ENDPOINTS } from '../../controllers';
import { validatorSchema } from '../../middlewares/validatorSchema.middleware';
import { registerUserSchema } from '../../schemas';
import { tokenAuthorization } from '../../middlewares/authorization';

const userRoutes: IRouter = Router();

userRoutes.get(USER_ENDPOINTS.GET_USERS, controllers.getUsers);
userRoutes.get(USER_ENDPOINTS.GET_USER, controllers.getUser);

userRoutes.post(
  USER_ENDPOINTS.REGISTER,
  validatorSchema(registerUserSchema),
  controllers.register
);

userRoutes.post(USER_ENDPOINTS.LOGIN, controllers.login);

userRoutes.put(USER_ENDPOINTS.UPDATE_USER, controllers.updateUser);

userRoutes.delete(USER_ENDPOINTS.DELETE, controllers.deleteUser);

userRoutes.post(USER_ENDPOINTS.LOGOUT, tokenAuthorization, controllers.logout);

userRoutes.post(USER_ENDPOINTS.REFRESH_TOKEN, controllers.refreshToken);
export default userRoutes;
