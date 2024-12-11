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
      control: 'select',
      options: ['default', 'pressed', 'icon'],
      table: {
        type: { summary: 'default | pressed | icon' },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      control: 'select',
      options: ['primary', 'danger', 'warning', 'success', 'info'],
    },
    outline: {
      control: 'boolean',
    },
    disabled: { control: 'boolean' },
    handleClick: { action: 'clicked' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: 'default',
    color: 'primary',
    size: 'md',
    outline: false,
    children: 'Button',
  },
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Button color="primary">Primary</Button>
      <Button color="danger">Danger</Button>
      <Button color="warning">Warning</Button>
      <Button color="success">Success</Button>
      <Button color="info">Info</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Button size="sm" color="primary">
        Small
      </Button>
      <Button size="md" color="primary">
        Medium
      </Button>
      <Button size="lg" color="primary">
        Large
      </Button>
    </div>
  ),
};

export const Outlined: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Button outline size="md">
        Default
      </Button>
      <Button outline variant="pressed" size="md">
        Pressed
      </Button>
      <Button outline disabled size="md">
        Disabled
      </Button>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => {
    const colors = ['primary', 'danger', 'warning', 'success', 'info'] as const;
    const sizes = ['sm', 'md', 'lg'] as const;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* Regular Buttons */}
        <div>
          <h3>Regular Buttons</h3>
          <div
            style={{
              display: 'flex',
              gap: '8px',
              flexWrap: 'wrap',
              marginTop: '8px',
            }}
          >
            {colors.map((color) => (
              <Button key={color} color={color}>
                {color}
              </Button>
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              gap: '8px',
              flexWrap: 'wrap',
              marginTop: '8px',
            }}
          >
            <Button color="primary">Default</Button>
            <Button color="primary" variant="pressed">
              Pressed
            </Button>
            <Button color="primary" disabled>
              Disabled
            </Button>
          </div>
        </div>

        {/* Outline Buttons */}
        <div>
          <h3>Outline Buttons</h3>
          <div
            style={{
              display: 'flex',
              gap: '8px',
              flexWrap: 'wrap',
              marginTop: '8px',
            }}
          >
            <Button outline>Default</Button>
            <Button outline variant="pressed">
              Pressed
            </Button>
            <Button outline disabled>
              Disabled
            </Button>
          </div>
        </div>

        {/* Size Variations */}
        <div>
          <h3>Size Variations</h3>
          <div
            style={{
              display: 'flex',
              gap: '8px',
              flexWrap: 'wrap',
              marginTop: '8px',
            }}
          >
            {sizes.map((size) => (
              <Button key={size} color="primary" size={size}>
                {size}
              </Button>
            ))}
          </div>
        </div>
      </div>
    );
  },
};
