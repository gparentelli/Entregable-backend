import { IRepo } from "../models/repos.interface"; 
import { Repo } from "../schemas/repo.schemas"; 
import { ErrorHandler } from "../handlers/error.handler";

export const createRepoStorage = async (repo: IRepo) => {
    const newRepo = new Repo(repo);
    try {
        await newRepo.save();
        return newRepo;
    } catch (err) {
        return new ErrorHandler(500, "Error al crear repositorio");
    }
};

export const getRepoStorage = async (filter:any, sort:any) => {
    try {
        const repos = await Repo.find(filter).sort(sort);
        return repos;
    } catch (err) {
        return new ErrorHandler(500, "Error al obtener repositorios");
    }
};

export const updateRepoStorage = async(id:string, repo:Partial<IRepo>)=>{
    try {
        const updateRepo: IRepo= await Repo.findByIdAndUpdate(id,repo, {new: true})
        return updateRepo
    } catch (error) {
        return new ErrorHandler(500, "Error al actualizar repositorio")
    }
}

export const deleteRepoStorage = async(id:string)=>{

    try {
        const deleteRepo = await Repo.findByIdAndDelete(id)
        return deleteRepo
    } catch (error){
        return new ErrorHandler(500, "Error al eliminar repositorio")

    }
};