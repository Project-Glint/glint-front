import { Meta, StoryObj } from '@storybook/react';
import { Badge } from 'components';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Badge안에 들어갈 Text' },
    variant: {
      control: { type: 'select' },
      options: ['default', 'icon'],
    },
    isSelected: {
      control: 'boolean',
      description: 'Badge가 선택된 상태인지, 아닌지',
    },
    handleClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    label: 'Badge',
    isSelected: false,
  },
};
