import {TasksTypes} from "./tasks.interfaces";
import TaskStatus = TasksTypes.TaskStatus;
import { Column, Model, Table } from 'sequelize-typescript';


@Table({timestamps:false})
export class Task extends Model<Task>{
    @Column({
        primaryKey:true
    })
    id: number;

    @Column({
        defaultValue: TaskStatus.OPEN
    })
    status: TasksTypes.TaskStatus;

    @Column
    title: string;
}


