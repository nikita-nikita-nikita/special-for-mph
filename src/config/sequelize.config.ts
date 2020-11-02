import {SequelizeModuleOptions} from "@nestjs/sequelize";
import {Task} from "../tasks/task.model";


export const sequelizeConfig: SequelizeModuleOptions = {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'taskmanagement',
    // @ts-ignore
    models: [Task],
}
