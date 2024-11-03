import { Meta, StoryObj } from '@storybook/react';
import { Select } from 'components';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {},
};
