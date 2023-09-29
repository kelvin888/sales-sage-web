import { queryKeys } from "@/constants/queryKeys"
import React, { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { fetchproductData } from "@/services/api/products"

const useProduct = () => {
  const [showExportModal, setShowExportModal] = React.useState(false)

  const [pageSize] = useState(10)
  const [currentPage, setCurrentPage] = useState(0)

  const { data: productResponse, isLoading } = useQuery(
    [queryKeys.products.fetchProducts, currentPage],
    () => fetchproductData({ pageSize, currentPage })
  )

  const productList: ProductType[] = productResponse?.data?.data.content
  const totalElements = productResponse?.data?.data?.totalElements
  const totalPages = productResponse?.data?.data?.totalPages

  const handlePageChange = (page: { selected: number }) => {
    setCurrentPage(page.selected)
  }

  const pagination = {
    pageSize,
    currentPage,
    totalElements,
    totalPages,
    handlePageChange,
  }

  const product = { productList, isLoading }

  const exportManager = { showExportModal, setShowExportModal }

  return { product, pagination, exportManager }
}

export default useProduct
