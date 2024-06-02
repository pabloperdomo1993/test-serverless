import { APIGatewayProxyHandler } from 'aws-lambda';

export const hello: any = async (event: any, _context: any) => {
  console.log('......', event)  

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello, world!',
      input: event,
    }),
  };
};