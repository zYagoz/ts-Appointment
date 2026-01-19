import { HttpError } from "../errors/HttpError.js";
import {AppointmentRepository, AppointmentStatus, AppointmentWhereParams} from "../repository/AppointmentRepository.js";

interface GetAppointmentsPaginationParams{
    page?: number
    pageSize?: number
    status?: AppointmentStatus
    startAt?: Date
    sortBy?: "status" | "startAt"
    order?: "asc" | "desc"
}

export class AppointmentService{
    constructor(private readonly appointmentRepository : AppointmentRepository){}

    async getAllAppointmentsPaginated(params: GetAppointmentsPaginationParams){
        const {status, startAt, page = 1, pageSize = 10, sortBy, order} = params
        const limit = pageSize
        const offset = (page - 1) * limit

        const where: AppointmentWhereParams = {};

        if(status) where.status = status;
        if(startAt) where.startAt = {after: startAt}

        const appointments = await this.appointmentRepository.find({
            where,
            sortBy,
            order,
            limit,
            offset
        })

        const total = await this.appointmentRepository.count(where);

        return {
            appointments,
            meta: {
                page,
                pageSize,
                total,
                totalPages: Math.ceil(total/ pageSize)
            }
        }
    }
    
}