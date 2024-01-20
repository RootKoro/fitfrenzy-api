import axios from 'axios';

export const getApiHost = (port: number) => {
  if (__DEV__) return `http://localhost:${port}`;
};

axios.defaults.headers.common['Content-Type'] = 'application/json';


export const setToken = (token: any) => {
  if (!token) {
    delete axios.defaults.headers.common.Authorization;
  }
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const api = (port: number) => axios.create({ baseURL: getApiHost(port) });

export default api;