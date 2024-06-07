export function requestToApi(data: any): any {
    const body = {
        "firstName": data.firstName ?? null,
        "lastName": data.lastName ?? null,
        "organizationName": data.organizationName ?? null,
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
    }

    return body;
}