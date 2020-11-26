import { Router } from 'express';
import * as ROUTEs from '../constants/routes';
import AuthService from '../services/auth';

const authRouter: Router = Router();

authRouter.get(ROUTES.LOGIN, AuthService.loginService);


export default authRouter;