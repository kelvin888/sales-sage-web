import React, { useState } from 'react';
import TextInput, { TextInputProps } from './index';
import { StoryFn } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import Icon from '../../Icon';
import { faSmile } from '@fortawesome/pro-regular-svg-icons';
import IconButton from '../../IconButton';

export default {
  title: 'Form/TextInput',
  component: TextInput,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    iconBefore: {
      control: {
        type: 'boolean',
      },
    },
    iconAfter: {
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
  },
  decorators: [withDesign],
};

const Template: StoryFn<typeof TextInput> = (args: TextInputProps) => {
  const [value, setValue] = useState('');

  return (
    <TextInput
      error={args.error}
      value={value}
      disabled={!!args.disabled}
      iconBefore={args.iconBefore && <Icon icon={faSmile} />}
      iconAfter={
        args.iconAfter && (
          <IconButton
            size="small"
            icon={<Icon icon={faSmile} />}
            onClick={() => console.log('click')}
          />
        )
      }
      onChange={(e) => setValue(e.target.value)}
      placeholder={args.placeholder}
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
