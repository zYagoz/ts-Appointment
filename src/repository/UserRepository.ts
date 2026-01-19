import {Users} from "../generated/prisma/index.js";

export interface UserRepository{
    find: () => Promise<Users[]>
}