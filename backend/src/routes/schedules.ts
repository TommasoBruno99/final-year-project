import { Router } from "express";
import { API_ENDPOINTS } from "../constants/routes";
import {
  createScheduleController,
  getSchedulesOfUserController,
} from "../controllers";
import { getAllSchedulesController } from "../controllers/schedules/getAllSchedule.controller";
import { tokenVerify } from "../middlewares/tokenVerify";

const scheduleRouter: Router = Router();

scheduleRouter.get(
  API_ENDPOINTS.GET_SCHEDULES_BY_USER,
  tokenVerify,
  getSchedulesOfUserController
);
scheduleRouter.get(
  API_ENDPOINTS.GET_ALL_SCHEDULES,
  tokenVerify,
  getAllSchedulesController
);
scheduleRouter.post(
  API_ENDPOINTS.ADD_SCHEDULE,
  tokenVerify,
  createScheduleController
);

export default scheduleRouter;
