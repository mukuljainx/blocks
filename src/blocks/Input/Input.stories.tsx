// Button.stories.ts|tsx

import React from "react";
import { ComponentMeta } from "@storybook/react";
import { FiSearch, FiX } from "react-icons/fi";

import Input, { InputProps } from "./";

console.log(FiSearch);

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
      <FiSearch />
    </>
  ),
  right: (
    <>
      <FiX tabIndex={0} />
    </>
  ),
};
