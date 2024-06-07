"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestToModel = void 0;
function requestToModel(data) {
    var model = data.map(function (model) {
        return {
            number: model.number,
            enumerationType: model.enumerationType,
            name: model.basic.name,
            countryCode: model.primaryAddress.countryCode,
            city: model.primaryAddress.city,
            state: model.primaryAddress.state,
            taxonomyDesc: model.primaryTaxonomy.desc,
            nameData: []
        };
    });
    return model;
}
exports.requestToModel = requestToModel;
//# sourceMappingURL=responseToModel.js.map