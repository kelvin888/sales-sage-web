import { baseUrl } from "@/config/baseUrl"
import axios from "axios"

export const NoAuthAxiosInstance = axios.create({
  baseURL: `${baseUrl.adminAuthService}`,
  /* other custom settings */
})
