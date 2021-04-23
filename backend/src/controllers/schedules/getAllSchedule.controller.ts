import { Request, Response, NextFunction } from "express";
import { getAllSchedulesService } from "../../services/schedules/getAllSchedules.service";

export const getAllSchedulesController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const team_id = req.params.team;
  try {
    const result = await getAllSchedulesService(parseInt(team_id));

    if (result.success) res.json(result);
    else throw new Error(result.error);
  } catch (e) {
    res.status(403);
    next(e.message);
  }
};
