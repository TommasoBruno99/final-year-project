import { Router } from 'express';
import * as ROUTES from '../constants/routes';
import AuthController from '../controllers/auth';

const authRouter: Router = Router();

authRouter.post(ROUTES.REGISTER, AuthController.signUpController);
authRouter.post(ROUTES.LOGIN, AuthController.loginController);

export default authRouter;