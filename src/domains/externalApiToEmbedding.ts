import { ClinicRequest } from '../interfaces/clinicRequest.interface';
import { DoctorRequest } from '../interfaces/doctorRequest.interface';
import { requestToEmbedding } from './../mappers/requestToEmbedding';
import { embeddingComparison } from './../models/embeddingComparison';
import { secrects } from '../utils/secrets';
import { sqsSendMessage } from '../utils/sqs';
import { filterInput } from '../utils/filterInput';
import { logger } from '../utils/logger';
import { connection } from '../database/connection';

export async function externalApiToEmbedding(data: ClinicRequest | DoctorRequest): Promise<any> {
  try {
    const dataModel = {
      organizationName: filterInput(data.organizationName),
      firstName: filterInput(data.firstName),
      lastName: filterInput(data.lastName)
    };

    logger.info(`Data model: ${JSON.stringify(dataModel)}`);

    const params = {
      MessageBody: JSON.stringify(dataModel),
      QueueUrl: 'https://sqs.us-east-2.amazonaws.com/943766074476/user_save',
    };

    await sqsSendMessage(params);

    const reference = await requestToEmbedding(dataModel);

    const similarityFilter = 0.5;
    const paramsSearch = {
      type: 'find',
      entity: 'Search'
    };

    const dataUser = await connection(paramsSearch);

    logger.info(`Reference comparison: ${JSON.stringify(dataModel)}`);
    logger.info(`Reference data User: ${JSON.stringify(dataModel)}`);

    const dataEmbedding = embeddingComparison(reference, dataUser, similarityFilter);

    logger.info(`Embedding: ${JSON.stringify(dataModel)}`);

    return dataEmbedding;

  } catch (error: any) {
    logger.error(`${JSON.stringify(error)}`);

    throw new Error(`${error.message}`);
  }
}
