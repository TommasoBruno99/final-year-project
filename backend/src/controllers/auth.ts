import { NextFunction, Request, Response } from "express";
import User from "../models/user";
import AuthService from "../services/auth";

interface IAuthController {
  signUpController: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>;
  loginController: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>;
}
class AuthController implements IAuthController {
  signUpController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const newUser: User = req.body;

    try {
      const [result, data] = await AuthService.signUpService(newUser);

      if (!result) {
        throw new Error(data as string);
      } else {
        res.json({
          data: {
            action: "Creating new user",
            success: result,
          },
        });
      }
    } catch (error) {
      next(error);
    }
  };

  loginController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const logUser: User = req.body;

    try {
      const [result, data] = await AuthService.loginService(logUser);

      if (!result) {
        throw new Error(data as string);
      } else {
        res.json({
          data: {
            action: "Log with existing user",
            sucess: result,
            result: data,
          },
        });
      }
    } catch (error) {
      next(error);
    }
  };
}

export default new AuthController();
