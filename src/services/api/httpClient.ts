import axios from 'axios'

export interface Request {  // Пишем интерфейс для объекта аргумента функции
    url: string
    method?: string
    headers?: never,
    params?: {
        offset:number,
        limit:number
    },
    data?: never
}

const httpClient = ({ url = '/', method = 'get', data, params, headers }: Request) =>
    axios({
        url,
        method,
        responseType: 'json',
        headers,
        params,
        data
    })           // Axios делает запрос с нашими аргументами

export default httpClient

