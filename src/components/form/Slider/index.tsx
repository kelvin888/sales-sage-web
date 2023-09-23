import React, { ReactNode } from 'react';
import clsx from 'clsx';
import * as SliderRadix from '@radix-ui/react-slider';
import Tooltip from '../../Tooltip';

type SliderProps = {
  tooltip?: ReactNode;
} & SliderRadix.SliderProps;

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ tooltip, className, ...props }, ref) => {
    return (
      <SliderRadix.Root
        ref={ref}
        className={clsx(
          'tw-relative tw-flex tw-h-1 tw-w-full tw-items-center',
          className,
        )}
        {...props}
      >
        <SliderRadix.Track className="tw-relative tw-h-1 tw-w-full tw-cursor-pointer tw-rounded-lg tw-bg-grayscale-10">
          <SliderRadix.Range className="tw-absolute tw-h-full tw-rounded-full tw-bg-primary-100 data-[disabled]:tw-bg-grayscale-10" />
        </SliderRadix.Track>
        <Tooltip content={tooltip}>
          <SliderRadix.Thumb className="tw-box-border tw-block tw-h-5 tw-w-5 tw-cursor-pointer tw-shadow-md tw-rounded-full tw-border-4 tw-border-primary-100 tw-bg-white hover:tw-ring-3 hover:tw-ring-primary-100/6 data-[disabled]:tw-cursor-not-allowed data-[disabled]:tw-border-grayscale-10 data-[disabled]:tw-ring-transparent" />
        </Tooltip>
      </SliderRadix.Root>
    );
  },
);

export default Slider;