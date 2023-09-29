"use client"

import { queryKeys } from "@/constants/queryKeys";
import { fetchProducts } from "@/services/api/products";
import { useState } from "react"
import { useQuery } from "@tanstack/react-query";

export default function Home() {

  const [pageSize] = useState(10)
  const [currentPage, setCurrentPage] = useState(0)

  const { data, isLoading } = useQuery(
    [queryKeys.product.fetchProducts, currentPage],
    () => fetchProducts({ pageSize, currentPage })
  )

  console.log("products here", data)

  return (
    <main>
      This is the landing page
    </main>
  )
}
