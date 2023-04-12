import { apiRequests } from "."
import { Task } from "../models/task.model"

const taskService = {
    task: (): Promise<Task[]> => apiRequests.get('/tasks'),
    details: (code: string): Promise<Task> =>
        apiRequests.get(`/tasks/${code}`),
    create: (task: Task): Promise<Response> =>
        apiRequests.post('/tasks', task),
    update: (task: Task): Promise<Response> =>
        apiRequests.put('/tasks', task),
}

export default taskService
