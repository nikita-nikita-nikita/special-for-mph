import {Injectable, NotFoundException} from '@nestjs/common';
import {TasksTypes} from "./tasks.interfaces";
import {Task} from "./task.model";
import {InjectModel} from "@nestjs/sequelize";
import TaskStatus = TasksTypes.TaskStatus;
import {GetTasksFilterDto} from "./dto/get-tasks-filter.dto";

@Injectable()
export class TasksService {
    constructor(
        @InjectModel(Task)
        private taskModel: typeof Task
    ) {}

    async getTasks(filterDto: GetTasksFilterDto): Promise<Task[]>{
        return this.taskModel.findAll();
    }

    findOne(id: string): Promise<Task>{
        return this.taskModel.findOne({
            where: {
                id,
            },
        });
    }
    async getTaskById(id: string): Promise<Task>{
        const found = await this.findOne(id);
        if(!found) throw new NotFoundException(`Task with id ${id} not found`);
        return found;
    }

    // async createTask(createTaskDto: CreateTaskDto): Promise<Task>{
    //     return this.taskRepository.createTask(createTaskDto);
    // }
    //
    // addTask(createTaskDto: CreateTaskDto): TasksTypes.Task {
    //     const task = this.createNewTask(createTaskDto);
    //     this._tasks.push(task);
    //     return task;
    // }
    //
    // async deleteTask(id: number): Promise<void>{
    //     const result = await this.taskRepository.delete({id});
    //     if(result.affected === 0) throw new NotFoundException(`Task with id ${id} not found`);
    // }

    async updateTaskStatus(id: string, status: TaskStatus): Promise<Task>{
        const result = await this.getTaskById(id);
        result.status = status;
        await result.save();
        return result;
    }

    // updateTask(
    //     newValue: TasksTypes.TaskStatus,
    //     id: string): TasksTypes.Task|never{
    //     const task = this.getTaskById(id);
    //     task.status = newValue;
    //     return task;
    // }
}
