import React from "react"
import { createColumnHelper } from "@tanstack/react-table"

const columnHelper = createColumnHelper<ProductType>()

export const productListColumns = [
    columnHelper.accessor("name", {
        cell: (info) => info.getValue(),
        header: () => <span>Name</span>,
    }),
    columnHelper.accessor((row) => row.unitPrice, {
        id: "unitPrice",
        cell: (info) => <span>{info.getValue()}</span>,
        header: () => <span>Unit Price</span>,
    }),
    // columnHelper.accessor("totalPayoutAmount", {
    //     header: () => "Payout (NGN)",
    //     cell: (info) => (
    //         <span>{numberUtils.formatCustomAmount(info.renderValue(), "NGN")}</span>
    //     ),
    // }),
    // columnHelper.accessor("bankName", {
    //     header: () => "Bank",
    //     cell: (info) => <span>{info.renderValue()}</span>,
    // }),
    // columnHelper.accessor("settlementDate", {
    //     header: () => <span>Date</span>,
    // }),
    // columnHelper.accessor("status", {
    //     header: "Settlement Status",
    //     cell: (info) => (
    //         <Status variant={info.getValue()}>{info.getValue()}</Status>
    //     ),
    // }),
    // columnHelper.accessor("action", {
    //     header: "Action",
    //     cell: ({ cell }) => {
    //         const navigate = useNavigate()
    //         const [showModal, setShowModal] = useState(false)
    //         function closeModal() {
    //             setShowModal(false)
    //         }
    //         return (
    //             <>
    //                 <span
    //                     onClick={() => {
    //                         navigate(
    //                             `details?settlementInfo=${encodeURIComponent(
    //                                 JSON.stringify(cell.row.original)
    //                             )}`
    //                         )
    //                         setShowModal(true)
    //                     }}
    //                     className="cursor-pointer font-semibold text-primary-default"
    //                 >
    //                     View
    //                 </span>
    //                 <Modal isOpen={showModal} closeModal={closeModal}>
    //                     <div className="p-6">What do you want to put here?</div>
    //                 </Modal>
    //             </>
    //         )
    //     },
    // }),
]
