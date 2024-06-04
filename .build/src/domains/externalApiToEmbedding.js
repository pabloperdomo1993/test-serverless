"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.externalApiToEmbedding = void 0;
var externalApi_1 = require("../services/externalApi");
var requestToApi_1 = require("./../mappers/requestToApi");
var responseToModel_1 = require("./../mappers/responseToModel");
var embedding_1 = require("./../models/embedding");
var client_1 = require("@prisma/client");
var requestToEmbedding_1 = require("./../mappers/requestToEmbedding");
var embeddingComparison_1 = require("./../models/embeddingComparison");
function externalApiToEmbedding(data) {
    return __awaiter(this, void 0, void 0, function () {
        var prisma, dataModel, body, response, model, _i, model_1, item, embedding, error_1, reference, dataUser, dataEmbedding, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    prisma = new client_1.PrismaClient();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 13, , 14]);
                    dataModel = {
                        organizationName: data.organizationName
                    };
                    body = (0, requestToApi_1.requestToApi)(dataModel);
                    return [4 /*yield*/, (0, externalApi_1.post)('https://npiregistry.cms.hhs.gov/RegistryBack/search', body, {})];
                case 2:
                    response = _a.sent();
                    model = (0, responseToModel_1.requestToModel)(response);
                    _i = 0, model_1 = model;
                    _a.label = 3;
                case 3:
                    if (!(_i < model_1.length)) return [3 /*break*/, 10];
                    item = model_1[_i];
                    _a.label = 4;
                case 4:
                    _a.trys.push([4, 8, , 9]);
                    return [4 /*yield*/, prisma.user.create({ data: item })];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, (0, embedding_1.createEmbedding)(item.name)];
                case 6:
                    embedding = _a.sent();
                    return [4 /*yield*/, prisma.user.update({
                            where: { number: item.number },
                            data: {
                                nameData: embedding
                            }
                        })];
                case 7:
                    _a.sent();
                    return [3 /*break*/, 9];
                case 8:
                    error_1 = _a.sent();
                    console.error(error_1.code);
                    return [3 /*break*/, 9];
                case 9:
                    _i++;
                    return [3 /*break*/, 3];
                case 10: return [4 /*yield*/, (0, requestToEmbedding_1.requestToEmbedding)(data)];
                case 11:
                    reference = _a.sent();
                    return [4 /*yield*/, prisma.user.findMany()];
                case 12:
                    dataUser = _a.sent();
                    dataEmbedding = (0, embeddingComparison_1.embeddingComparison)(reference, dataUser);
                    return [2 /*return*/, dataEmbedding];
                case 13:
                    error_2 = _a.sent();
                    throw new Error("Error: ".concat(error_2.message));
                case 14: return [2 /*return*/];
            }
        });
    });
}
exports.externalApiToEmbedding = externalApiToEmbedding;
//# sourceMappingURL=externalApiToEmbedding.js.map