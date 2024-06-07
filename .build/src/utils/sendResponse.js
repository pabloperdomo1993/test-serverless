"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = void 0;
function sendResponse(status, result, message) {
    return {
        statusCode: status,
        body: JSON.stringify({
            message: message,
            input: result,
        })
    };
}
exports.sendResponse = sendResponse;
//# sourceMappingURL=sendResponse.js.map