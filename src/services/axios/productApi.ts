import { baseUrl } from "@/config/baseUrl"
import axios from "axios"

export const ProductAxiosInstance = axios.create({
  baseURL: `${baseUrl.adminUserService}`,
  /* other custom settings */
})

