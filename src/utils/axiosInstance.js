import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.VITE_isLOCAL === "true"
      ? import.meta.env.VITE_LOCAL
      : import.meta.env.VITE_CLOUD,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    let accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
