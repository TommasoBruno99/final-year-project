-- CreateTable
CREATE TABLE "schedule" (
    "id" SERIAL NOT NULL,
    "startingDay" TIMESTAMP(3) NOT NULL,
    "endingDay" TIMESTAMP(3) NOT NULL,
    "user_id" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "schedule" ADD FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
