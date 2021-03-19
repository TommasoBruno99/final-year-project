import { Request, Response, NextFunction } from "express";
import { createScheduleService } from "../../services";
import { Schedule } from "../../utils/interfaces/schedules";

export const createScheduleController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user_id: number = req.body.user_id;
    const schedule: Schedule = req.body.schedule;

    const result = await createScheduleService(user_id, schedule);

    if (result.success) res.json(result);
    else throw new Error(result.error);
  } catch (e) {
    res.status(403);
    next(e.message);
  }
};
