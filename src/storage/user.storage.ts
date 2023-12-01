import { IUser } from "../models/user.interface";
import { User } from "../schemas/user.schema";
import { ErrorHandler } from "../handlers/error.handler";

export const createUserStorage = async (user: IUser) => {
    const newUser = new User(user);
    try {
        await newUser.save();
        return newUser;
    } catch (err) {
        return new ErrorHandler(500, "Error al crear usuario");
    }
};

export const getUserStorage = async (filter:any, sort:any) => {
    try {
        const users = await User.find(filter).sort(sort);
        return users;
    } catch (err) {
        return new ErrorHandler(500, "Error al obtener usuarios");
    }
}