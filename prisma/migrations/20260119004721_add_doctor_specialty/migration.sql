/*
  Warnings:

  - Added the required column `specialty` to the `Doctors` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "SpecialtyDoctor" AS ENUM ('general_practitioner', 'cardiologist', 'dermatologist', 'endocrinologist', 'gastroenterologist', 'gynecologist', 'neurologist', 'oncologist', 'ophthalmologist', 'orthopedist', 'otolaryngologist', 'pediatrician', 'psychiatrist', 'psychologist', 'pulmonologist', 'rheumatologist', 'urologist');

-- AlterTable
ALTER TABLE "Doctors" ADD COLUMN     "specialty" "SpecialtyDoctor" NOT NULL;
