import React from 'react';
import clsx from 'clsx';

type CaptionProps = {
  cta?: {
    label: string;
    onClick: () => void;
    htmlAttributes?: { [key: string]: string };
  };
} & React.HTMLAttributes<HTMLDivElement>;

const Caption = React.forwardRef<HTMLDivElement, CaptionProps>(
  ({ children, cta, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'tw-flex tw-select-none tw-items-center tw-text-sm',
          className,
        )}
        {...props}
      >
        {children && (
          <span className="tw-flex tw-items-center tw-gap-1 tw-text-grayscale-100">
            {children}
          </span>
        )}
        {cta && (
          <span
            onClick={cta.onClick}
            tabIndex={0}
            className="tw-ml-auto tw-cursor-pointer tw-font-medium tw-text-primary-100 hover:tw-underline"
            {...cta.htmlAttributes}
          >
            {cta.label}
          </span>
        )}
      </div>
    );
  },
);

Caption.displayName = "InputCaption"

export default Caption;
