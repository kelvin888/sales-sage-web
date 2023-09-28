import React, { TextareaHTMLAttributes } from "react"
import { FieldError, useFormContext, useFormState } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"

type inputContainerProps = TextareaHTMLAttributes<HTMLDivElement>
interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  name: string
  inputContainerProps?: inputContainerProps
  error?: FieldError
}

const TextArea = React.forwardRef<HTMLDivElement, InputProps>(
  ({ inputContainerProps, ...props }, ref) => {
    const { name, label } = props
    const { errors } = useFormState()
    const { register } = useFormContext()

    return (
      <div className={inputContainerProps?.className} ref={ref}>
        {label && <label htmlFor={name}>{label}</label>}
        <div className="mt-2 flex items-center">
          <textarea
            {...props}
            id={name}
            className="w-full rounded-lg border border-gray-20 p-3 
            focus:border-gray-20 focus:ring-gray-20"
            {...register(name)}
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

TextArea.displayName = "TextArea"

export default TextArea
