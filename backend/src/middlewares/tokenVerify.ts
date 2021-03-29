import { Request, Response, NextFunction } from "express";
import jweb from "jsonwebtoken";
import { User } from "../utils/interfaces/auth";

export const tokenVerify = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const token = req.headers.authentication;

  if (!token) next(new Error("Unable to verify"));
  else {
    try {
      const isVerified = await jweb.verify(
        token as string,
        process.env.JSON_TOKEN as jweb.Secret
      );

      const id = parseInt(req.params.id);

      // Check if id sent as params is the same as the token decoded

      if (isVerified) {
        const decoded = (await jweb.decode(token as string)) as User;
        if (decoded.id === id) next();
        else throw new Error("Unable to verify");
      } else throw new Error("Unable to verify");
    } catch (e) {
      next(new Error(e.message));
    }
  }
};
