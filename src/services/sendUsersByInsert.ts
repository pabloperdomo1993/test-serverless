import { createEmbedding } from '../models/embedding';
import { connection } from '../database/connection';

export async function sendUsersByInsert(data: any): Promise<any> {
  for (let item of data) {
    item.nameData = await createEmbedding(item.name);
  }

  const paramsSave = {
    type: 'save',
    entity: 'Search',
    modelSave: data
  };

  await connection(paramsSave);
}