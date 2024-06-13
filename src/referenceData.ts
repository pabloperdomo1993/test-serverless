import { APIGatewayProxyHandler } from 'aws-lambda';
import { secrets } from './utils/secrets';
import { post } from './services/externalApi';
import { sendResponse } from './utils/sendResponse';
import { logger } from './utils/logger';

export const referenceData: any = async (event: any, _context: any) => {
  try {
    const urlExternalApi = await secrets('URL_EXTERNAL_API');
  
    const response: any = await post(urlExternalApi + '/referenceData', {}, {})
  
    return await sendResponse(200, response, 'Reference data');
  } catch (error) {
    logger.error(`${JSON.stringify(error)}`);

    return await sendResponse(400, error.message, 'Error');
  }
};