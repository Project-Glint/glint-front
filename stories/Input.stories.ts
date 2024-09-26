import { Meta, StoryObj } from '@storybook/react';
import { Input } from 'components';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'placeholder',
  },
};

export const Error: Story = {
  args: {
    type: 'text',
    hasError: true,
  },
};
