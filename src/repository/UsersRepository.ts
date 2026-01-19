import {Users} from "../generated/prisma/index.js";

export interface UsersWhereParams{
    name?: {
        equals?: string,
        like?: string,
        mode: "default" | "insensitive"
    }
    phone?: number
    email?: string 
}

export interface FindUsersParams{
    where?: UsersWhereParams
    sortBy?: "name"
    order?: "asc" | "desc"
    limit?: number
    offset?: number
    includes?: {
        appointments?: boolean
    }

}

export interface CreateUserAttributes{
    name: string
    email: string
    phone: string
}

export interface UserRepository{
    find: () => Promise<Users[]>
    findById: (id: number) => Promise<Users>
    create: (attributes: CreateUserAttributes) => Promise<Users>
    updateById: (id: number, attributes: Partial<CreateUserAttributes>) => Promise<Users | null>
    delete: (id: number) => Promise<Users | null>
}