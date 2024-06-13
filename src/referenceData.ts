import { APIGatewayProxyHandler } from 'aws-lambda';
import { secrets } from './utils/secrets';
import { post } from './services/externalApi';

export const referenceData: any = async (event: any, _context: any) => {
  const urlExternalApi = await secrets('URL_EXTERNAL_API');

  const response: any = await post(urlExternalApi + '/referenceData', {}, {})

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Succesful reference',
      input: response,
    }),
  };
};