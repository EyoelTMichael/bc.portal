import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://your-api-endpoint.com',
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // or get it from a store
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
export default axiosInstance;