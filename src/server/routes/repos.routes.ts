import { Router } from "express";
import {
  getRepo,
  createRepo,
  updateRepo,
  deleteRepo,
} from "../../controllers/repos.controller";
import { createRepoMiddleware } from "../../middleware/repos.middlewares";

const reposRouter = Router();

reposRouter.get("/repos", getRepo);
reposRouter.post("/repos",createRepoMiddleware, createRepo );
reposRouter.put("/repos/:id", updateRepo);
reposRouter.delete("/repos/:id", deleteRepo);

export default reposRouter;
