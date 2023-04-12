import { apiRequests } from "."
import { List } from "../models/list.model"

const listService = {
    list: (): Promise<List[]> => apiRequests.get('/lists'),
    details: (code: string): Promise<List> =>
        apiRequests.get(`/lists/${code}`),
    create: (list: List): Promise<Response> =>
        apiRequests.post('/lists', list),
    update: (list: List): Promise<Response> =>
        apiRequests.put('/lists', list),
}

export default listService
