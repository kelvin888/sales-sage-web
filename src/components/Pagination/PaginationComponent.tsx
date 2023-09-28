import React from "react"
import ReactPaginate from "react-paginate"
import BackCaret from "../../assets/icons/back-caret.svg"
import ForwardCaret from "../../assets/icons/forward-caret.svg"

import "./pagination.css"
import { isMobileScreen } from "@/utils/isMobileScreen"

export type PaginationType = {
  currentPage: number
  pageSize: number
  totalPages: number
  totalElements: number
  handlePageChange: (page: { selected: number }) => void
}

export const Pagination: React.FC<{
  pagination: PaginationType
  showOnSmallScreen?: boolean
}> = ({ showOnSmallScreen = false, pagination }) => {
  const { currentPage, totalPages, handlePageChange } = pagination
  return (
    <div className="... flex justify-end">
      <div className={`${showOnSmallScreen ? "block" : "md:block"}`}>
        <ReactPaginate
          forcePage={currentPage}
          pageCount={totalPages}
          marginPagesDisplayed={isMobileScreen ? 1 : 2}
          pageRangeDisplayed={isMobileScreen ? 1 : 2}
          onPageChange={handlePageChange}
          containerClassName="paginate"
          previousLabel={<BackCaret className="text-gray-20/80" />}
          nextLabel={<ForwardCaret className="text-gray-20/80" />}
          disabledClassName={"paginate__link--disabled"}
          activeClassName={"paginate__link--active"}
          nextLinkClassName="bg-none"
          previousLinkClassName="bg-none"
        />
      </div>
    </div>
  )
}
