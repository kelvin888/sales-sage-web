import { LoginParameters, LoginResponse } from "@/types/auth"
import { AxiosResponse } from "axios"
import { NoAuthAxiosInstance } from "../axios/authApi"
import { authEndpoints } from "@/constants/endpoints"

export const login = async (
    loginData: LoginParameters
  ): Promise<AxiosResponse<LoginResponse>> => {
    const response = await NoAuthAxiosInstance.post(
      authEndpoints.login,
      loginData
    )
    return response
  }