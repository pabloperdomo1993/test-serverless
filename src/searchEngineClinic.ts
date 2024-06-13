import { APIGatewayProxyHandler } from 'aws-lambda';
import { externalApiToEmbedding } from './domains/externalApiToEmbedding';
import { simpleToEmbedding } from './domains/simpleToEmbedding';
import { sendResponse } from './utils/sendResponse';
import { logger } from './utils/logger';

export const searchEngineClinic: any = async (event: any, _context: any) => {
  const { type, organizationName } = event.queryStringParameters;
  let response = [];

  logger.info(`${JSON.stringify(event.queryStringParameters)}`);

  try {
    if (type === 'EE') {
      response = await externalApiToEmbedding({organizationName});
    }
  
    if (type === 'SE') {
      response = await simpleToEmbedding({organizationName});
    }
  
    return await sendResponse(200, response, 'Succesful search');
    
  } catch (error) {
    logger.error(`${JSON.stringify(error)}`);

    return await sendResponse(400, error.message, 'Error');
  }
};