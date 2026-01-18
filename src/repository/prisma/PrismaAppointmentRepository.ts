import type { Appointment, AppointmentStatus } from "../../generated/prisma/index.js";
import { prisma } from "../../database/index.js"
import { AppointmentRepository, CreateAppointmenteAttributes } from "../AppointmentRepository.js";


export class PrismaAppointmenteRepository implements AppointmentRepository {
    find(): Promise<Appointment[]> {
        return prisma.appointment.findMany()
    }

    findById(id: number): Promise<Appointment> {
        return prisma.appointment.findUnique({
            where: id,
            includes: {
                user: true
            }
        })
    }

    create(attributes: CreateAppointmenteAttributes): Promise<Appointment> {
        return prisma.appointment.create({ data: attributes })
    }

    async updateById(id: number, attributes: Partial<CreateAppointmenteAttributes>): Promise<Appointment | null> {
        const appointmentExist = await prisma.appointment.findUnique({ where: id });

        if (!appointmentExist) return null

        return prisma.appointment.update({
            where: id,
            data: attributes
        })
    }

    async deleteById(id: number): Promise<Appointment | null> {
        const appointmentExist = await prisma.appointment.findUnique({ where: id });

        if (!appointmentExist) return null

        return prisma.appointment.delete({ where: id })

    }
}