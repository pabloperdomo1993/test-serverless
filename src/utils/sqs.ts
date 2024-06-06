import { SQS } from 'aws-sdk';

export async function sqsSendMessage(params: any): Promise<any> {
    const sqs = new SQS();
    await sqs.sendMessage(params).promise();
}