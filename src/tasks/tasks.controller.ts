import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    Query,
    UsePipes,
    ValidationPipe
} from '@nestjs/common';
import {TasksService} from "./tasks.service";
import {CreateTaskDto} from "./dto/create-task.dto";
import {TaskStatusValidationPipe} from "./pipes/task-status-validation.pipe";
import {TasksTypes} from "./tasks.interfaces";
import TaskStatus = TasksTypes.TaskStatus;
import {GetTasksFilterDto} from "./dto/get-tasks-filter.dto";

@Controller('/tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}
    //
    @Get()
    async getTasks(@Query(ValidationPipe) filterDto: GetTasksFilterDto){
        const res = this.tasksService.getTasks(filterDto);
        console.log(res);
        return res;
    }
    //
    // @Get('/:id')
    // getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Еф> {
    //     console.log(id);
    //     return this.tasksService.getTaskById(id);
    // }
    //
    // @Post()
    // @UsePipes(ValidationPipe)
    // createTask(@Body() createTaskDto: CreateTaskDto): Promise<TaskEntity> {
    //     return this.tasksService.createTask(createTaskDto)
    // }
    //
    // @Delete('/:id')
    // async deleteTaskById(@Param('id', ParseIntPipe) id: number): Promise<void> {
    //     console.log(id);
    //     await this.tasksService.deleteTask(id);
    // }
    // //
    // //
    // @Patch('/:id/status')
    // patchTaskByIdAndParam(
    //     @Param('id', ParseIntPipe) id: number,
    //     @Body('status', TaskStatusValidationPipe)status: TaskStatus
    // ): Promise<TaskEntity>{
    //     return this.tasksService.updateTaskStatus(id, status);
    // }


}
