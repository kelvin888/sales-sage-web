"use client"
import React from 'react'
import AdminLayout from '../../components/AdminLayout/AdminLayout'
import ProductList from './ProductList/ProductList'

const Products = () => {

    return (
        <AdminLayout>
            <ProductList />
        </AdminLayout>
    )
}

export default Products