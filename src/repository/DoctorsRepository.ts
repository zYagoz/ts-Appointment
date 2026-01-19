import { Doctors } from "../generated/prisma/index.js";

export type SpecialtyDoctor =
    | "general_practitioner"
    | "cardiologist"
    | "dermatologist"
    | "endocrinologist"
    | "gastroenterologist"
    | "gynecologist"
    | "neurologist"
    | "oncologist"
    | "ophthalmologist"
    | "orthopedist"
    | "otolaryngologist"
    | "pediatrician"
    | "psychiatrist"
    | "psychologist"
    | "pulmonologist"
    | "rheumatologist"
    | "urologist";
export interface DoctorsWhereParams {
    name?: {
        like?: string,
        equals?: string
        mode?: "default" | "insensitve"
    }
    specialty?: SpecialtyDoctor
    doctorid?: number
}

export interface FindDoctorsParams {
    where?: DoctorsWhereParams
    SortBy?: "name" | "specialty"
    order?: "asc" | "desc"
    limit?: number
    offset?: number
}

export interface CreateDoctorsAttributes {
    name: string
    email: string
    phone: string
    specialty: SpecialtyDoctor
}

export interface DoctorsReposityors {
    find: () => Promise<Doctors[]>
    findById: (id: number) => Promise<Doctors>
    create: (attributes: CreateDoctorsAttributes) => Promise<Doctors>
    updateById: (id: number, attributes: Partial<CreateDoctorsAttributes>) => Promise<Doctors | null>
    delete: (id: number) => Promise<Doctors | null>
}