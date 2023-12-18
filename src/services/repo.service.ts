import { ErrorHandler } from "../handlers/error.handler";
import { IRepo } from "../models/repos.interface"; 
import { Repo } from "../schemas/repo.schemas"; 
import { createRepoStorage, getRepoStorage, updateRepoStorage, deleteRepoStorage } from "../storage/repo.storage";

export const createRepoService = async (repo: IRepo) => {
    const newRepo = await createRepoStorage(repo);
    return newRepo;
}

export const getRepoService = async (query: any) => {
    const filter = {};
    if(query.name) filter["name"] = query.name;
    if(query.description) filter["description"] = query.description;
    if(query.stars) filter["stars"] = query.stars;
   
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

    const repos = await getRepoStorage(filter, sort);
    return repos;
};

export const updateRepoService = async (id:string, repo: Partial<IRepo>) => {
    const updateRepo = await updateRepoStorage(id,repo)
    return updateRepo
}

export const deleteRepoService = async (id:string) =>{
    const repo = await deleteRepoStorage(id)

    return repo
}