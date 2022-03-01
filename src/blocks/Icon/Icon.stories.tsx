// Button.stories.ts|tsx

import React from "react";
import { ComponentMeta } from "@storybook/react";

import Icon, { IconProps } from "./";

export default {
  title: "Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const defaultArgs: IconProps = {
  name: "search",
};
const Template = (args: IconProps) => <Icon {...args} />;
export const Primary = Template.bind({});
Primary.args = defaultArgs;
