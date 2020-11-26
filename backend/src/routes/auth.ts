import { Router } from 'express';
import * as ROUTES from '../constants/routes';
import AuthService from '../services/auth';

const authRouter: Router = Router();

authRouter.post(ROUTES.LOGIN, AuthService.loginService);


export default authRouter;