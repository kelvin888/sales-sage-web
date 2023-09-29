<<<<<<< Updated upstream
import React from 'react'
import AdminLayout from '../../components/AdminLayout/AdminLayout'

const Products = () => {
    return (
        <AdminLayout>
            Products page
        </AdminLayout>
=======
"use client"
import React, { useState } from 'react'
import ProductList from './ProductList/ProductList'
import useProducts from './hooks/useProducts'
import { fetchProducts } from '@/services/api/products'
import { queryKeys } from '@/constants/queryKeys'
import { useQuery } from "@tanstack/react-query"
import { productListColumns } from './ProductList/ProductListColumns'



const Products = () => {

    // const { pagination } = useProducts()
    // const { currentPage, pageSize } = pagination;


    // const { data, isLoading } = useQuery(
    //     [queryKeys.product.fetchProducts, currentPage],
    //     () => fetchProducts({ pageSize, currentPage })
    // )

    // <ProductList data={data} columns={productListColumns} pagination={pagination} />


    return (
        <ProductList />
>>>>>>> Stashed changes
    )
}

export default Products