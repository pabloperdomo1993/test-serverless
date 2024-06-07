import { Lambda } from 'aws-sdk'

export async function connection(params: any): Promise<any> {
    const lambda = new Lambda();

    const payload = {
        type: params.type, 
        entity: params.entity, 
        where: params.where ? params.where: {},
        query: params.query ? params.query: {},
        modelSave: params.modelSave ? params.modelSave : {}
    };

    const body = {
        FunctionName: 'back-end-dev-dbAccess',
        Payload: JSON.stringify(payload)
    };

    const result: any = await lambda.invoke(body).promise();
    const connection = JSON.parse((JSON.parse(result.Payload)).body);

    return connection.input;
}