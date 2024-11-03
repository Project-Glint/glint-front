import { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from 'components';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {},
};
