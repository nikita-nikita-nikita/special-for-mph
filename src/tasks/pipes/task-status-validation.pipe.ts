import {BadRequestException, PipeTransform} from "@nestjs/common";
import {TasksTypes} from "../tasks.interfaces";
import TaskStatus = TasksTypes.TaskStatus;

export class TaskStatusValidationPipe implements PipeTransform {
    readonly allowedStatuses = [
        TaskStatus.OPEN,
        TaskStatus.IN_PROGRESS,
        TaskStatus.DONE
    ];

    transform(value: any): any {
        value = value.toUpperCase();
        if(!this.isStatusValid(value)) throw new BadRequestException("Invalid status");
        return value;
    }

    private isStatusValid(status: any): boolean {
        return this.allowedStatuses.includes(status);
    }
}
