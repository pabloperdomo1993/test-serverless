"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
var typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'test',
    port: Number(5432),
    username: 'postgres',
    password: '12345',
    database: 'test',
    synchronize: true,
    logging: false,
    // entities: [User],
});
//# sourceMappingURL=ormConfig.js.map