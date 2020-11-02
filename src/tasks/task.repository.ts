// // import {EntityRepository, Repository} from "typeorm";
// import {Repository, Sequelize} from "sequelize-typescript";
// import {Task} from "./task.model";
// import {CreateTaskDto} from "./dto/create-task.dto";
// import {GetTasksFilterDto} from "./dto/get-tasks-filter.dto";
// import {Injectable} from "@nestjs/common";
//
// @Injectable()
// export class TaskRepository implements Repository{
//     async createTask({title}: CreateTaskDto): Promise<TaskEntity>{
//         const task = new TaskEntity();
//         task.title = title;
//         await task.save();
//         return task;
//     }
//
//     async getTasks(filterDto: GetTasksFilterDto): Promise<TaskEntity[]>{
//         const {status} = filterDto;
//         const query = this.createQueryBuilder('task');
//         if(status) query.andWhere('task.status = :status', {status})
//         return query.getMany();
//     }
// }
