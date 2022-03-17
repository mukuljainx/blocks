import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { FiSearch } from 'react-icons/fi';

import Button, { ButtonProps } from './';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const defaultArgs: ButtonProps = {
  children: 'Search',
};
const Template = (args: ButtonProps) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = defaultArgs;

export const withIcon = Template.bind({});
withIcon.args = { ...defaultArgs, left: <FiSearch /> };

export const fillWidth = Template.bind({});
fillWidth.args = { ...defaultArgs, fullWidth: true };
