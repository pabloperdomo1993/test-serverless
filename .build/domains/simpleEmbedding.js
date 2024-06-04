var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { post } from './../services/externalApi';
export function simpleEmbedding(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const body = {
                "firstName": null,
                "lastName": null,
                "organizationName": "Bone & Joint Clinic",
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
                "exactMatch": true,
                "addressType": null
            };
            // console.log('----', event.queryStringParameters);
            const response = yield post('https://npiregistry.cms.hhs.gov/RegistryBack/search', body, {});
            console.log('......', response);
            const clinics = response.map((clinic) => {
                return {
                    number: clinic.number,
                    enumerationType: clinic.enumerationType,
                    name: clinic.basic.name,
                    countryCode: clinic.primaryAddress.countryCode,
                    city: clinic.primaryAddress.city,
                    state: clinic.primaryAddress.state,
                    taxonomyDesc: clinic.primaryTaxonomy.desc
                };
            });
            console.log('......ccc', clinics);
            return 'response.embeddings';
        }
        catch (error) {
            throw new Error(`Error: ${error.message}`);
        }
    });
}
//# sourceMappingURL=simpleEmbedding.js.map