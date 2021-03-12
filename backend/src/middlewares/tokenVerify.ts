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
      const payload = await jweb.verify(
        token as string,
        process.env.JSON_TOKEN as jweb.Secret
      );

      res.json({
        success: true,
        action: "Verifying token",
        data: {
          user: payload,
        },
      });
    } catch (e) {
      next(new Error("Unable to verify"));
    }
  }
};
