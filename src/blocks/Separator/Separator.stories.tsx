import React from 'react';
import { ComponentMeta } from '@storybook/react';

import Separator, { SeparatorProps } from '.';

export default {
  title: 'Separator',
  component: Separator,
} as ComponentMeta<typeof Separator>;

const defaultArgs: SeparatorProps = {
  children: 'or sign in with',
};
const Template = (args: SeparatorProps) => <Separator {...args} />;

export const Primary = Template.bind({});
Primary.args = defaultArgs;

export const withoutText = Template.bind({});
withoutText.args = { ...defaultArgs, children: null };
