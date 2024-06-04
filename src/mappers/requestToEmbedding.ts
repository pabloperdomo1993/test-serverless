import { createEmbedding } from "./../models/embedding";

export async function requestToEmbedding(data: any): Promise<any> {
    let reference = '';

    if (data.organizationName) {
        reference = data.organizationName;
    } else {
        reference = data.firstName ?? '' + ' ' + data.lastName ?? '';
    }
    
    const embedding = await createEmbedding(reference);
     
    return embedding;
}