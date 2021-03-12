import { NextFunction, Request, Response } from "express";
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

export interface RegisterUser {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  is_admin?: boolean;
  password: string;
  last_login?: Date;
}

export interface LoginUser {
  email: string;
  password: string;
}

class AuthController implements IAuthController {
  signUpController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const newUser: RegisterUser = req.body;

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
    const logUser: LoginUser = req.body;

    try {
      const [result, data] = await AuthService.loginService(logUser);

      if (!result) {
        throw new Error(data as string);
      } else {
        res.json({
          data: {
            action: "Log with existing user",
            sucess: result,
            access_token: data,
          },
        });
      }
    } catch (error) {
      next(error);
    }
  };
}

export default new AuthController();
