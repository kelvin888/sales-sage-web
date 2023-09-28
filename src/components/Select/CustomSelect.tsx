import React from "react"
import Select, { Props as SelectProps, components } from "react-select"
import "./custom-styles.css"
import DropdownTrigger from "../../assets/icons/select-dropdown-trigger.svg"
import { twMerge } from "tailwind-merge"
import { Controller, FieldError, FieldErrorsImpl, Merge } from "react-hook-form"

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    minHeight: "0",
    "*": {
      boxShadow: "none !important",
    },
  }),
  menuPortal: (base: any) => ({ ...base, zIndex: 9999 }),
}

interface Props extends SelectProps<unknown> {
  options: Array<{ value: string; label: string }>
  label?: string
  labelprops?: React.HTMLAttributes<HTMLLabelElement>
  controlProps?: React.HTMLAttributes<HTMLDivElement>
  control?: any
  name: string
  error?:
  | string
  | FieldError
  | Merge<FieldError, FieldErrorsImpl<any>>
  | undefined
}

const customDropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <DropdownTrigger />
    </components.DropdownIndicator>
  )
}

const CustomSelect: React.FC<Props> = (props) => {
  return (
    <div>
      {props.label && (
        <div className="mb-2">
          <label {...props.labelprops} htmlFor={props.name}>
            {props.label}
          </label>
        </div>
      )}
      <Controller
        name={props.name}
        control={props.control}
        render={({ field }) => (
          <Select
            {...props}
            {...field}
            id={props.name}
            styles={customStyles}
            className={`my-select ${props.isDisabled ? "cursor-not-allowed bg-gray-20/20" : ""
              }`}
            options={props.options}
            unstyled
            components={{ DropdownIndicator: customDropdownIndicator }}
            classNames={{
              control: () =>
                twMerge(
                  `h-11-5 px-2 border border-gray-20 rounded min-h-0 shadow-none ${props.controlProps?.className}`
                ),
              valueContainer: () => "flex flex-wrap gap-2",
              input: () => "text-gray-90 text-sm font-medium",
              indicatorsContainer: () => "flex justify-center items-center",
              indicatorSeparator: () => "hidden",
              dropdownIndicator: () => "text-gray-90",
              menu: () =>
                "py-1 bg-white shadow-md border border-gray-20 rounded",
              noOptionsMessage: () => "text-sm text-gray-60 p-2",
              option: () => "p-2",
            }}
            menuPortalTarget={document.body}
          />
        )}
      />
      {props.error && (
        <span className="text-xs text-danger-default">
          {props.error.toString()}
        </span>
      )}
    </div>
  )
}

export default CustomSelect
