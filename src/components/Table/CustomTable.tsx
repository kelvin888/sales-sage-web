import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import React from "react"

interface TableProps {
  data: any[]
  columns: any[]
  handleRowClick?: (rowId: string | number) => void
}

export const CustomTable = ({ columns, data, handleRowClick }: TableProps) => {
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
              <td className="h-12 px-5 text-sm font-semibold" key={header.id}>
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
      {data.length > 0 ? (
        <tbody>
          {table.getRowModel().rows.map((row, index) => (
            <tr
              key={row.id}
              onClick={() => handleRowClick && handleRowClick(row.original)}
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  className={`h-16 px-5 text-sm ${index % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white"
                    } `}
                  key={cell.id}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      ) : (
        <tbody>
          <tr>
            <td
              colSpan={table.getHeaderGroups()?.length}
              className={`h-16 px-5 text-sm  `}
            >
              No records found
            </td>
          </tr>
        </tbody>
      )}
    </table>
  )
}
