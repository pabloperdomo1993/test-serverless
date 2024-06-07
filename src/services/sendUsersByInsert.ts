import { splitArray } from '../utils/splitArray';
import { sqsSendMessage } from '../utils/sqs';
import { logger } from '../utils/logger';

export async function sendUsersByInsert(data: any): Promise<any> {
  const groups = splitArray(data, 2);

  for (let item of groups) {
    const message = item;
    const params = {
      MessageBody: JSON.stringify(message),
      QueueUrl: 'https://sqs.us-east-2.amazonaws.com/943766074476/user_distribute',
    };

    logger.info(`${JSON.stringify(params)}`)
    await sqsSendMessage(params);
  }
}