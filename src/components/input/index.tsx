import React, { HTMLAttributes, InputHTMLAttributes } from "react"
import Checkbox from "./Checkbox"
import SearchInput from "./SearchInput"
import TextField from "./TextField"
import AdornedInput from "./AdornedInput"

type inputContainerProps = InputHTMLAttributes<HTMLDivElement>
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  name: string
  inputContainerProps?: inputContainerProps
  checkBoxProps?: HTMLAttributes<HTMLDivElement>
  checkMarkProps?: React.SVGAttributes<SVGGElement>
  labelprops?: React.HTMLAttributes<HTMLLabelElement>
  hasPrefix?: boolean
  prefix?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { label, name, type, inputContainerProps, hasPrefix, prefix, ...props },
    ref
  ) => {
    if (hasPrefix) {
      return (
        <AdornedInput
          name={name}
          label={label}
          type={type}
          prefix={prefix}
          hasPrefix={hasPrefix}
          inputContainerProps={inputContainerProps}
          {...props}
          ref={ref}
        />
      )
    }
    if (type === "checkbox") {
      return <Checkbox name={name} label={label} type={type} {...props} />
    }

    if (type === "search") {
      return (
        <SearchInput
          name={name}
          label={label}
          type={type}
          inputContainerProps={inputContainerProps}
          {...props}
          ref={ref}
        />
      )
    }
    return (
      <TextField
        name={name}
        label={label}
        type={type}
        inputContainerProps={inputContainerProps}
        {...props}
        ref={ref}
      />
    )
  }
)

Input.displayName = "Input"

export default Input
