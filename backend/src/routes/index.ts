import { Router } from 'express';
import * as errorMiddleware from '../middlewares/errorHandling';
import { API_VERSION } from '../constants/routes';
import authRouter from './auth';

const mainRouter: Router = Router();

mainRouter.use(API_VERSION + '/auth', authRouter);


mainRouter.use(errorMiddleware.notFound);
mainRouter.use(errorMiddleware.errorHandling);


export default mainRouter;