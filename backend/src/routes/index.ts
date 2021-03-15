import { Router } from "express";
import * as errorMiddleware from "../middlewares/errorHandling";
import { API_VERSION } from "../constants/routes";
import authRouter from "./auth";
import schedulesRouter from "./schedules";

const mainRouter: Router = Router();

mainRouter.use(API_VERSION + "/auth", authRouter);
mainRouter.use(API_VERSION + "/schedules", schedulesRouter);

mainRouter.use(errorMiddleware.notFound);
mainRouter.use(errorMiddleware.errorHandling);

export default mainRouter;
