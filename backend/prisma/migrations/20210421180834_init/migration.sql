-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- AlterTable
ALTER TABLE "schedule" ADD COLUMN     "status" "Status" NOT NULL DEFAULT E'PENDING';
