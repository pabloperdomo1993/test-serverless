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
exports.searchEngineClinic = void 0;
var externalApiToEmbedding_1 = require("./domains/externalApiToEmbedding");
var simpleToEmbedding_1 = require("./domains/simpleToEmbedding");
var sendResponse_1 = require("./utils/sendResponse");
var logger_1 = require("./utils/logger");
var searchEngineClinic = function (event, _context) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, type, organizationName, firstName, lastName, response, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = event.queryStringParameters, type = _a.type, organizationName = _a.organizationName, firstName = _a.firstName, lastName = _a.lastName;
                response = [];
                logger_1.logger.info("".concat(JSON.stringify(event.queryStringParameters)));
                _b.label = 1;
            case 1:
                _b.trys.push([1, 7, , 9]);
                if (!(type === 'EE')) return [3 /*break*/, 3];
                return [4 /*yield*/, (0, externalApiToEmbedding_1.externalApiToEmbedding)({ organizationName: organizationName })];
            case 2:
                response = _b.sent();
                _b.label = 3;
            case 3:
                if (!(type === 'SE')) return [3 /*break*/, 5];
                return [4 /*yield*/, (0, simpleToEmbedding_1.simpleToEmbedding)({ organizationName: organizationName })];
            case 4:
                response = _b.sent();
                _b.label = 5;
            case 5: return [4 /*yield*/, (0, sendResponse_1.sendResponse)(200, response, 'Succesful search')];
            case 6: return [2 /*return*/, _b.sent()];
            case 7:
                error_1 = _b.sent();
                logger_1.logger.error("".concat(JSON.stringify(error_1)));
                return [4 /*yield*/, (0, sendResponse_1.sendResponse)(400, error_1.message, 'Error')];
            case 8: return [2 /*return*/, _b.sent()];
            case 9: return [2 /*return*/];
        }
    });
}); };
exports.searchEngineClinic = searchEngineClinic;
//# sourceMappingURL=searchEngineClinic.js.map