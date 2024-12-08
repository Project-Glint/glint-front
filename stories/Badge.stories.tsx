import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from 'components';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['NEW', 'NUMBER', 'DOT', 'CONTENT'],
      table: {
        type: { summary: 'NEW | NUMBER | DOT | CONTENT' },
        defaultValue: { summary: 'CONTENT' },
      },
    },
    size: {
      control: 'select',
      options: ['md', 'lg'],
    },
    outline: {
      control: 'boolean',
    },
    color: {
      control: 'select',
      options: ['RED', 'PRIMARY', 'LIGHT_PRIMARY', 'LIGHT_MONO', 'MONO'],
    },
    label: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

export const DotBadges: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Badge type="DOT" color="PRIMARY" />
      <Badge type="DOT" color="RED" />
    </div>
  ),
};

export const NumberBadges: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Badge type="NUMBER" color="PRIMARY" label="1" />
      <Badge type="NUMBER" color="RED" label="1" />
    </div>
  ),
};

export const NewBadges: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Badge type="NEW" color="PRIMARY" />
      <Badge type="NEW" color="RED" />
    </div>
  ),
};

export const ContentBadges: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '10px' }}>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Badge type="CONTENT" color="PRIMARY" size="lg" label="Label" />
        <Badge type="CONTENT" color="LIGHT_PRIMARY" size="lg" label="Label" />
        <Badge type="CONTENT" color="PRIMARY" size="lg" label="Label" outline />
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Badge type="CONTENT" color="PRIMARY" size="md" label="Label" />
        <Badge type="CONTENT" color="LIGHT_PRIMARY" size="md" label="Label" />
        <Badge type="CONTENT" color="PRIMARY" size="md" label="Label" outline />
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Badge type="CONTENT" color="MONO" size="lg" label="Label" />
        <Badge type="CONTENT" color="LIGHT_MONO" size="lg" label="Label" />
        <Badge type="CONTENT" color="MONO" size="lg" label="Label" outline />
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Badge type="CONTENT" color="MONO" size="md" label="Label" />
        <Badge type="CONTENT" color="LIGHT_MONO" size="md" label="Label" />
        <Badge type="CONTENT" color="MONO" size="md" label="Label" outline />
      </div>
    </div>
  ),
};
