import { NextFunction, Request, Response } from "express";
import { ErrorHandler } from "../handlers/error.handler";
import { ResponseHandler } from "../handlers/response.handler";

const users = [
    {login: 'gparentelli',
    id: '2568415',
    location: 'montevideo',
    public_repos: '5'}
]

export const getUser = (
    _req: Request,
    _res: Response,
    next: NextFunction
    ) => {
    const result = {
        users
    };
    next(new ResponseHandler(200, result, "Usuarios encontrados"));
}
