import { Router } from 'express';
import * as errorMiddleware from '../middlewares/errorHandling';
import authRouter from './auth';

const mainRouter: Router = Router();

mainRouter.use('/auth', authRouter);


mainRouter.use(errorMiddleware.notFound);
mainRouter.use(errorMiddleware.errorHandling);


export default mainRouter;