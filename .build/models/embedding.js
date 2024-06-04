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
export function createEmbedding(phrase) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const url = 'https://api.api-ninjas.com/v1/embeddings';
            const body = {
                text: phrase
            };
            const headers = {
                'X-Api-Key': '3xbq8mzB7Ts63zhlp2V/RQ==GVnHrcPE0zk1DmLk'
            };
            const response = yield post(url, body, headers);
            return response.embeddings;
        }
        catch (error) {
            throw new Error(`Error: ${error.message}`);
        }
    });
}
//# sourceMappingURL=embedding.js.map