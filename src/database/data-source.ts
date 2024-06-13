import { DataSource } from 'typeorm';
import { Search } from '../entity/Search';
import { secrets } from '../utils/secrets';

export async function dataSource(): Promise<any> {
    const HOST = await secrets('DB_TEST_HOST');
    const PORT = await secrets('DB_TEST_PORT');
    const USER = await secrets('DB_TEST_USER');
    const PASSWORD = await secrets('DB_TEST_PASSWORD');
    const DATABASE = await secrets('DB_TEST_DATABASE');

    const dataSource = new DataSource({
        type: "mysql",
        host: HOST,
        port: Number(PORT),
        username: USER,
        password: PASSWORD,
        database: DATABASE,
        synchronize: true,
        entities: [
            Search
        ]
    });

    return dataSource;
}
