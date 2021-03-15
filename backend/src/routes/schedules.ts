import { Router } from "express";
import { API_ENDPOINTS } from "../constants/routes";
import { getSchedulesOfUserController } from "../controllers";
import { tokenVerify } from "../middlewares/tokenVerify";

const scheduleRouter: Router = Router();

scheduleRouter.get(
  API_ENDPOINTS.GET_SCHEDULES_BY_USER,
  getSchedulesOfUserController
);

export default scheduleRouter;
