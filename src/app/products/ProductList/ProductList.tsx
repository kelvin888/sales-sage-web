import Table from '@/components/Table'
import React from 'react'
import useProduct from '../hooks/useProduct'
import { productColumns } from './ProductColumns'

const ProductList = ({ }) => {
    const { pagination, product } = useProduct()
    return (
        <div>
            <Table data={product.productList} columns={productColumns} />
        </div>
    )
}

export default ProductList