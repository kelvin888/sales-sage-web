import React, { InputHTMLAttributes } from "react"
import { FieldError, useFormContext, useFormState } from "react-hook-form"

import Search from "../../assets/icons/search.svg"
import { ErrorMessage } from "@hookform/error-message"

type inputContainerProps = InputHTMLAttributes<HTMLDivElement>
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  name: string
  inputContainerProps?: inputContainerProps
  error?: FieldError
}

const SearchInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ inputContainerProps, ...props }, ref) => {
    const { name, label, type } = props
    const { errors } = useFormState()
    const { register } = useFormContext()

    return (
      <div
        className={`${inputContainerProps?.className} bg-[#F9FAFB]`}
        ref={ref}
      >
        {label && <label htmlFor={name}>{label}</label>}
        <div className="relative flex items-center">
          <img src={Search} alt="search" className="absolute left-3 h-6 w-6" />

          <input
            {...props}
            {...register(name)}
            id={name}
            className="h-11 w-full rounded border border-gray-20 p-3 pl-12 text-xs
            focus:border-gray-20 focus:ring-gray-20"
            type={type}
            readOnly
            onFocus={(e) => e.target.removeAttribute("readonly")}
          />
        </div>

        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => (
            <div className="mt-1 text-[0.6875rem] text-danger-default">
              {message}
            </div>
          )}
        />
      </div>
    )
  }
)

SearchInput.displayName = "SearchInput"

export default SearchInput
