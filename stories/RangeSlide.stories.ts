import { Meta, StoryObj } from '@storybook/react';
import { RangeSlide, DualRangeSlide } from 'components';

const meta: Meta<typeof RangeSlide> = {
  title: 'Components/RangeSlide',
  component: RangeSlide,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof RangeSlide>;

export const Default: Story = {
  args: {},
};

export const Dual: Story = {
  render: DualRangeSlide,
};
