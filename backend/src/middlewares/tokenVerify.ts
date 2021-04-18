import { Request, Response, NextFunction } from "express";
import jweb from "jsonwebtoken";

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

      if (isVerified) {
        next();
      } else throw new Error("Unable to verify");
    } catch (e) {
      res.statusCode = 401;
      next(e);
    }
  }
};
