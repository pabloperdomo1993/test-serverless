import { ClinicRequest } from '../interfaces/clinicRequest.interface';
import { DoctorRequest } from '../interfaces/doctorRequest.interface';
import { requestToEmbedding } from './../mappers/requestToEmbedding';
import { embeddingComparison } from './../models/embeddingComparison';
import { secrects } from '../utils/secrets';
import connectiondb from '../database/data-source';
import { sqsSendMessage } from '../utils/sqs';

export async function externalApiToEmbedding(data: ClinicRequest | DoctorRequest): Promise<any> {
  try {
    const dataModel = {
      organizationName: data.organizationName,
      firstName: data.firstName,
      lastName: data.lastName
    };

    const params = {
      MessageBody: JSON.stringify(dataModel),
      QueueUrl: 'https://sqs.us-east-2.amazonaws.com/943766074476/user_save',
    };

    await sqsSendMessage(params);

    await connectiondb.initialize();
    const respository = connectiondb.getRepository('Search');

    const reference = await requestToEmbedding(data);

    const similarityFilter = 0.7;
    const dataUser = await respository.find();
    const dataEmbedding = embeddingComparison(reference, dataUser, similarityFilter);

    await connectiondb.destroy();

    return dataEmbedding;
  } catch (error: any) {
    throw new Error(`Error: ${error.message}`);
  }
}
