import { NextFunction, Request, Response } from "express";
import { User } from "../../interfaces/auth";
import { signUpService } from "../../services";

export const signUpController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const newUser: User = req.body;

  try {
    const result = await signUpService(newUser);

    if (!result.success) {
      throw new Error(result.error);
    } else {
      res.json({
        data: {
          action: "Creating new user",
          success: true,
        },
      });
    }
  } catch (error) {
    res.status(400);
    next(error);
  }
};
