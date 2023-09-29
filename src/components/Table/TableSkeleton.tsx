import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import React from "react"
import Skeleton from "react-loading-skeleton"
interface TableProps {
  columns: any[]
  count: number
  handleRowClick?: (rowId: string | number) => void
}
const data: any[] = []

const TableSkeleton = ({ columns, count }: TableProps) => {
  const table = useReactTable({
    data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  })
  return (
    <table className="w-full">
      <thead className="bg-[#F2F2F2]">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <td
                className="h-[2.875rem] px-5 text-sm font-semibold"
                key={header.id}
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
              </td>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {Array(count)
          .fill("")
          .map((item, index) => (
            <tr key={`skeleton-${index}`}>
              {Array(columns?.length)
                .fill("")
                .map((_item, colIndex) => (
                  <td
                    className={`h-16 px-5 text-sm ${index % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white"
                      } `}
                    key={`column-${colIndex}`}
                  >
                    <Skeleton />
                  </td>
                ))}
            </tr>
          ))}
      </tbody>
    </table>
  )
}

export default TableSkeleton
