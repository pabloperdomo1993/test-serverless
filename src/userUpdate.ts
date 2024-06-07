import { APIGatewayProxyHandler } from 'aws-lambda';
import { secrects } from './utils/secrets';
import connectiondb from './database/data-source';
import { createEmbedding } from './models/embedding';
import { connection } from './database/connection';
import { logger } from './utils/logger';

export const userUpdate: any = async (event: any, _context: any) => {
  try {
    const data: any = JSON.parse(event.Records[0].body);
  
    const paramsSearch = {
      type: 'findOneBy',
      entity: 'Search',
      query: {id: data.id }
    };
  
    const user: any = await connection(paramsSearch);
    user.nameData = await createEmbedding(user.name);
  
  
    const paramsSave = {
      type: 'save',
      entity: 'Search',
      modelSave: user
    };
  
    await connection(paramsSave);
  
    await connectiondb.destroy();
    
  } catch (error) {
    logger.error(`${JSON.stringify(error)}`)
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Succesful reference',
      input: 'response',
    }),
  };
};