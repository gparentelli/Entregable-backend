
import { NextFunction, Request, Response } from "express";
import { checkSchema, validationResult } from "express-validator";
import { ErrorHandler } from "../handlers/error.handler";


export const createRepoMiddleware = async (
    req: Request,
    _res: Response,
    next: NextFunction,
) => {
    await checkSchema({
        name: {
            in: ["body"],
            isString: true,
            errorMessage: "El nombre es requerido",
        },

        description: {
            in: ["body"],
            isString: true,
            errorMessage: "La descripcion es requerida",
        },

        stars: {
            in: ["body"],
            isNumeric: true,
            errorMessage: "Las estrellas son requeridas",
        },
    }).run(req);

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        next(new ErrorHandler(400, errors.array()));
    }

    next();
}