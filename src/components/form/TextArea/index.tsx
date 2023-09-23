import React from 'react';
import clsx from 'clsx';

const DEFAULT_TEXT_AREA_ROWS = 5;

export type TextAreaProps = {
  error?: boolean;
  resize?: boolean;
} & React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ error, resize, ...props }, ref) => {
    const { className, rows = DEFAULT_TEXT_AREA_ROWS, ...rest } = props;

    return (
      <textarea
        ref={ref}
        rows={rows}
        className={clsx(
          'tw-block tw-w-full tw-scroll-pb-3 tw-rounded tw-border-0 tw-p-3 tw-px-3 tw-text-sm tw-font-regular tw-text-grayscale-180 tw-outline-none tw-ring-1 disabled:tw-cursor-not-allowed disabled:tw-bg-grayscale-5 disabled:tw-text-grayscale-50',
          {
            'tw-ring-grayscale-30 focus:tw-ring-primary-100': !error,
            'tw-ring-danger-100': error,
            'tw-resize-none': !resize,
          },
          className,
        )}
        {...rest}
      />
    );
  },
);

export default TextArea;
