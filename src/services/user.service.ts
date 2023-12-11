import { ErrorHandler } from "../handlers/error.handler";
import { IUser } from "../models/user.interface";
import { User } from "../schemas/user.schema";
import { createUserStorage, getUserStorage, updateUserStorage, deleteUserStorage } from "../storage/user.storage";

export const createUserService = async (user: IUser) => {
    const newUser = await createUserStorage(user);
    return newUser;
}

export const getUserService = async (query: any) => {
    const filter = {};
    if(query.id) filter["id"] = query.id;
    if(query.name) filter["name"] = query.name;
    if(query.avatar_url) filter["avatar_url"] = query.avatar_url;
    if(query.repos_url) filter["repos_url"] = query.repos_url;
    if(query.description) filter["description"] = query.description;
    
    const sort = {
    };

    if(query.sort){
        const sortArray = query.sort.split(":");
        if(sortArray.lenght !==2){
            return new ErrorHandler(400, "Ordenamiento incorrecto");
        }
        if(sortArray[1] !== "asc" && sortArray[1] !== "desc"){
            return new ErrorHandler(400, "Ordenamiento incorrecto");
        }
        sort[sortArray[0]] = sortArray[1];
    }

    const users = await getUserStorage(filter, sort);
    return users;
}

export const updateUserService = async (id:string, user: Partial<IUser>) => {
    const updateUser = await updateUserStorage(id,user)
    return updateUser
}

export const deleteUserService = async (id:string) =>{
    const user = await deleteUserStorage(id)

    return user
}