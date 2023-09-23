import React from 'react';
import clsx from 'clsx';

const Group = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={clsx('tw-flex tw-flex-col tw-gap-2', className)}
      {...props}
    >
      {children}
    </div>
  );
});

export default Group;
