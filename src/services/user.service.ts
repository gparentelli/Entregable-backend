import { IUser } from "../models/user.interface";
import { createUserStorage, getUserStorage } from "../storage/user.storage";

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
        sort[sortArray[0]] = sortArray[1];
    }

    const users = await getUserStorage(filter, sort);
    return users;
}