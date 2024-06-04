/*
  Warnings:

  - You are about to drop the `Embedding` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Embedding";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "number" TEXT NOT NULL,
    "enumerationType" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "countryCode" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "taxonomyDesc" TEXT NOT NULL,
    "nameData" JSON,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
