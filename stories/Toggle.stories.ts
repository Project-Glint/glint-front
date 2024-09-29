import { Meta, StoryObj } from '@storybook/react';
import { Toggle } from 'components/toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {},
};
