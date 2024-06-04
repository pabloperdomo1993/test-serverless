import { ClinicRequest } from '../interfaces/clinicRequest.interface';
import { PrismaClient } from '@prisma/client';
import { requestToEmbedding } from '../mappers/requestToEmbedding';
import { embeddingComparison } from '../models/embeddingComparison';
import { DoctorRequest } from '../interfaces/doctorRequest.interface';

export async function simpleToEmbedding(data: ClinicRequest | DoctorRequest): Promise<any> {
  const prisma = new PrismaClient();

  try {
    const reference = await requestToEmbedding(data);
    const dataUser = await prisma.user.findMany();

    const similarityFilter = 0.7;
    const dataEmbedding = embeddingComparison(reference, dataUser, similarityFilter);

    return dataEmbedding;
  } catch (error: any) {
    throw new Error(`Error: ${error.message}`);
  }
}