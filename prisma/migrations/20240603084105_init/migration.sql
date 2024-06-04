-- CreateTable
CREATE TABLE "Embedding" (
    "id" SERIAL NOT NULL,
    "phrase" TEXT NOT NULL,
    "properties" JSON,

    CONSTRAINT "Embedding_pkey" PRIMARY KEY ("id")
);
