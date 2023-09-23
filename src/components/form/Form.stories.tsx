import React, { useState } from 'react';
import TextInput from './TextInput';
import { StoryFn } from '@storybook/react';
import Icon from '../Icon';
import { faSmile } from '@fortawesome/pro-regular-svg-icons';
import Field from './field';
import TextArea from './TextArea';
import Select from '../Select';

export default {
  title: 'Form',
  argTypes: {
    label: {
      type: 'string',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    required: {
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
      type: 'string',
    },
    placeholder: {
      type: 'string',
    },
    caption: {
      type: 'string',
    },
    loading: {
      control: {
        type: 'boolean',
      },
    },
  },
};

const OPTIONS = Array.from(Array(10).keys()).map((index) => ({
  value: `option${index}`,
  label: `Option ${index + 1}`,
}));

const Template: StoryFn = (args: any) => {
  const [value, setValue] = useState('');

  return (
    <div className="tw-flex tw-flex-col tw-gap-6 tw-h-[600px]">
      <Field.Group>
        {args.label && (
          <Field.Label required={!!args.required}>{args.label}</Field.Label>
        )}
        <TextInput
          error={args.error}
          value={value}
          disabled={!!args.disabled}
          iconBefore={args.iconBefore && <Icon icon={faSmile} />}
          iconAfter={args.iconAfter && <Icon icon={faSmile} />}
          onChange={(e) => setValue(e.target.value)}
          placeholder={args.placeholder}
        />
        <Field.Error>{args.error}</Field.Error>
        {args.caption && (
          <Field.Caption
            cta={{
              label: 'CTA',
              onClick: () => null,
            }}
          >
            {args.caption}
          </Field.Caption>
        )}
      </Field.Group>
      <Field.Group>
        {args.label && (
          <Field.Label required={!!args.required}>{args.label}</Field.Label>
        )}
        <TextArea
          error={args.error}
          value={value}
          disabled={!!args.disabled}
          onChange={(e) => setValue(e.target.value)}
          placeholder={args.placeholder}
          resize={false}
        />
        <Field.Error>{args.error}</Field.Error>
        {args.caption && (
          <Field.Caption
            cta={{
              label: 'CTA',
              onClick: () => null,
            }}
          >
            {args.caption}
          </Field.Caption>
        )}
      </Field.Group>
      <Field.Group>
        {args.label && (
          <Field.Label required={!!args.required}>{args.label}</Field.Label>
        )}
        <Select
          options={OPTIONS}
          aria-invalid={!!args.error}
          isDisabled={!!args.disabled}
          isLoading={!!args.loading}
        />
        <Field.Error>{args.error}</Field.Error>
        {args.caption && (
          <Field.Caption
            cta={{
              label: 'CTA',
              onClick: () => null,
            }}
          >
            {args.caption}
          </Field.Caption>
        )}
      </Field.Group>
    </div>
  );
};

export const Example = Template.bind({});
