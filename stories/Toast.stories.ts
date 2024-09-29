import { Meta, StoryObj } from '@storybook/react';
import { Toast } from 'components/toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {},
};
