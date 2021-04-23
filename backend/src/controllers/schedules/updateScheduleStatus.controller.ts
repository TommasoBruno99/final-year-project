import { Request, Response, NextFunction } from "express";
import { updateScheduleStatusService } from "../../services/schedules/updateStatusSchedule.service";

export const updateScheduleStatusController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { schedule_id, status } = req.body;

    console.log(req.body);

    const result = await updateScheduleStatusService(schedule_id, status);

    if (result.success) res.json(result);
    else throw new Error(result.error);
  } catch (e) {
    res.status(403);
    next(e.message);
  }
};
