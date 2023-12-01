import { IUser } from "../models/user.interface";
import { model, Schema } from "mongoose";

const userSchema = new Schema<IUser>({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    avatar_url: { type: String, required: true },
    repos_url: { type: String, required: true },
    description: { type: String, required: true },
});

export const User = model<IUser>("User", userSchema);

