/* eslint-disable-next-line */
import type { Meta, StoryObj } from "@storybook/react";
import { AppButton } from "@tafer/react-ui";

const meta: Meta<typeof AppButton> = {
  title: "Components/Button",
  component: AppButton,
  args: {
    label: "Click me",
  },
};

export default meta;

type Story = StoryObj<typeof AppButton>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};
