import { ClinicRequest } from '../interfaces/clinicRequest.interface';
import { requestToEmbedding } from '../mappers/requestToEmbedding';
import { embeddingComparison } from '../models/embeddingComparison';
import { DoctorRequest } from '../interfaces/doctorRequest.interface';
import { dataSource } from '../database/data-source';

export async function simpleToEmbedding(data: ClinicRequest | DoctorRequest): Promise<any> {
  try {
    const connectiondb = await dataSource();
    await connectiondb.initialize();
    const repository = connectiondb.getRepository('Search');
    
    const reference = await requestToEmbedding(data);
    const dataUser = await repository.find();

    const similarityFilter = 0.7;
    const dataEmbedding = embeddingComparison(reference, dataUser, similarityFilter);

    return dataEmbedding;
  } catch (error: any) {
    throw new Error(`Error: ${error.message}`);
  }
}