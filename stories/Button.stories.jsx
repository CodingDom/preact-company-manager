import { fn } from "@storybook/test";

import { Button, ButtonTypes } from "../app/javascript/components/atoms/Button";

export default {
  title: "Library/Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    type: {
      options: ButtonTypes,
      control: { type: "radio" },
    },
    onClick: { action: "onClick" },
  },
  args: { onClick: fn() },
};

export const Primary = {
  args: {
    type: ButtonTypes.Primary,
    label: "Button",
  },
};
