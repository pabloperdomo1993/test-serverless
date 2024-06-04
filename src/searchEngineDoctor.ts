import { APIGatewayProxyHandler } from 'aws-lambda';
import { externalApiToEmbedding } from './domains/externalApiToEmbedding';
import { simpleToEmbedding } from './domains/simpleToEmbedding';

export const searchEngineDoctor: any = async (event: any, _context: any) => {
  const { type, organizationName, firstName, lastName } = event.queryStringParameters;

  let response = [];

  if (type === 'EE') {
    response = await externalApiToEmbedding({firstName, lastName});
  }

  if (type === 'SE') {
    response = await simpleToEmbedding({firstName, lastName});
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Succesful search',
      input: response,
    }),
  };
};