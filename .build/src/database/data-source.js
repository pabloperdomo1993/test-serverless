"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Search_1 = require("../entity/Search");
var dataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "searchenginedb.cnkwxeoangrz.us-east-2.rds.amazonaws.com",
    port: 3306,
    username: "admin",
    password: "123456789",
    database: "searchEngineDb",
    synchronize: true,
    entities: [
        Search_1.Search
    ]
});
exports.default = dataSource;
//# sourceMappingURL=data-source.js.map