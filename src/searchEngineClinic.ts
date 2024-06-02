import { APIGatewayProxyHandler } from 'aws-lambda';
import { post } from './services/externalApi';

export const searchEngineClinic: any = async (event: any, _context: any) => {
  const body = {
    "firstName": "Zachary",
    "lastName": null,
    "organizationName": null,
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
}
  
  const response = await post('https://npiregistry.cms.hhs.gov/RegistryBack/search', body, {})
  console.log('......', response)  

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello clinics',
      input: event,
    }),
  };
};