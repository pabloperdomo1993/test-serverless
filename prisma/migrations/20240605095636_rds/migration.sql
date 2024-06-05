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

-- CreateIndex
CREATE UNIQUE INDEX "User_number_key" ON "User"("number");
