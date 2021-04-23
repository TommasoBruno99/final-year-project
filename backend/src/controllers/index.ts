import { loginController } from "./auth/login.controller";
import { signUpController } from "./auth/signup.controller";
import { getSchedulesOfUserController } from "./schedules/scheduleByUser.controller";
import { createScheduleController } from "./schedules/createSchedule.controller";
import { verifyController } from "./auth/verify.controller";
import { updateScheduleStatusController } from "./schedules/updateScheduleStatus.controller";
import { getAllSchedulesController } from "./schedules/getAllSchedule.controller";

export {
  loginController,
  signUpController,
  getSchedulesOfUserController,
  createScheduleController,
  updateScheduleStatusController,
  getAllSchedulesController,
  verifyController,
};
