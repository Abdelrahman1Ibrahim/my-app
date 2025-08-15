import axios from "axios";
import config from "../config/env.config";

const axiosInstance = axios.create({
  baseURL: config.STRAPI_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

axiosInstance.interceptors.request.use((reqConfig) => {

  const publicRoutes = ["/auth/local", "/auth/local/register"];

  const isPublic = publicRoutes.some((route) =>
    reqConfig.url?.includes(route)
  );

  if (!isPublic) {
    const token = localStorage.getItem("token");
    if (token) {
      reqConfig.headers.Authorization = `Bearer ${token}`;
    }
  }

  return reqConfig;
});

export default axiosInstance;
