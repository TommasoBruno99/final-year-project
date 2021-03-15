import { Request, Response, NextFunction } from "express";
import { getScheduleOfUser } from "../../services";

export const getSchedulesOfUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user_id = parseInt(req.params.id);
    const result = await getScheduleOfUser(user_id);

    res.json(result);
  } catch (e) {
    next(e.message);
  }
};
