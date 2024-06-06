import { APIGatewayProxyHandler } from 'aws-lambda';
import { secrects } from './utils/secrets';
import connectiondb from './database/data-source';
import { requestToApi } from './mappers/requestToApi';
import { post } from './services/externalApi';
import { requestToModel } from './mappers/responseToModel';
import { sendUsersByInsert } from './services/sendUsersByInsert';

export const userSave: any = async (event: any, _context: any) => {
  const dataModel: any = JSON.parse(event.Records[0].body);

  await connectiondb.initialize();
  const respository = connectiondb.getRepository('Search');

  const body = requestToApi(dataModel);

  const urlExternalApi = await secrects('URL_EXTERNAL_API');
  const response: any = await post(urlExternalApi + '/search', body, {})
  const model = requestToModel(response);


  const numbers = model.map((user: any) => user.number);

  const existingUsers = await respository.find({
    where: numbers.map((number: any) => ({ number })),
    select: ['number'],
  });

  const newUsers = model.filter((user: any) =>
    !existingUsers.some(existingUser => existingUser.number === user.number)
  );

  const responseSave = await respository.save(newUsers);

  await connectiondb.destroy();

  await sendUsersByInsert(responseSave);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Succesful reference',
      input: 'response',
    }),
  };
};