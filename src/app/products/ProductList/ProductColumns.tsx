import React from "react"
import { createColumnHelper } from "@tanstack/react-table"

const columnHelper = createColumnHelper<ProductType>()

export const productColumns = [
    columnHelper.accessor("name", {
        cell: (info) => info.getValue(),
        header: () => <span>Product Name</span>,
    }),
]
