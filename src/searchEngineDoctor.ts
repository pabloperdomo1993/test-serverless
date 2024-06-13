import { APIGatewayProxyHandler } from 'aws-lambda';
import { externalApiToEmbedding } from './domains/externalApiToEmbedding';
import { simpleToEmbedding } from './domains/simpleToEmbedding';
import { sendResponse } from './utils/sendResponse';
import { logger } from './utils/logger';

export const searchEngineDoctor: any = async (event: any, _context: any) => {
  const { type, firstName, lastName } = event.queryStringParameters;

  try {
    let response = [];
    if (type === 'EE') {
      response = await externalApiToEmbedding({ firstName, lastName });
    }

    if (type === 'SE') {
      response = await simpleToEmbedding({ firstName, lastName });
    }

    return await sendResponse(200, response, 'Succesful search');
  } catch (error) {
    logger.error(`${JSON.stringify(error)}`);

    return await sendResponse(400, error.message, 'Error');
  }
};