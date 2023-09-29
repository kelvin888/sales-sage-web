import { productEndpoints } from "@/constants/endpoints"
import { ProductAxiosInstance } from "../axios/productApi"

export const fetchproductData = async (payload: {
  currentPage: number
  pageSize: number
}) => {
  const response = await ProductAxiosInstance.get(
    `${productEndpoints.getProducts}?page=${payload.currentPage}&size=${payload.pageSize}`
  )
  return response
}
