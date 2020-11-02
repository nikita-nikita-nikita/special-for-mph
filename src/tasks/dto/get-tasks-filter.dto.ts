import {TasksTypes} from "../tasks.interfaces";
import {IsIn, IsOptional} from "class-validator";
import TaskStatus = TasksTypes.TaskStatus;

export class GetTasksFilterDto {
    @IsOptional()
    @IsIn([TaskStatus.OPEN, TaskStatus.DONE, TaskStatus.IN_PROGRESS])
    status: TasksTypes.TaskStatus;
}
