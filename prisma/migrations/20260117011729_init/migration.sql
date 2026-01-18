-- CreateEnum
CREATE TYPE "AppointmentStatus" AS ENUM ('scheduled', 'canceled', 'rescheduled');

-- CreateTable
CREATE TABLE "Appointment" (
    "id" SERIAL NOT NULL,
    "startAt" TIMESTAMP(3) NOT NULL,
    "status" "AppointmentStatus" NOT NULL DEFAULT 'scheduled',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "doctorId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Appointment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(255) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Doctors" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(255) NOT NULL,

    CONSTRAINT "Doctors_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Appointment_doctorId_startAt_idx" ON "Appointment"("doctorId", "startAt");

-- CreateIndex
CREATE INDEX "Appointment_userId_startAt_idx" ON "Appointment"("userId", "startAt");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Doctors_email_key" ON "Doctors"("email");

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
