import React from 'react'
import { productListColumns } from './ProductListColumns'
import Table from '@/components/Table'

const data: any[] = [{ name: "Iphone 12 pro max", unitPrice: 100000 }, { name: "Samsung galaxy s22 Ultra", unitPrice: 250000 }, { name: "MDX car stereo" }, { name: "Samsung 27 inch 4k monitor" }]

const ProductList = () => {
    return (
        <Table data={data} columns={productListColumns} />
    )
}

export default ProductList