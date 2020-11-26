import { Router } from 'express';
import AuthService from '../services/auth';

const authRouter: Router = Router();

authRouter.get('/', AuthService.loginService);


export default authRouter;