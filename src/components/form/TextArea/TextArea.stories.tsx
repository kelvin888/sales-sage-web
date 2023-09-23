import React, { useState } from 'react';
import TextArea, { TextAreaProps } from './index';
import { StoryFn } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Form/TextArea',
  component: TextArea,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    error: {
      control: {
        type: 'boolean',
      },
    },
    placeholder: {
      type: 'string',
    },
    resize: {
      control: {
        type: 'boolean',
      },
    },
  },
  decorators: [withDesign],
};

const Template: StoryFn<typeof TextArea> = (args: TextAreaProps) => {
  const [value, setValue] = useState('');

  return (
    <TextArea
      error={args.error}
      value={value}
      disabled={!!args.disabled}
      onChange={(e) => setValue(e.target.value)}
      placeholder={args.placeholder}
      resize={!!args.resize}
    />
  );
};

export const Example = Template.bind({});

Example.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/4keb2pydo1fISwMrQmsIKr/%5BKontentino%5D-Base?node-id=2365%3A904',
  },
};
