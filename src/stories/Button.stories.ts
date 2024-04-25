import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Buttons/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    // onClick: fn(),
    // @ts-ignore
    onPress: window.changeTheme,
    children: 'Button',
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    children: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'solid',
    color: 'secondary',
    children: 'Secondary',
  },
};

export const Default: Story = {
  args: {
    variant: 'solid',
    color: 'default',
    children: 'Default',
  },
};

export const Success: Story = {
  args: {
    variant: 'solid',
    color: 'success',
    children: 'Success',
  },
};

export const Warning: Story = {
  args: {
    variant: 'solid',
    color: 'warning',
    children: 'Warning',
  },
};

export const Danger: Story = {
  args: {
    variant: 'solid',
    color: 'danger',
    children: 'Danger',
  },
};

export const Solid: Story = {
  args: {
    variant: 'solid',
    color: 'primary',
    children: 'Solid',
  },
};

export const Bordered: Story = {
  args: {
    variant: 'bordered',
    color: 'primary',
    children: 'Bordered',
  },
};

export const Light: Story = {
  args: {
    variant: 'light',
    color: 'primary',
    children: 'Light',
  },
};

export const Flat: Story = {
  args: {
    variant: 'flat',
    color: 'primary',
    children: 'Flat',
  },
};

export const Faded: Story = {
  args: {
    variant: 'faded',
    color: 'primary',
    children: 'Faded',
  },
};

export const Shadow: Story = {
  args: {
    variant: 'shadow',
    color: 'primary',
    children: 'Shadow',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    color: 'primary',
    children: 'Ghost',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    color: 'secondary',
    children: 'Small',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    color: 'secondary',
    children: 'Medium',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    color: 'secondary',
    children: 'Large',
  },
};

export const RadiusFull: Story = {
  args: {
    radius: 'full',
    color: 'primary',
    children: 'RadiusFull',
  },
};

export const RadiusLg: Story = {
  args: {
    radius: 'lg',
    color: 'primary',
    children: 'RadiusLg',
  },
};

export const RadiusMd: Story = {
  args: {
    radius: 'md',
    color: 'primary',
    children: 'RadiusMd',
  },
};

export const RadiusSm: Story = {
  args: {
    radius: 'sm',
    color: 'primary',
    children: 'RadiusSm',
  },
};

export const RadiusNone: Story = {
  args: {
    radius: 'none',
    color: 'primary',
    children: 'RadiusNone',
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    color: 'primary',
    children: 'Loading',
  },
};
