import { NextFunction, Response, Request } from "express";
import { User } from "../../interfaces/auth";
import { loginService } from "../../services";

export const loginController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const logUser: User = req.body;

  try {
    const result = await loginService(logUser);

    if (!result.success) {
      throw new Error(result.error);
    } else {
      res.json({
        data: {
          action: "Log with existing user",
          sucess: result,
          result: {
            user: result.user,
            access_token: result.access_token,
          },
        },
      });
    }
  } catch (error) {
    next(error);
  }
};
