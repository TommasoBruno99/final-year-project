import { Router } from "express";
import * as ROUTES from "../constants/routes";
import AuthController from "../controllers/auth";
import { filterRegister, filterLogin } from "../middlewares/filtersData";
import { tokenVerify } from "../middlewares/tokenVerify";

const authRouter: Router = Router();

authRouter.post(
  ROUTES.REGISTER,
  filterRegister,
  AuthController.signUpController
);
authRouter.post(ROUTES.LOGIN, filterLogin, AuthController.loginController);
authRouter.post(ROUTES.VERIFY, tokenVerify);

export default authRouter;
