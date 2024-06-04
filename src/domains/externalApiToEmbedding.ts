import { ClinicRequest } from '../interfaces/clinicRequest.interface';
import { DoctorRequest } from '../interfaces/doctorRequest.interface';
import { post } from '../services/externalApi';
import { requestToApi } from './../mappers/requestToApi';
import { requestToModel } from './../mappers/responseToModel';
import { createEmbedding } from './../models/embedding';
import { PrismaClient } from '@prisma/client';
import { requestToEmbedding } from './../mappers/requestToEmbedding';
import { embeddingComparison } from './../models/embeddingComparison';

export async function externalApiToEmbedding(data: ClinicRequest | DoctorRequest): Promise<any> {
  const prisma = new PrismaClient();

  try {
    const dataModel = {
      organizationName: data.organizationName,
      firstName: data.firstName,
      lastName: data.lastName
    };
    
    const body = requestToApi(dataModel);

    const response: any = await post('https://npiregistry.cms.hhs.gov/RegistryBack/search', body, {})

    const model = requestToModel(response);

    for (let item of model) {
      try {
        await prisma.user.create({ data: item });

        const embedding = await createEmbedding(item.name);

        await prisma.user.update({
          where: { number: item.number },
          data: {
            nameData: embedding
          }
        });
      } catch (error) {
        console.error(error.code);
      }
    }
    
    const reference = await requestToEmbedding(data);
    const dataUser = await prisma.user.findMany();

    const similarityFilter = 0.7;
    const dataEmbedding = embeddingComparison(reference, dataUser, similarityFilter);

    return dataEmbedding;
  } catch (error: any) {
    throw new Error(`Error: ${error.message}`);
  }
}