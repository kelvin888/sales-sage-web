import React, { SVGProps } from "react"
import { twMerge } from "tailwind-merge"
import "./spinner.scss"
interface SpinnerProps extends SVGProps<SVGSVGElement> {
  variant?: "arrow" | "circle"
}

const Spinner: React.FC<SpinnerProps> = ({ variant = "circle", ...props }) => {
  if (variant === "arrow") {
    return (
      <svg
        {...props}
        className={twMerge(
          `animate-custom-spin flip-horizontal -ml-1 mr-3 h-5 w-5  text-white ${props.className} `
        )}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 4V10H7"
          stroke="#204D88"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.51 14.9999C4.15839 16.8403 5.38734 18.4201 7.01166 19.5013C8.63598 20.5825 10.5677 21.1065 12.5157 20.9944C14.4637 20.8823 16.3226 20.1401 17.8121 18.8797C19.3017 17.6193 20.3413 15.9089 20.7742 14.0063C21.2072 12.1037 21.0101 10.1119 20.2126 8.33105C19.4152 6.55019 18.0605 5.07674 16.3528 4.13271C14.6451 3.18868 12.6769 2.82521 10.7447 3.09707C8.81245 3.36892 7.02091 4.26137 5.64 5.63995L1 9.99995"
          stroke="#204D88"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  return (
    <svg
      {...props}
      className={twMerge(
        `-ml-1 mr-3 h-5 w-5 animate-spin text-white ${props.className} `
      )}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  )
}

export default Spinner
