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
exports.userSave = void 0;
var secrets_1 = require("./utils/secrets");
var data_source_1 = require("./database/data-source");
var requestToApi_1 = require("./mappers/requestToApi");
var externalApi_1 = require("./services/externalApi");
var responseToModel_1 = require("./mappers/responseToModel");
var sendUsersByInsert_1 = require("./services/sendUsersByInsert");
var userSave = function (event, _context) { return __awaiter(void 0, void 0, void 0, function () {
    var dataModel, respository, body, urlExternalApi, response, model, numbers, existingUsers, newUsers, responseSave;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dataModel = JSON.parse(event.Records[0].body);
                return [4 /*yield*/, data_source_1.default.initialize()];
            case 1:
                _a.sent();
                respository = data_source_1.default.getRepository('Search');
                body = (0, requestToApi_1.requestToApi)(dataModel);
                return [4 /*yield*/, (0, secrets_1.secrects)('URL_EXTERNAL_API')];
            case 2:
                urlExternalApi = _a.sent();
                return [4 /*yield*/, (0, externalApi_1.post)(urlExternalApi + '/search', body, {})];
            case 3:
                response = _a.sent();
                model = (0, responseToModel_1.requestToModel)(response);
                numbers = model.map(function (user) { return user.number; });
                return [4 /*yield*/, respository.find({
                        where: numbers.map(function (number) { return ({ number: number }); }),
                        select: ['number'],
                    })];
            case 4:
                existingUsers = _a.sent();
                newUsers = model.filter(function (user) {
                    return !existingUsers.some(function (existingUser) { return existingUser.number === user.number; });
                });
                return [4 /*yield*/, respository.save(newUsers)];
            case 5:
                responseSave = _a.sent();
                return [4 /*yield*/, data_source_1.default.destroy()];
            case 6:
                _a.sent();
                return [4 /*yield*/, (0, sendUsersByInsert_1.sendUsersByInsert)(responseSave)];
            case 7:
                _a.sent();
                return [2 /*return*/, {
                        statusCode: 200,
                        body: JSON.stringify({
                            message: 'Succesful reference',
                            input: 'response',
                        }),
                    }];
        }
    });
}); };
exports.userSave = userSave;
//# sourceMappingURL=userSave.js.map