import { APIGatewayProxyHandler } from 'aws-lambda';
import connection from './database/data-source';
import { logger } from './utils/logger';
import { sendResponse } from './utils/sendResponse';

export const dbAccess: any = async (event: any, _context: any) => {
  const { type, entity, modelSave, query } = event;

  let response: any = null;

  try {
    await connection.initialize();

    const repository = connection.getRepository(entity);

    if (type === 'findOneBy') {
      response = await repository.findOneBy(query);
    }

    if (type === 'find') {
      response = await repository.find();
    }

    if (type === 'findQuery') {
      response = await repository.find(query);
    }

    if (type === 'save') {
      response = await repository.save(modelSave);
    }

    await connection.destroy();

    logger.info(`Connected database`);
    return await sendResponse(200, response, 'Succesful search');

  } catch (error) {
    logger.error(`${JSON.stringify(error)}`);

    return await sendResponse(400, error.message, 'Error');
  }
};