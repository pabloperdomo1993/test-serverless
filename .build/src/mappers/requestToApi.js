"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestToApi = void 0;
function requestToApi(data) {
    var _a, _b, _c;
    var body = {
        "firstName": (_a = data.firstName) !== null && _a !== void 0 ? _a : null,
        "lastName": (_b = data.lastName) !== null && _b !== void 0 ? _b : null,
        "organizationName": (_c = data.organizationName) !== null && _c !== void 0 ? _c : null,
        "aoFirstName": null,
        "aoLastName": null,
        "skip": 0,
        "enumerationType": null,
        "number": null,
        "city": null,
        "state": null,
        "country": null,
        "taxonomyDescription": null,
        "postalCode": null,
        "exactMatch": false,
        "addressType": null
    };
    return body;
}
exports.requestToApi = requestToApi;
//# sourceMappingURL=requestToApi.js.map