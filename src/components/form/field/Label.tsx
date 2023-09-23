import React from 'react';
import clsx from 'clsx';

type FieldLabelProps = {
  required?: boolean;
} & React.HTMLAttributes<HTMLLabelElement>;

const Label = React.forwardRef<HTMLLabelElement, FieldLabelProps>(
  ({ required, className, children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={clsx(
          'tw-flex tw-select-none tw-items-center tw-text-sm tw-font-medium tw-text-grayscale-180',
          className,
        )}
        {...props}
      >
        {children}
        {!required && (
          <span className="tw-ml-1 tw-font-regular tw-text-grayscale-100">
            (optional)
          </span>
        )}
      </label>
    );
  },
);
export default Label;
