import { Meta, StoryObj } from '@storybook/react';
import { Badge } from 'components';
import { useState } from 'react';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

      const handleBadgeClick = (key: string) => {
        if (context.args.isMultiple) {
          setSelectedKeys((prev) =>
            prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
          );
        } else {
          setSelectedKeys((prev) => (prev.includes(key) ? [] : [key]));
        }
      };

      return (
        <Story
          args={{
            ...context.args,
            selectedKeys,
            handleClick: handleBadgeClick,
          }}
        />
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const SingleBadge: Story = {
  args: {
    items: {
      key: 'single',
      label: 'Single Badge',
    },
    isClickable: true,
  },
};
export const SingleClickBadges: Story = {
  args: {
    items: [
      { key: 'badge1', label: '배지 1' },
      { key: 'badge2', label: '배지 2' },
      { key: 'badge3', label: '배지 3' },
    ],
    isMultiple: false,
    isClickable: true,
  },
};

export const MultipleBadges: Story = {
  args: {
    items: [
      { key: 'badge1', label: '배지 1' },
      { key: 'badge2', label: '배지 2' },
      { key: 'badge3', label: '배지 3' },
    ],
    isMultiple: true,
    isClickable: true,
  },
};
