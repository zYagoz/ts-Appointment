import { Doctors, SpecialtyDoctor } from "../../generated/prisma/index.js";
import { prisma } from "../../database/index.js";
import { CreateDoctorsAttributes, DoctorsReposityors } from '../DoctorsRepository.js';

export class PrismaDoctorsRepository implements DoctorsReposityors {
    find(): Promise<Doctors[]> {
        return prisma.doctors.findMany()
    }

    findById(id: number): Promise<Doctors> {
        return prisma.doctors.findUnique({ where: id })
    }

    create(attributes: CreateDoctorsAttributes): Promise<Doctors> {
        return prisma.doctors.create({ data: attributes })
    }

    async updateById(id: number, attributes: Partial<CreateDoctorsAttributes>): Promise<Doctors | null> {
        const existDoctor = await prisma.doctors.findUnique({ where: id })

        if (!existDoctor) return null

        return prisma.doctors.update({
            where: id,
            data: attributes
        })
    }

    async delete(id: number): Promise<Doctors | null> {
        const existDoctor = await prisma.doctors.findUnique({ where: id })

        if (!existDoctor) return null

        return prisma.doctors.delete({where: id})

    }

}