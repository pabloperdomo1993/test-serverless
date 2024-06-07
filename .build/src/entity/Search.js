"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Search = void 0;
var typeorm_1 = require("typeorm");
exports.Search = new typeorm_1.EntitySchema({
    name: 'Search',
    tableName: 'searchs',
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        enumerationType: {
            type: String,
        },
        name: {
            type: String,
        },
        number: {
            type: String,
            unique: true,
        },
        countryCode: {
            type: String,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        taxonomyDesc: {
            type: String,
        },
        nameData: {
            type: 'json',
        },
    },
});
//# sourceMappingURL=Search.js.map