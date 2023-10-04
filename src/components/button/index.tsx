import clsx from "clsx"
import React from "react"
import { twMerge } from "tailwind-merge"
import Spinner from "../spinner/Spinner"

type ButtonVariant =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "link"
  | "linkPrimary"
  | "outlineDefault"
  | "outlinePrimary"

interface Props {
  variant?: ButtonVariant
  children: React.ReactNode
  className?: string
  loading?: boolean
  disabled?: boolean
}

const variantClassMap = {
  default: "bg-[#0F172A]/50 border text-white border-gray-20",
  primary: "bg-primary-default hover:bg-primary-default/90 text-white",
  secondary: "bg-secondary-default hover:bg-secondary-default/90",
  success: "bg-success-default hover:bg-success-default/90 text-white",
  danger: "bg-danger-default hover:bg-danger-default/90 text-white",
  link: "text-gray-10 w-fit p-0 disabled:text-gray-10 disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-50",
  linkPrimary:
    "text-primary-default w-fit p-0 disabled:text-gray-10 disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-50",
  outlineDefault: "bg-white border text-gray-10/50 border-gray-20 bg-none",
  outlinePrimary:
    "bg-white border text-primary-default border-primary-default bg-none",
}

const Button: React.FC<
  Props & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  variant = "primary",
  className,
  children,
  loading,
  disabled,
  ...props
}) => {
    return (
      <button
        {...props}
        className={twMerge(
          clsx(
            `flex h-11-5 min-w-max cursor-pointer items-center justify-center px-4 text-center text-sm font-medium ${variantClassMap[variant]} rounded ${className}`,
            {
              "cursor-not-allowed opacity-50": disabled,
            }
          )
        )}
      >
        {loading ? <Spinner /> : children}
      </button>
    )
  }

export default Button
