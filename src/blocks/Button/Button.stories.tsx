// Button.stories.ts|tsx

import React from "react";
import { ComponentMeta } from "@storybook/react";

import Button, { ButtonProps } from "./";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const defaultArgs: ButtonProps = {
  children: "Search",
};
const Template = (args: ButtonProps) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = defaultArgs;
