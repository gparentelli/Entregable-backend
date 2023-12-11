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

export const updateUserStorage = async(id:string, user:Partial<IUser>)=>{
    try {
        const updateUser: IUser= await User.findByIdAndUpdate(id,user, {new: true})
        return updateUser
    } catch (error) {
        return new ErrorHandler(500, "Error al actualizar usuario")
    }
}

export const deleteUserStorage = async(id:string)=>{

    try {
        const deleteUser = await User.findByIdAndDelete(id)
        return deleteUser
    } catch (error){
        return new ErrorHandler(500, "Error al eliminar usuario")

    }
}