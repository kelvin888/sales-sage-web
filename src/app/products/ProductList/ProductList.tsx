import React from 'react'
import Table from '@/components/Table'
import { Pagination } from '@/components/Pagination/PaginationComponent'
import PaginationInfo from '@/components/Pagination/PaginationInfo'
import { fetchProducts } from '@/services/api/products'
import { queryKeys } from '@/constants/queryKeys'
import { useQuery } from "@tanstack/react-query"
import useProducts from '../hooks/useProducts'
import { productListColumns } from './ProductListColumns'



const ProductList = () => {

    const { pagination } = useProducts()
    const { currentPage, pageSize } = pagination;


    const { data: productData, isLoading } = useQuery(
        [queryKeys.product.fetchProducts, currentPage],
        () => fetchProducts({ pageSize, currentPage })
    )

    console.log("from product list", productData);


    return (
        <div className='bg-white rounded-lg p-2'>
            <h2 className='font-semibold my-2'>Products</h2>
            <Table data={productData?.data} columns={productListColumns} />
            <div className="flex h-[4.3125rem] items-center justify-between bg-white px-5">
                <PaginationInfo pagination={pagination} />
                <div>
                    <Pagination pagination={pagination} />
                </div>
            </div>
        </div>
    )
}

export default ProductList