var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createEmbedding } from './models/embedding';
import { simpleEmbedding } from './domains/simpleEmbedding';
import { AppDataSource } from './database/ormConfig';
// import { User } from './entities/User';
export const searchEngineClinic = (event, _context) => __awaiter(void 0, void 0, void 0, function* () {
    const params = event.queryStringParameters;
    if (params.type === 'SE') {
        yield simpleEmbedding('hello');
        if (!AppDataSource.isInitialized) {
            yield AppDataSource.initialize();
        }
        // const userRepository = AppDataSource.getRepository(User);
        // Ejemplo de crear un nuevo usuario
        // const user = new User();
        // user.name = 'John';
        // user.lastName = 'Doe';
        // user.age = 25;
        // await userRepository.save(user);
    }
    const res = yield createEmbedding('hello');
    // console.log('****', res);
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello clinics',
            input: 'event',
        }),
    };
});
//# sourceMappingURL=searchEngineClinic.js.map