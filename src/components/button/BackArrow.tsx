import React, { ReactNode, ButtonHTMLAttributes } from "react"
import BackArrowIcon from "../../assets/icons/back-arrow.svg"
import { twMerge } from "tailwind-merge"

const BackArrow: React.FC<
  ButtonHTMLAttributes<HTMLButtonElement> & { label?: string | ReactNode }
> = ({ label, className, ...rest }) => {
  return (
    <button
      className={twMerge(`mt-auto flex items-center gap-3 ${className}`)}
      {...rest}
    >
      <BackArrowIcon />
      {label && (
        <span className="text-base font-medium text-primary-default">
          {label}
        </span>
      )}
    </button>
  )
}

export default BackArrow
