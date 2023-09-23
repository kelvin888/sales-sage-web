import React, { useState } from 'react';
import { StoryFn } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import Slider from './index';

export default {
  title: 'Form/Slider',
  component: Slider,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    tooltip: {
      control: {
        type: 'boolean',
      },
    },
  },
  decorators: [withDesign],
};

const Template: StoryFn = (args) => {
  const [value, setValue] = useState<number[]>([0]);

  return (
    <Slider
      onValueChange={setValue}
      value={value}
      disabled={args.disabled}
      tooltip={args.tooltip ? value[0] : undefined}
    />
  );
};

export const Example = Template.bind({});

Example.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/4keb2pydo1fISwMrQmsIKr/Base?type=design&node-id=7836-24173&mode=design&t=saTmffumP0OzHTbM-4',
  },
};