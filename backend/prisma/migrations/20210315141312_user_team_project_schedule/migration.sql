/*
  Warnings:

  - Added the required column `startingMonth` to the `schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startingYear` to the `schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endingMonth` to the `schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endingYear` to the `schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reason` to the `schedule` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `startingDay` on the `schedule` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `endingDay` on the `schedule` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Seniority" AS ENUM ('JUNIOR', 'SENIOR');

-- AlterTable
ALTER TABLE "schedule" ADD COLUMN     "startingMonth" INTEGER NOT NULL,
ADD COLUMN     "startingYear" INTEGER NOT NULL,
ADD COLUMN     "endingMonth" INTEGER NOT NULL,
ADD COLUMN     "endingYear" INTEGER NOT NULL,
ADD COLUMN     "reason" VARCHAR(255) NOT NULL,
DROP COLUMN "startingDay",
ADD COLUMN     "startingDay" INTEGER NOT NULL,
DROP COLUMN "endingDay",
ADD COLUMN     "endingDay" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "seniority" "Seniority" NOT NULL DEFAULT E'JUNIOR',
ADD COLUMN     "project_id" INTEGER;

-- CreateTable
CREATE TABLE "project" (
    "id" SERIAL NOT NULL,
    "projectName" VARCHAR(100) NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user" ADD FOREIGN KEY ("project_id") REFERENCES "project"("id") ON DELETE SET NULL ON UPDATE CASCADE;
