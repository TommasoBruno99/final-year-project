import { Request, Response, NextFunction } from "express";
import { getAllSchedulesService } from "../../services/schedules/getAllSchedules.service";

export const getAllSchedulesController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const result = await getAllSchedulesService();

    if (result.success) res.json(result);
    else throw new Error(result.error);
  } catch (e) {
    res.status(403);
    next(e.message);
  }
};
