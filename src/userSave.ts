import { APIGatewayProxyHandler } from 'aws-lambda';
import { secrects } from './utils/secrets';
import { requestToApi } from './mappers/requestToApi';
import { post } from './services/externalApi';
import { requestToModel } from './mappers/responseToModel';
import { sendUsersByInsert } from './services/sendUsersByInsert';
import { connection } from './database/connection';
import { sendResponse } from './utils/sendResponse';
import { logger } from './utils/logger';

export const userSave: any = async (event: any, _context: any) => {

  try {
    const dataModel: any = JSON.parse(event.Records[0].body);

    const body = requestToApi(dataModel);
  
    const urlExternalApi = await secrects('URL_EXTERNAL_API');
    const response: any = await post(urlExternalApi + '/search', body, {})

    const model = requestToModel(response);
  
    const numbers = model.map((user: any) => user.number);
    
    const paramsSearch = {
      type: 'findQuery',
      entity: 'Search',
      query: {
        where: numbers.map((number: any) => ({ number })),
        select: ['number'],
      }
    };

    const existingUsers = await connection(paramsSearch);

    const newUsers = model.filter((user: any) =>
      !existingUsers.some(existingUser => existingUser.number === user.number)
    );
    
    const paramsSave = {
      type: 'save',
      entity: 'Search',
      modelSave: newUsers
    };

    const responseSave = await connection(paramsSave);

    await sendUsersByInsert(responseSave);

    return await sendResponse(200, {}, 'Succesful search');
  } catch (error) {
    logger.error(`${JSON.stringify(error)}`);

    return await sendResponse(400, error.message, 'Error');
  }
};