import type { Appointment } from "../generated/prisma/index.js";

export type AppointmentStatus = "scheduled" | "canceled" | "rescheduled";

export interface AppointmentWhereParams {
    status?: AppointmentStatus
    userId?: number
    doctorId?: number
    startAt?: {
        after?: Date,
        before?: Date
        equals?: Date
    }
}

export interface FindAppointmentsParams {
    where?: AppointmentWhereParams
    sortBy?: "startAt" | 'status'
    order?: 'asc' | 'desc'
    limit?: number
    offset?: number
    includes?: {
        doctor?: boolean
        user?: boolean
    }
}

export interface CreateAppointmenteAttributes {
    startAt: Date
    userId: number
    doctorId: number
}

export interface AppointmentRepository {
    find: (params: FindAppointmentsParams) => Promise<Appointment[]>
    findById: (id: number) => Promise<Appointment>
    count: (where: AppointmentWhereParams) => Promise<number>
    create: (attributes: CreateAppointmenteAttributes) => Promise<Appointment>
    updateById: (id: number, attributes: Partial<CreateAppointmenteAttributes>) => Promise<Appointment | null>
    deleteById: (id: number) => Promise<Appointment | null> 
}