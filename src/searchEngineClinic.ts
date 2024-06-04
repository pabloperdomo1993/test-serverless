import { APIGatewayProxyHandler } from 'aws-lambda';
import { externalApiToEmbedding } from './domains/externalApiToEmbedding';

export const searchEngineClinic: any = async (event: any, _context: any) => {
  const { type, organizationName, firstName, lastName } = event.queryStringParameters;
  let response = [];

  if (type === 'SE') {
    response = await externalApiToEmbedding({organizationName});
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Succesful search',
      input: response,
    }),
  };
};