import { Router } from "express";
import { API_ENDPOINTS } from "../constants/routes";
import { loginController, signUpController } from "../controllers";
import { filterRegister, filterLogin } from "../middlewares/filtersData";
import { tokenVerify } from "../middlewares/tokenVerify";

const authRouter: Router = Router();

authRouter.post(API_ENDPOINTS.REGISTER, filterRegister, signUpController);
authRouter.post(API_ENDPOINTS.LOGIN, filterLogin, loginController);
authRouter.post(API_ENDPOINTS.VERIFY, tokenVerify);

export default authRouter;
