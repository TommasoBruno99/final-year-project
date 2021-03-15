import { Request, Response, NextFunction } from "express";
import joi from "joi";
import { User } from "../services/auth";

export const filterRegister = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const payload: User = req.body;
  const schema = joi.object({
    email: joi
      .string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "it"] } })
      .required(),

    firstName: joi.string().min(4).max(30).required(),

    lastName: joi.string().min(4).max(40).required(),

    password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{8,}$")).required(),
  });

  try {
    const { error } = await schema.validateAsync(payload);
    if (!error) {
      next();
    } else throw new Error(error.message);
  } catch (error) {
    next(error);
  }
};

export const filterLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const payload: User = req.body;
  const schema = joi.object({
    email: joi
      .string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "it"] } })
      .required(),

    password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{8,}$")).required(),
  });

  try {
    const { error } = await schema.validateAsync(payload);
    if (!error) {
      next();
    } else throw new Error(error.message);
  } catch (error) {
    next(error);
  }
};
