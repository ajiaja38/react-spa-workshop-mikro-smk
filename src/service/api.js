import axios from "axios"

export const api = axios.create({
  baseURL:
    "https://workshop-micro-smk-backend-expressjs-24hyizzv4.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
})

api.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error.response.data)
)
