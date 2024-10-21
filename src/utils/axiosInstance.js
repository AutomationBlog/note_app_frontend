import axios from "axios";
import { API_URL_LOCAL } from "./constants";

export const axiosInstance = axios.create({
  baseURL: API_URL_LOCAL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (config) => {
    const accessToken = localStorage.getItem("token");
    console.log(accessToken);
    if (accessToken) {
      config.headers["authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
