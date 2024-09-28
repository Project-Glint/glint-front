import type { Meta, StoryObj } from '@storybook/react';
import { Button } from 'components';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'xsPink',
        'xsWhite',
        'smPink',
        'mdPink',
        'lgPink',
        'mdWhite',
        'underline',
        'icon',
      ],
    },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'mdPink',
    disabled: false,
  },
};

export const XsPink: Story = {
  args: {
    children: 'Xs Pink Button',
    variant: 'xsPink',
    disabled: false,
  },
};

export const Underline: Story = {
  args: {
    children: 'Underline Button',
    variant: 'underline',
    disabled: false,
  },
};

export const IconButton: Story = {
  args: {
    children: 'Icon Button',
    variant: 'icon',
    disabled: false,
  },
};
