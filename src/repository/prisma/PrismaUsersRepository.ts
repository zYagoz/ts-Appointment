import { CreateUserAttributes, UserRepository } from "../UsersRepository.js";
import { Users } from "../../generated/prisma/index.js";
import { prisma } from "../../database/index.js";

export class PrismaUsersRepository implements UserRepository {
    find(): Promise<Users[]> {
        return prisma.users.findaMany();
    }

    findById(id: number): Promise<Users> {
        return prisma.users.findaUnique({where: id})
    }

    create(attributes: CreateUserAttributes): Promise<Users> {
        return prisma.users.create({data: attributes})
    }

    async updateById(id: number, attributes: Partial<CreateUserAttributes>): Promise<Users | null> {
        const existUser = await prisma.users.findUnique({where: id})

        if(!existUser) return null
        
        return prisma.users.update({where: id, data: attributes})
    }
    
    async delete(id: number): Promise<Users | null> {
        const existUser = await prisma.users.findUnique({where: id})
    
        if(!existUser) return null

        return prisma.users.delete({where: id})
    }

}