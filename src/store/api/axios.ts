import axios from 'axios';

let jwtToken;

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 8000,
  headers: { 'content-type': 'application/json', Authorization: `Bearer ${jwtToken}` },
});

// axiosInstance.interceptors.request.use(function (config) {

//   return config;
// }, function (error) {
//   return Promise.reject(error);
// });
