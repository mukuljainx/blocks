import React from "react";
import { ComponentMeta } from "@storybook/react";
import Icon from "../Icon";

import Input, { InputProps } from "./";

export default {
  title: "Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const defaultArgs: InputProps = {
  placeholder: "Enter your name",
};
const Template = (args: InputProps) => <Input {...args} />;
export const Primary = Template.bind({});
Primary.args = defaultArgs;

export const WithError = Template.bind({});
WithError.args = { ...defaultArgs, error: "Name cannot be empty" };

export const WithLeftAndRight = Template.bind({});
WithLeftAndRight.args = {
  ...defaultArgs,
  left: (
    <>
      <Icon name="search" />
    </>
  ),
  right: (
    <>
      <Icon name="x" tabIndex={0} />
    </>
  ),
};
