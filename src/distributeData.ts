import { APIGatewayProxyHandler } from 'aws-lambda';
import { secrects } from './utils/secrets';
import { post } from './services/externalApi';
import { sqsSendMessage } from './utils/sqs';
import { logger } from './utils/logger';

export const distributeData: any = async (event: any, _context: any) => {
  const data = JSON.parse(event.Records[0].body);
  
  for (let item of data) {
    const message = item;
    const params = {
      MessageBody: JSON.stringify(message),
      QueueUrl: 'https://sqs.us-east-2.amazonaws.com/943766074476/user_update',
    };

    logger.info(`${JSON.stringify(params)}`)
    await sqsSendMessage(params);
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Succesful reference',
      input: 'response',
    }),
  };
};