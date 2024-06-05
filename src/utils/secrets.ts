import { SecretsManager } from 'aws-sdk';

export async function secrects(SecretId: string): Promise<any> {
    const secrects = new SecretsManager();

    const secrectResponse: any = await secrects.getSecretValue({ SecretId: SecretId }).promise();
    const value = JSON.parse(secrectResponse.SecretString);

    return value[`${SecretId}`];
}