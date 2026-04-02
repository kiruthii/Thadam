import axios from "axios";

const VITE_BACKEND_LIVE_BASE_URL = import.meta.env.VITE_BACKEND_LIVE_BASE_URL;

const USER_API = axios.create({
  baseURL: VITE_BACKEND_LIVE_BASE_URL,
});

USER_API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export const getCurrentUser = async () => {
  const res = await USER_API.get("/api/users/me");
  return res.data;
};

export const updateUserProfile = async (formData) => {
  const res = await USER_API.put("/api/users/profile", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};

export default USER_API;
