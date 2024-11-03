import { Meta, StoryObj } from '@storybook/react';
import { Textarea } from 'components';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {},
};
