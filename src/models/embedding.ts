import { post } from './../services/externalApi';

export async function createEmbedding(phrase: string): Promise<any> {
    try {
        const url = 'https://api.api-ninjas.com/v1/embeddings';
        const body = {
            text: phrase
        };
        const headers = {
            'X-Api-Key': '3xbq8mzB7Ts63zhlp2V/RQ==GVnHrcPE0zk1DmLk'
        };

        const response: any = await post(url, body, headers);
        
        return response.embeddings;
    } catch (error: any) {
        throw new Error(`Error: ${error}`);
    }
}