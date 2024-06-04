import { APIGatewayProxyHandler } from 'aws-lambda';
import { externalApiToEmbedding } from './domains/externalApiToEmbedding';
import { simpleToEmbedding } from './domains/simpleToEmbedding';

export const searchEngineClinic: any = async (event: any, _context: any) => {
  const { type, organizationName, firstName, lastName } = event.queryStringParameters;
  let response = [];

  if (type === 'EE') {
    response = await externalApiToEmbedding({organizationName});
  }

  if (type === 'SE') {
    response = await simpleToEmbedding({organizationName});
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Succesful search',
      input: response,
    }),
  };
};