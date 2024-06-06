export function splitArray<T>(array: T[], size: number): T[][] {
    const newArray: T[][] = [];

    for (let i = 0; i < array.length; i += size) {
      const chunk = array.slice(i, i + size);
      newArray.push(chunk);
    }
    
    return newArray;
}