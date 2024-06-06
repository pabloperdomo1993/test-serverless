import { APIGatewayProxyHandler } from 'aws-lambda';
import { secrects } from './utils/secrets';
import connectiondb from './database/data-source';
import { createEmbedding } from './models/embedding';

export const userUpdate: any = async (event: any, _context: any) => {
  const data: any = JSON.parse(event.Records[0].body);

  await connectiondb.initialize();
  const respository = connectiondb.getRepository('Search');

  const user: any = await respository.findOneBy({id: data.id });
  user.nameData = await createEmbedding(user.name);

  await respository.save(user);

  await connectiondb.destroy();

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Succesful reference',
      input: 'response',
    }),
  };
};