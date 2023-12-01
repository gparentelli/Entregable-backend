import { NextFunction, Request, Response } from "express";
import { ErrorHandler } from "../handlers/error.handler";
import { ResponseHandler } from "../handlers/response.handler";
import { IUser } from "../models/user.interface";
import { createUserService, getUserService } from "../services/user.service";


export const getUser = async (
    req: Request,
    _res: Response,
    next: NextFunction
    ) => {

        const query = req.query;
        const users = await getUserService(query);
        if(users instanceof ErrorHandler){
            next(users);
        }


    if(!users){
        next(new ErrorHandler(404, "No se han encontrado usuarios"));
    }

    const result = {
        users
    };
    next(new ResponseHandler(200, result, "Usuarios encontrados"));
}


export const createUser = async (
    req: Request,
    _res: Response,
    next: NextFunction
    ) => {
        const user: IUser = req.body

        const newUser = await createUserService(user);
        if (newUser instanceof ErrorHandler){
            next(newUser);
        }
        next(new ResponseHandler(201, newUser, "Usuario creado"));
    }