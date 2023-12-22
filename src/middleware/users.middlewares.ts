import { NextFunction, Request, Response } from "express";
import { check, checkSchema, validationResult } from "express-validator";
import { ErrorHandler } from "../handlers/error.handler";
import { error } from "console";

export const createUserMiddleware = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  await checkSchema({
    id: {
      in: ["body"],
      isNumeric: true,
      errorMessage: "El id es requerido",
    },
    name: {
      in: ["body"],
      isString: true,
      errorMessage: "El nombre es requerido",
    },
    avatar_url: {
      in: ["body"],
      isString: true,
      errorMessage: "El el avatar es requerido",
    },
    repos_url: {
      in: ["body"],
      isString: true,
      errorMessage: "El repositorio es requerido",
    },
  }).run(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    next(new ErrorHandler(400, errors.array()));
  }

  next();
};
