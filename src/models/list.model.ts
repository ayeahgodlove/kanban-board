import { Task } from "./task.model";

export type List = {
    id: string;
    text: string;
    tasks: Task[];
}

export type ListState = {
    readonly lists: List[];
    readonly list: List;
    readonly loading: boolean,
    readonly hasErrors: boolean,
    readonly error: any
}
// Task/List === Column/Card