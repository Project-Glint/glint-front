import { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { RadioButton } from 'components';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story, context) => {
      const form = useForm({
        defaultValues: {
          radio: '',
        },
      });
      return (
        <Story {...context} args={{ ...context.args, control: form.control }} />
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    name: 'radio',
    radioList: [
      { key: 'option1', label: '옵션 1' },
      { key: 'option2', label: '옵션 2' },
      { key: 'option3', label: '옵션 3' },
    ],
  },
};
