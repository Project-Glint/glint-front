import { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from 'components';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {},
};
