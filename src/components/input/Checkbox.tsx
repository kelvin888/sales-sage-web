import React, { HTMLAttributes, InputHTMLAttributes } from "react"
import { ErrorMessage } from "@hookform/error-message"
import { useFormState, useFormContext } from "react-hook-form"
import { twMerge } from "tailwind-merge"

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  name: string
  checkBoxProps?: HTMLAttributes<HTMLDivElement>
  checkedprops?: React.SVGAttributes<SVGGElement>
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ ...props }, ref) => {
    const { name, label } = props
    const { errors } = useFormState()
    const { register } = useFormContext()

    return (
      <div ref={ref}>
        <div className="flex items-center">
          {props.onChange ? (
            <input
              type="checkbox"
              onChange={props.onChange}
              className="absolute h-8 w-8 opacity-0"
              id={name}
              {...props}
            />
          ) : (
            <input
              type="checkbox"
              {...register(name)}
              className="absolute h-8 w-8 opacity-0"
              id={name}
              {...props}
            />
          )}
          <div
            className={twMerge(
              ` mr-2 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md border border-gray-20 bg-white ${props.checkBoxProps?.className}`
            )}
          >
            <svg
              className="fill-current text-blue-600 pointer-events-none hidden h-3 w-3"
              version="1.1"
              viewBox="0 0 17 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <g
                  transform="translate(-9 -11)"
                  fill="#204D88"
                  fillRule="nonzero"
                  {...props.checkedprops}
                >
                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                </g>
              </g>
            </svg>
          </div>
          {label && (
            <label htmlFor={name} className="select-none">
              {label}
            </label>
          )}
        </div>
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => (
            <div className="text-[0.6875rem] text-danger-default">
              {message}
            </div>
          )}
        />
      </div>
    )
  }
)

Checkbox.displayName = "Checkbox"

export default Checkbox
