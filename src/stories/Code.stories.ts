import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Code } from "@nextui-org/react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Code/Code',
  component: Code,
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
    children: 'npm install react',
  },
} satisfies Meta<typeof Code>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
  args: {},
};

export const Small: Story = {
  args: {
        size: 'sm',
  },
};

export const Medium: Story = {
  args: {
        size: 'md',
  },
};

export const Large: Story = {
    args: {
        size: 'lg',
    },
};

export const Primary: Story = {
    args: {
        color: 'primary',
    },
};

export const Secondary: Story = {
    args: {
        color: 'secondary',
    },
};

export const Default: Story = {
    args: {
        color: 'default',
    },
};

export const Success: Story = {
    args: {
        color: 'success',
    },
};

export const Warning: Story = {
    args: {
        color: 'warning',
    },
};

export const Danger: Story = {
    args: {
        color: 'danger',
    },
};

export const RadiusFull: Story = {
    args: {
        radius: 'full',
    },
};

export const RadiusLg: Story = {
    args: {
        radius: 'lg',
    },
};

export const RadiusMd: Story = {
    args: {
        radius: 'md',
    },
};

export const RadiusSm: Story = {
    args: {
        radius: 'sm',
    },
};

export const RadiusNone: Story = {
    args: {
        radius: 'none',
    },
};
