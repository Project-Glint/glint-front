import { Meta, StoryObj } from '@storybook/react';
import { Tabs } from 'components';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    tabList: [
      { key: 'officeWorker', label: '직장인' },
      { key: 'student', label: '대학생' },
    ],
  },
};
