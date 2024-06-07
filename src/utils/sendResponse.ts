export function sendResponse(status: number, result: any, message: string): any {
    return {
        statusCode: status,
        body: JSON.stringify(
            {
                message: message,
                input: result,
            }
        )
    };
}