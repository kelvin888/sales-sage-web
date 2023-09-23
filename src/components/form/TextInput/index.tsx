import React, { ReactNode } from 'react';
import clsx from 'clsx';

export type TextInputProps = {
  error?: boolean;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ error, iconBefore, iconAfter, ...props }, ref) => {
    const { className, ...rest } = props;

    return (
      <div className="tw-relative">
        {iconBefore && (
          <div className="tw-absolute tw-inset-y-0 tw-left-0 tw-flex tw-items-center tw-pl-3 tw-text-grayscale-100">
            {iconBefore}
          </div>
        )}
        <input
          ref={ref}
          className={clsx(
            'tw-block tw-h-[40px] tw-w-full tw-rounded tw-border-0 tw-px-3 tw-text-sm tw-font-regular tw-text-grayscale-180 tw-outline-none tw-ring-1 disabled:tw-cursor-not-allowed disabled:tw-bg-grayscale-5 disabled:tw-text-grayscale-50',
            {
              'tw-pl-10': iconBefore,
              'tw-pr-10': iconAfter,
              'tw-ring-grayscale-30 focus:tw-ring-primary-100': !error,
              'tw-ring-danger-100': error,
            },
            className,
          )}
          {...rest}
        />
        {iconAfter && (
          <div className="tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center tw-pr-3 tw-text-grayscale-100">
            {iconAfter}
          </div>
        )}
      </div>
    );
  },
);

export default TextInput;
