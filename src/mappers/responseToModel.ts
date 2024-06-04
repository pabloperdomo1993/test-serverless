export function requestToModel(data: any): any {
    const model = data.map((model: any) => {

        return {
          number: model.number,
          enumerationType: model.enumerationType,
          name: model.basic.name,
          countryCode: model.primaryAddress.countryCode,
          city: model.primaryAddress.city,
          state: model.primaryAddress.state,
          taxonomyDesc: model.primaryTaxonomy.desc,
          nameData: []
        }
      });

    return model;
}