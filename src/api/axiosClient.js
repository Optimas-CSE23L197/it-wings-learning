import axios from "axios";

const axiosClient = axios.create({
  baseURL: "later",
  headers: {
    "Content-Type": "application/json",
  },
});

// request interceptor
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// response interceptor
axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export default axiosClient;