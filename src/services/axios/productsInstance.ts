import { baseUrl } from "@/config/baseUrl"
import axios from 'axios'

export const ProductsAxiosInstance = axios.create({
  baseURL: `${baseUrl.productsService}`,
})

// ProductsAxiosInstance.interceptors.request.use(
//   async (
//     config: InternalAxiosRequestConfig
//   ): Promise<InternalAxiosRequestConfig> => {
//     // Get the access token from the AuthToken object
//     const authToken = getAuthUser()?.authUser.accessToken
//     if (authToken) {
//       // Add the Authorization header to the request config
//       config.headers.Authorization = `Bearer ${authToken}`
//     }
//     return config
//   },
//   (error: AxiosError) => {
//     console.error("Error making request:", error)
//     return Promise.reject(error)
//   }
// )

// ProductsAxiosInstance.interceptors.response.use(
//   (response: AxiosResponse) => {
//     return response
//   },
//   async (error: any) => {
//     const originalRequest = error.config
//     if (
//       error.response &&
//       error.response.status === 401 &&
//       !originalRequest._retry
//     ) {
//       try {
//         const response = await generateNewAccessToken()
//         if (originalRequest) {
//           originalRequest.headers.Authorization = `Bearer ${response.data.data.accessToken}`
//           // Set the _retry flag to true to prevent an infinite loop
//           ;(originalRequest as any)._retry = true
//           // Retry the original request with the new token
//           return ProductsAxiosInstance(originalRequest)
//         } else {
//           // Handle case where original request is undefined
//           return Promise.reject(error)
//         }
//       } catch (error) {
//         // Log the user out if refresh token generation fails
//         sessionStorage.clear()
//         window.location.replace("/")
//       }

//       return Promise.reject(error)
//     }
//     return Promise.reject(error)
//   }
// )
