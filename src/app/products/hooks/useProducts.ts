import { queryKeys } from "@/constants/queryKeys"
import { fetchProducts } from "@/services/api/products"
import  { useState } from "react"
import { useQuery } from "@tanstack/react-query"


const useProducts = () => {
  const [showExportModal, setShowExportModal] = useState(false)

  const [pageSize] = useState(10)
  const [currentPage, setCurrentPage] = useState(0)

  const { data: productsResponse, isLoading } = useQuery(
    [queryKeys.product.fetchProducts, currentPage],
    () => fetchProducts({ pageSize, currentPage })
  )

  const productsList: ProductType[] = productsResponse?.data?.data.content
  const totalElements = productsResponse?.data?.data?.totalElements
  const totalPages = productsResponse?.data?.data?.totalPages


  const handlePageChange = (page: { selected: number }) => {
    setCurrentPage(page.selected)
  }


//   const productsList: ProductType[] = [{ name: "Iphone 12 pro max", unitPrice: 100000 }, { name: "Samsung galaxy s22 Ultra", unitPrice: 250000 }]


  const pagination = {
    pageSize,
    currentPage,
    totalElements,
    totalPages,
    handlePageChange,
  }

  const data = { productsList, isLoading }

  const exportManager = { showExportModal, setShowExportModal }

  return { data, pagination, exportManager }
}

export default useProducts
