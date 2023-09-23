import React from 'react';
// import Icon from '../../Icon';
// import { faExclamationCircle } from '@fortawesome/pro-regular-svg-icons';
import clsx from 'clsx';

const Error = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  if (!children) {
    return null
  }

  return (
    <div
      ref={ref}
      className={clsx(
        'tw-flex tw-select-none tw-items-center tw-gap-1 tw-text-sm tw-text-danger-100',
        className,
      )}
      {...props}
    >
      {/* <Icon icon={faExclamationCircle} /> */}
      {children}
    </div>
  );
});

Error.displayName = "InputError"

export default Error;
