import axios, { AxiosResponse } from "axios";

const responseBody = (response: AxiosResponse) => response.data;

export const apiRequests = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  del: (url: string, body: {}) =>
    axios
      .delete(url, {
        data: body,
      })
      .then(responseBody),
};
