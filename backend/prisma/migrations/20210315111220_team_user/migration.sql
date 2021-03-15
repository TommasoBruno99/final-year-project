-- AlterTable
ALTER TABLE "user" ADD COLUMN     "team_id" INTEGER;

-- CreateTable
CREATE TABLE "team" (
    "id" SERIAL NOT NULL,
    "teamName" VARCHAR(20) NOT NULL,
    "description" VARCHAR(255),

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user" ADD FOREIGN KEY ("team_id") REFERENCES "team"("id") ON DELETE SET NULL ON UPDATE CASCADE;
