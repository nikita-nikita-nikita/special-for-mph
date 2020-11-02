import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import {SequelizeModule} from "@nestjs/sequelize";
import {sequelizeConfig} from "./config/sequelize.config";


@Module({
  imports: [
      SequelizeModule.forRoot(sequelizeConfig),
      TasksModule,
  ],
})
export class AppModule {}
