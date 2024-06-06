import { DataSource } from 'typeorm';
import { Search } from '../entity/Search';

const dataSource = new DataSource({
    type: "mysql",
    host: "searchenginedb.cnkwxeoangrz.us-east-2.rds.amazonaws.com",
    port: 3306,
    username: "admin",
    password: "123456789",
    database: "searchEngineDb",
    synchronize: true,
    entities: [
        Search
    ]
});

export default dataSource;
