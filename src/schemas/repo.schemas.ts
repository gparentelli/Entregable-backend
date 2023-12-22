import { IRepo } from "../models/repos.interface";
import { model, Schema } from "mongoose";

const repoSchemas = new Schema<IRepo>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  score: { type: Number, required: true },
});

export const Repo = model<IRepo>("Repo", repoSchemas);
