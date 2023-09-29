import { productEndpoints } from "@/constants/endpoints"
import { ProductsAxiosInstance } from "../axios/productsInstance"

export const fetchProducts = async (payload: {
    currentPage: number
    pageSize: number
}) => {
    const response = await ProductsAxiosInstance.get(
        `${productEndpoints.fetchProducts}?page=${payload.currentPage}&size=${payload.pageSize}`
    )
    return response
}

export const updateUserStatus = async (payload: {
    activate: boolean
    userId: number
}) => {
    const { activate, userId } = payload
    const response = await ProductsAxiosInstance.put(
        `${productEndpoints.fetchProducts}?userId=${userId}&activate=${activate}`
    )
    return response
}

export const createProduct = async (payload: {
    name: string
    unitPrice: string
}) => {
    const response = await ProductsAxiosInstance.post(productEndpoints.fetchProducts, {
        ...payload,
    })
    return response
}

export const editProduct = async (payload: {
    name: string
    unitPrice: string
}) => {
    const response = await ProductsAxiosInstance.put(productEndpoints.fetchProducts, {
        ...payload,
    })
    return response
}
