import { DataSource } from 'typeorm';
export const AppDataSource = new DataSource({
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