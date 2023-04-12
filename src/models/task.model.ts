export type Task = {
    id: string;
    text: string;
}
export type TaskState = {
    readonly tasks: Task[];
    readonly task: Task;
    readonly loading: boolean,
    readonly hasErrors: boolean,
    readonly error: any
}