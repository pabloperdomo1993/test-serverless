import { APIGatewayProxyHandler } from 'aws-lambda';
import { secrects } from './utils/secrets';
import { post } from './services/externalApi';

export const referenceData: any = async (event: any, _context: any) => {
  const urlExternalApi = await secrects('URL_EXTERNAL_API');

  const response: any = await post(urlExternalApi + '/referenceData', {}, {})

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Succesful reference',
      input: response,
    }),
  };
};