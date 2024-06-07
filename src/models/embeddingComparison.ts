export function embeddingComparison(reference: any, data: any, filter: number): any {
    const newData = data.map((item: any) => {
        const val = cosineSimilarity(item.nameData, reference);

        delete item.nameData;

        return {
            distance: val,
            ...item
        }
    });

    const filterData = newData.filter((item: any) => item.distance > filter);

    filterData.sort((a, b) => b.distance - a.distance);

    return filterData;
}

function cosineSimilarity(vector1: any, vector2: any): any {
    if (vector1.legth !== vector2.legth) return 0;

    const dotProduct = vector1.reduce((acc: number, val: number, i: number) => acc + (val * vector2[i]), 0);

    const norm1 = Math.sqrt(vector1.reduce((acc: number, val: number) => acc + (val * val), 0));
    const norm2 = Math.sqrt(vector2.reduce((acc: number, val: number) => acc + (val * val), 0));

    const similarity = dotProduct / (norm1 * norm2);

    return similarity;
}